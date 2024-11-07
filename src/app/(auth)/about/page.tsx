import React from 'react'

const page = () => {
  return (
    <div>
      <div className="w-[100%] flex justify-center items-center">
      <div className='w-[80%] flex flex-col justify-center items-center'>
        <div className="flex justify-center items-center mt-[5rem] mb-[2rem] text-shadow-sm text-shadow-slate-300">
       <h1 className='md:text-5xl text-4xl font-bold text-[#333333] cursor-pointer transition-transform hover:scale-105'>About <br/><span className='pl-4 text-shadow-sm'>Quaid-E-Azam</span></h1>
       </div>
       <div className="flex justify-center items-center">
       <p className='text-xl cursor-pointer font-medium text-black'>
       <span className='text-xl font-bold text-shadow-sm text-shadow-slate-400'>Quaid-e-Azam Muhammad Ali Jinnah</span>, born on <span  className='text-xl font-bold text-shadow-sm text-shadow-slate-400'>December 25, 1876</span>, was the founder of <span  className='text-xl font-bold text-shadow-sm text-shadow-slate-400'>Pakistan</span>.He led the country to independence in <span  className='text-xl font-bold text-shadow-sm text-shadow-slate-400'>1947</span>. His principles of <span  className='text-xl font-bold text-shadow-sm text-shadow-slate-400'>
        Unity, Faith, and Discipline</span> continue to inspire millions. Jinnah vision and leadership were pivotal in creating a separate nation for Muslims in the <span  className='text-xl font-bold text-shadow-sm text-shadow-slate-400'>Indian subcontinent</span>.His principles of Unity, Faith, and Discipline continue to inspire <span  className='text-xl font-bold text-shadow-sm text-shadow-slate-400'>millions today</span>, serving as a beacon of hope and resilience.</p>
       </div>
      </div>
      </div>
    </div>
  )
}

export default page