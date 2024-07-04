import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 flex flex-col justify-center items-center text-white bottom-0 w-full'>
           
                <div className="logo px-32 font-bold text-2xl">
                    <span className='text-green-500'>&lt;</span>
                    Pass
                    <span className='text-green-500'>OP/&gt;</span>
                </div>
               <div className='flex'> Create with <img className='w-7 mx-2' src="/icons/heart.png" alt="" /> by Malaika Khan </div>
          
        </div>
    )
}

export default Footer
