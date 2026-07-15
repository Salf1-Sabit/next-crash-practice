import { notFound } from 'next/navigation';
import React from 'react'

export default async function BlogPage({ params }) {
  const { id } = await params;

  if (
      isNaN(id)
      || parseInt(id) > 3
      || parseInt(id) < 1
    ) {
    notFound();
  }
    
  return (
    <article className='mt-10'>
      <div>
        <h2 className='text-2xl font-semibold'>Blog {id} | </h2>
        <h4 className='mt-4 font-semibold'>Lorem ipsum dolor sit amet.</h4>
        
        <div className='bg-red-200 mt-2 p-4'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iste provident eaque, vel repellendus enim placeat fugit neque quasi consequuntur quaerat magnam alias iusto voluptas numquam repellat nesciunt eum ullam assumenda laborum delectus magni doloribus! Reprehenderit sint ipsam rerum, laboriosam, odit, natus officia nihil earum sit fugiat mollitia quod ut?</p> 
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima minus quae veniam excepturi? Fugit fugiat delectus incidunt? Laboriosam magni atque, nobis aut ut hic voluptatum vel eaque voluptate illum, animi cumque? Minus, sunt natus nemo soluta ipsam molestias facere eligendi minima facilis, quas quasi sit sequi dignissimos est et earum?</p>
        </div>
      </div>
    </article>
  )
}
