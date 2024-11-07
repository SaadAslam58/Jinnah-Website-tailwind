import React from 'react'
import { FaAddressBook, FaPhone, FaEnvelope, FaMeetup} from 'react-icons/fa'
const page = () => {
  return (
    <div>
      <div className='w-[100%] h-[80vh] flex flex-col justify-center items-center'>
      <div className='w-[90%] md:w-[80%] flex flex-col justify-center'>
        <h1 ><span className='text-4xl mt-4 mb-4 font-bold text-[#333333] cursor-pointer transition transition-transform transition-shadow hover:shadow-lg hover:shadow-black duration-300 ease-in-out hover:scale-105 inline-flex items-center p-1 rounded-md'>Meet Us <FaMeetup/></span></h1>
        <p><span className='text-xl font-bold text-[#333333] cursor-pointer transition transition-transform transition-shadow hover:shadow-lg hover:shadow-black duration-300 ease-in-out hover:scale-105 inline-flex items-center p-1 rounded-md mb-1'><FaPhone className='mr-1'/> 0341-2322685</span></p>
        <p><span className='text-xl font-bold text-[#333333] cursor-pointer transition transition-transform transition-shadow hover:shadow-lg hover:shadow-black duration-300 ease-in-out hover:scale-105 inline-flex items-center p-1 rounded-md mb-1'><FaEnvelope className='mr-1'/> saadxpert58@gmail.com</span></p>
        <p><span className='text-xl font-bold text-[#333333] cursor-pointer transition transition-transform transition-shadow hover:shadow-lg hover:shadow-black duration-300 ease-in-out hover:scale-105 inline-flex items-center p-1 rounded-md mb-1'><FaAddressBook className='mr-1'/> Nort Nazmabad Sector/C block 11</span></p>
      </div>
      </div>
    </div>
  )
}

export default page