import React from 'react'

const Navbar = () => {
  return (
  <nav className='bg-slate-800 text-white'>
    <div className="mycontainer flex justify-between items-center px-4 py-5 h-16">
    <div className="logo px-20 md:px-32 font-bold text-2xl">
        <span className='text-green-500'>&lt;</span>
        Pass
        <span className='text-green-500'>OP/&gt;</span>
    </div>
    {/* <ul>
        <li className='flex gap-4 pe-32'>
            <a className='hover:font-bold' href="/">Home</a>
            <a className='hover:font-bold' href="#">About</a>
            <a className='hover:font-bold' href="#">Contact</a>
        </li>
    </ul> */}
    <button className='bg-green-600 text-white my-5 mx-5 rounded-full flex justify-center items-center ring-white ring-1'>
      <img className='invert w-10 p-2  md:p-1 ' src="/icons/github.png" alt="" />
      <span className='font-bold px-2'>GitHub</span>
    </button>
    </div>
  </nav>
  )
}

export default Navbar
