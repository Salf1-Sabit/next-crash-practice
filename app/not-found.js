import Link from 'next/link'
 
export default function NotFound() {
  return (
    <main className='flex flex-col justify-center items-center mt-10'>
      <h2 className='text-2xl'>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link 
        href="/"
        className='bg-gray-200 px-2 py-1 rounded-sm mt-4'
      >
        Return Home
      </Link>
    </main>
  )
}