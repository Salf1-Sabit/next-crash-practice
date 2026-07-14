import Link from 'next/link'
import React from 'react'

export default function AboutLayout({ children }) {
  return (
    <main>
      <nav className='flex gap-12 mt-10'>
        <ul><Link href="/about/mission" className='border-b-1'>Mission</Link></ul>
        <ul><Link href="/about/vision" className='border-b-1'>Vision</Link></ul>
        <ul><Link href="/about/ipsum" className='border-b-1'>Ipsum</Link></ul>
      </nav>
      {children}
    </main>
  )
}
