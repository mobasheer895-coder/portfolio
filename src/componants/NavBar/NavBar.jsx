import React, { useState } from 'react'
import { FaMoon } from 'react-icons/fa'
import { IoIosSunny } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import { LuMenu } from 'react-icons/lu'

// الحل 1: تصحيح طريقة الاستيراد من المكتبة
import { Link as ScrollLink } from 'react-scroll'

const navLinks = [
    { content: "Home", link: "Hero" },
    { content: "About me", link: "About" },
    { content: "Education", link: "Education" },
    { content: "Projects", link: "Projects" },
    { content: "Contact", link: "Contact" }
]

const NavBar = ({ logo, mode, setMode }) => {
    const [Open, setOpen] = useState(false);

    const openMenu = () => {
        setOpen(!Open)
    }

    return (
        // أضفنا h-[70px] ثابت ليتوافق تماماً مع الـ offset المنفي
        <nav className='flex justify-between items-center px-9 z-20 fixed w-screen bg-white dark:bg-gray-800 h-18 shadow-sm'>
            <h2 className='text-xl font-bold dark:text-white'>{logo}</h2>
            
            <ul className='flex gap-4 max-sm:hidden dark:text-white'>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        {/* الحل 2: تصحيح فتح وإغلاق وسم الـ ScrollLink ليتضمن النص داخله */}
                        <ScrollLink
                            to={link.link}       
                            smooth={true}        
                            duration={500}  
                            offset={-70}         
                            spy={true}           
                            activeClass="text-blue-500 font-bold" 
                            className="cursor-pointer transition-all duration-300"
                        >
                            {link.content}
                        </ScrollLink>
                    </li>
                ))}
            </ul>
            
            <div className='flex items-center gap-3.5 rounded-full hover:bg-gray-500/20 p-2.5 ' >
                <button className='cursor-pointer transition-all hover:rotate-[-8deg] hover:scale-115' onClick={() => setMode(prev => !prev)}>
                    {mode ? <IoIosSunny className='text-white text-3xl' /> : <FaMoon className='text-2xl dark:text-white' />}
                </button>
                <button onClick={openMenu} className='cursor-pointer text-2xl transition-all hover:scale-125 sm:hidden dark:text-white'>
                    {Open ? <IoClose className='text-red-500 transition-all hover:text-red-600 hover:scale-125' /> : <LuMenu className='' />}
                </button>
            </div>

            {/* قائمة الموبايل */}
            <div 
            className={`absolute top-16 right-0 mt-3 text-center
            bg-white dark:bg-gray-900
            border-b border-gray-100
            rounded-2xl shadow-lg
            transition-transform duration-300
            ${Open ? 'translate-x-0' : 'translate-x-full'}
            `}
            >
                <ul className='flex flex-col w-35 font-medium'>
                    {navLinks.map((link, index) => (
                        <li key={index} className='hover:text-white dark:hover:text-black cursor-pointer hover:bg-blue-500 py-4 border-b border-gray-50 transition-all duration-300'>
                            {/* الحل 3: تحويل روابط الموبايل أيضاً لـ ScrollLink مع إغلاق القائمة عند النقر */}
                            <ScrollLink 
                                to={link.link} 
                                smooth={true} 
                                offset={-70}
                                spy={true}
                                activeClass="text-blue-500 font-bold"
                                onClick={() => setOpen(false)}
                                className="block w-full h-full"
                            >
                                {link.content}
                            </ScrollLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar