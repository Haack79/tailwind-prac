import React from 'react'
import Link from 'next/link'
// justify - x axis items
// items - y axis items
// flex-col - column direction
// flex-row - row direction
// flex - default direction is row
// justify-between - space between items
// flex-start - start of the axis - default
// flex-wrap - wrap items to next line if they don't fit in the current line 
// flex-grow - grow the item to fill the space
// flex-shrink - shrink the item to fit in the space
// flex-basis - set the initial size of the item
// flex-auto - set the item to grow or shrink based on the space available
// flex-1 - set the item to grow to fill the space
const NavBar = () => {
  return (
    <div className="bg-indigo-400 h-15 flex items-center md:justify-between p-4 sticky top-0 w-full z-50">
      <Link className="mr-4 md:m-0" href='/'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-2 pb-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        Home
      </Link>
      <Link className="mr-4 md:m-0" href='/about'>About</Link>
      <Link className="mr-4 md:m-0" href='/users'>Users</Link>
      <Link className="mr-4 md:m-0" href='/accordion'>Accordion</Link>
      <Link className="mr-4 md:m-0" href='/dashboard'>Dashboard</Link>
      <Link className="mr-4 md:m-0" href='/flags'>Flags</Link>
    </div>
  )
}

export default NavBar
