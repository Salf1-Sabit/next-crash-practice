import React from 'react'

export default async function BlogPage({ params }) {
  const { id } = await params;
    
  return (
    <article className='mt-10'>
      <div>
        <h3 className='text-2xl font-semibold'>Blog {id} | </h3>
        <p></p>
      </div>
    </article>
  )
}
