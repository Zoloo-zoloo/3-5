import React from 'react'
import { footerLinks } from '../Data/Data'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='w-full bg-indigo-600 py-4 px-8 text-white flex flex-col md:flex-row justify-center mx-auto'>
        <div className='w-1/2 gap-10 flex'>
            {Object.entries(footerLinks).map(([items,link],index)=>(
                <div>
                    <p className='text-xl font-semibold mb-4 '>{items}</p>
                    <div className='flex flex-col gap-2'>
                        {
                            link.map((link)=> (
                             <div>
                                <a href={link.href}>{link.name}</a>
                             </div>
                             ))
                        }
                    </div>
                </div>
            ))}
        </div>
        <div className=' flex flex-row gap-6'>
            <FaFacebook className='w-10 h-10' />
            <FaInstagram className='w-10 h-10' />
            <FaXTwitter  className='w-10 h-10'/>
        </div>
    </div>
  )
}
 
export default Footer