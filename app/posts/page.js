import getAllPosts from '@/lib/getAllPosts'
import Link from 'next/link';
import React from 'react'

export default async function Posts() {
  const posts = await getAllPosts();

  return (
    <main className='mt-10'>
      <h2 className='text-2xl font-semibold mb-4'>All Posts | </h2>
      
      <ul className='mt-6'>
        {
            posts.map(post => 
              <li 
                key={post.id}
                className='mb-6'
              >
                <Link 
                  href={`posts/${post.id}`}
                  className='bg-gray-100 p-2 transition-shadow hover:shadow'
                >
                  {post.title}
                </Link>
              </li>
            )
        }
      </ul>
    </main>
  )
}
