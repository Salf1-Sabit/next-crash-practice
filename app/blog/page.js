import Link from 'next/link';
import React from 'react'

export default function Blog() {
  const blogs = [
    {
        id: 1,
        title: "Blog 1",
        description: "Description of blog 1, Lorem ipsum dolor sit amet consectetur"
    },
    {
        id: 2,
        title: "Blog 2",
        description: "Description of blog 2, electus cum est voluptas fuga ducimus"
    },
    {
        id: 3,
        title: "Blog 3",
        description: "Description of blog 3, quo quaerat rerum dicta aliquam voluptatum"
    }
  ];
    
  return (
    <main className='mt-10'>
        <h2 className='text-2xl font-semibold mb-4'>Blog |</h2>
        <p className='p-4 bg-orange-200'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus cum est voluptas fuga ducimus quis iure dicta vel sapiente cupiditate maiores fugit, accusantium, veritatis iste tempore ipsa quaerat alias. Culpa quod fugiat excepturi ipsum possimus dolorum odio qui molestias, vel doloremque eligendi, officia ex reiciendis non tempore nam nisi tempora. Minus quos voluptatem, quo quaerat rerum dicta aliquam voluptatum consectetur similique non reiciendis esse atque ad at, eligendi aspernatur suscipit cum! Maxime optio odit aut, pariatur voluptas facere in quisquam perferendis magnam. Labore perspiciatis sapiente, ad nemo, itaque omnis accusantium facere dolorum assumenda pariatur vero voluptates temporibus earum ipsam dicta.</p>

        <ul className='mt-6 flex gap-6'>
            {
                blogs.map(blog => (
                    <li key={blog.title}
                        className='bg-orange-200 p-2'
                    >
                        <Link href={`/blog/${blog.id}`}>
                            {blog.title}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </main>
  )
}
