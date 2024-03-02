"use client";
import Link from "next/link";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaCode } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [click, setclick] = useState(false);
  const handleClick = () => {
    setclick(!click);
  };

  const content = (
    <>
      <div className="flex-col items-center justify-end mt-11 h-32 w-20 rounded text-gray-800 bg-white shadow-md md:hidden block absolute  right-1 transition ">
        <Link
          className="flex items-center  text-xs mx-2 py-2  transition-colors hover:text-gray-900 "
          href="/"
        >
          Home
        </Link>
        <Link
          className="flex items-center  text-xs  mx-2 py-2  transition-colors hover:text-gray-900 "
          href="/"
        >
          About
        </Link>
        <Link
          className="flex items-center  text-xs mx-2  py-2  transition-colors hover:text-gray-900 "
          href="/"
        >
          Portfolio
        </Link>
        <Link
          className="flex items-center  text-xs mx-2  py-2  transition-colors hover:text-gray-900 "
          href="/contact"
        >
          Contact
        </Link>
      </div>
    </>
  );

  return (
    <nav
      className={`flex justify-between px-2 md:px-4 border-b bg-gray-50 `}
    >
      <Link className="h-10 flex items-center space-x-1 font-sans" href="/">
        <FaCode />
        <span className="text-lg">GxAryan</span>
      </Link>
      <div className="hidden items-center font-lg md:flex space-x-6 lg:space-x-10 justify-end">
        <Link className="transition-colors hover:text-purple-800 " href="/">
          Home
        </Link>
        <Link className="transition-colors hover:text-purple-800 " href="#">
          About
        </Link>
        <Link className="transition-colors hover:text-purple-800 " href="#">
          Portfolio
        </Link>
        <Link className="transition-colors hover:text-purple-800 " href="#">
          Contact
        </Link>
      </div>
      <div className="md:hidden">{click && content}</div>
      <button
        onClick={handleClick}
        className=" block md:hidden h-10 sm:border-none transition "
      >
        {click ? <FaTimes /> : <TfiMenuAlt />}
      </button>
    </nav>
  );
}

// font-[Poppins]
// "use client";
// import { TfiMenuAlt } from "react-icons/tfi";
// import React, { useState } from 'react'
// import { FaCode } from "react-icons/fa6";

// const Navbar = () => {
//     let Links =[
//       {name:"HOME",link:"/"},
//       {name:"SERVICE",link:"/"},
//       {name:"ABOUT",link:"/"},
//       {name:"BLOG'S",link:"/"},
//       {name:"CONTACT",link:"/"},
//     ];
//     let [open,setOpen]=useState(false);
//   return (
//     <div className='shadow-md w-full fixed top-0 left-0'>
//       <div className='md:flex items-center justify-between bg-white py-2 md:px-10 px-2'>
//       <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
//       text-gray-800'>
//         <span className='text-indigo-600 mr-1 pt-2'>
//         <FaCode />
//         </span>
//         gxaryan
//       </div>
      
//       <div onClick={()=>setOpen(!open)} className='text-2xl absolute right-2 top-4 cursor-pointer md:hidden'>
//       <TfiMenuAlt name={open ? 'close':'menu'} />
//       </div>

//       <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-14 ':'top-[-490px]'}`}>
//         {
//           Links.map((link)=>(
//             <li key={link.name} className='md:ml-8 text-sm md:my-0 my-4'>
//               <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
//             </li>
//           ))
//         }
//         {/* <Button>
//           Get Started
//         </Button> */}
//       </ul>
//       </div>
//     </div>
//   )
// }

// export default Navbar