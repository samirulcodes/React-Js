import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../components'
import appwriteService from "../appwrite/config";
import { useNavigate,  useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState(null)
    // here slug->slug kaha se lenge q ki edit krne aaye too user click krega fir uss page me jaye too this is availabe in URL
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost



// EXPLANATION

// This function, EditPost, is a React component that allows you to edit a blog post. Here's a simple breakdown:

// State Management:

// const [post, setPosts] = useState(null): This creates a state variable post and a function setPosts to update it. Initially, post is set to null.

// Getting the Post Slug:

// const {slug} = useParams(): This grabs the slug (a unique identifier, often in the URL) from the current route. The slug is used to fetch the specific post you want to edit.

// Navigation:

// const navigate = useNavigate(): This allows you to navigate to different pages programmatically.

// Fetching the Post:

// useEffect(() => {...}, [slug, navigate]): This useEffect runs when the component mounts or when slug or navigate change. It checks if a slug exists:
// If it does, it calls appwriteService.getPost(slug) to fetch the post data.
// If the post is found, it updates the post state with setPosts(post).
// If no slug is found, it navigates back to the home page ('/').

// Rendering:

// return post ? (...) : null: If the post is successfully fetched (post is not null), it renders the editing form inside a container. If post is still null, it returns nothing (null).


//SUMMARY

// This component is used to edit a post.
// It gets the post's unique identifier (slug) from the URL.
// It fetches the post data using the slug.
// If the post is found, it displays a form to edit the post.
// If the slug is missing or invalid, the user is redirected to the homepage.