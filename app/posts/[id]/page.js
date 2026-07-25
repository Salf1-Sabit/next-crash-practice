import getPost from '@/lib/getPost';
import React from 'react'

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body
  }
}

export default async function Post({ params }) {
  const { id } = await params;
  const post = await getPost(id);
    
  return (
    <main className='mt-10'>
        <h2 className='font-bold text-2xl mb-4'>
            Post {id} |
        </h2>
        <h3 className='font-bold mb-2'>
            {post.title} 
        </h3>
        <p className='bg-gray-100 p-2'>{post.body}</p>
    </main>
  )
}
