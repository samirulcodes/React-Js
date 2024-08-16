import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
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

export default Home


// EXPLANATION

// State Initialization (useState):
// It starts by creating a piece of state called posts, which is initially an empty array ([]).setPosts is a function used to update this posts state when needed.

// Side Effect (useEffect):
// useEffect is a hook that runs some code after the component renders. In this case, it's making a request to get some posts from appwriteService.When the posts are fetched, it checks if posts exist. If so, it updates the posts state with the data (posts.documents).

// Conditional Rendering:
// If there are no posts (posts.length === 0), it shows a message asking the user to log in to read posts. This is wrapped in some styled div elements for layout purposes.

// Rendering Posts:
// If there are posts, it displays them in a grid layout.Each post is represented by a PostCard component, and it uses the post's unique ID (post.$id) as the key.



// In short:
// Initially, it fetches posts from an external service.If no posts are available, it prompts the user to log in.If posts exist, it displays them using a grid of PostCard components.