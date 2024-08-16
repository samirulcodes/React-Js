import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}



// EXPLANATION

// Summary
// The code loads a specific post based on a "slug" from the URL, checks if the logged-in user is the author, and allows the user to delete the post if they are the author. If the post can't be found or deleted, the user is redirected to the homepage.


// Purpose of the Function:
// The Post function is responsible for displaying a specific post by fetching data based on a "slug" (a part of the URL that uniquely identifies the post) and allows the user to delete the post if they are the author.

// useState:
// const [post, setPost] = useState(null);This creates a piece of state called post and initializes it as null. When the post data is fetched from the server, the setPost function will be used to update it.

// useParams and useNavigate:
// { slug } = useParams(); gets the "slug" from the URL. It helps us know which post to load.useNavigate() allows us to redirect (navigate) to other pages, like going back to the homepage if something goes wrong.

// useSelector:
// useSelector gets the logged-in user’s data from the application's state (from something like Redux). This helps determine if the current user is the author of the post.


// isAuthor:
// isAuthor checks if the current user is the one who created the post. It compares the post.userId with the userData.$id to determine if the user is the author.


// useEffect:useEffect(() =>
// {...}, [slug, navigate]); runs some code when the component is first loaded or when the slug changes.Inside, it calls appwriteService.getPost(slug) to fetch the post from the server. If the post is found, it updates the state. If the post is not found or the slug is missing, it redirects the user to the homepage.


// deletePost Function:
// deletePost is a function that deletes the current post. It calls appwriteService.deletePost(post.$id) to delete the post. If successful, it also deletes any associated image file and navigates back to the homepage.