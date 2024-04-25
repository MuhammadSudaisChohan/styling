import React from 'react'

const Navbar = () => {
  return (
    <div className='flex py-4 px-4 justify-between bg-slate-400 '>
      <h1 className='text-2xl'>E-commerce</h1>
      <ul className='flex gap-5 '>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar

