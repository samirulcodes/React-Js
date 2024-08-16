import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => { }, [])
    // here no query so pass empty array
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts


// EXPLANATION

// What It Does:
// This component fetches a list of posts from a service and displays them on the page.

// How It Works:
// 1. Setting Up State:
// It starts by creating a place to store the posts using useState([]). Initially, this place is empty ([]).

// 2. Fetching Posts:

// When the component loads (using useEffect), it should fetch the posts from a service (appwriteService.getPosts([])).
// Once the posts are fetched, it updates the posts state with the fetched data.

// 3. Displaying Posts:
// It then displays the posts in a grid. Each post is shown inside a PostCard, and the grid is divided into four columns (w-1/4), so multiple posts are shown side by side.

// What’s Missing:
// The useEffect hook should include the code for fetching the posts, so it runs automatically when the component loads. The correct placement for the fetching code should be inside the useEffect hook.