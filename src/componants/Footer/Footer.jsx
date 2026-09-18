import React from 'react'
import { BiLogoFacebook } from 'react-icons/bi'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
   // قمنا بحذف الأقواس المربعة وتحويلها لكائن مباشر
   const footerData = {
      copiraight: " All Rights Reserved @ 2026.",
      nameDevelopment: "Development by Mohammad",
      socialIcon: [ 
         { icon: <BiLogoFacebook />, link: "https://www.facebook.com/" }, 
         { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/mohammad-basheer-010a4b3a3/" }, 
         { icon: <FaInstagram />, link: "https://www.instagram.com/" } 
      ]
   }

   return (
      <div className='flex justify-between items-start py-10 mx-9 border-t border-gray-500 max-sm:flex-wrap max-sm:gap-5'>
            <p>{footerData.copiraight}</p>
            <div>
               <p>{footerData.nameDevelopment}</p>
            </div>
            
            {/* عرض الأيقونات المخزنة داخل المصفوفة الفرعية */}
            <div className="flex gap-3 text-xl "> 
               {footerData.socialIcon.map((icon, index) => (
                  <Link 
                  key={index} 
                  to={icon.link} 
                  className='bg-blue-700 p-2 rounded-full text-white cursor-pointer transition-all hover:bg-blue-600 hover:scale-115 hover:-translate-y-1.5'
                  >
                     {icon.icon}
                  </Link>
               ))}
            </div>
      </div>
   )
}

export default Footer