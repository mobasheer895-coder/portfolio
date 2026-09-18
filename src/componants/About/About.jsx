import React from 'react'
import { BiSolidChat } from 'react-icons/bi'
import { BsChatSquareFill } from 'react-icons/bs'
import { CiChat2 } from 'react-icons/ci'
import HeadSection from '../HeadSection/HeadSection'

const skillsData = [
    { name: "HTML5", percentage: 90 },
    { name: "CSS3", percentage: 85 },
    { name: "Javascript", percentage: 95 },
    { name: "TypeScript", percentage: 80 },
    { name: "React", percentage: 90 }
]

const About = ({ image }) => {
    return (
        <div id="About" className='flex items-center justify-between p-12 max-lg:flex-col gap-10'>
            <img src={image} alt="" />
            <div className='w-[50%] max-lg:w-full flex flex-col gap-9'>
                <HeadSection
                    title="About Me"
                    subTitle="I’m a Frontend Developer focused on building modern, responsive, and user-friendly web applications. I work with HTML, CSS, JavaScript, TypeScript, and React, reusable components, and responsive design. I enjoy turning ideas and designs into functional and engaging web experiences.
"
                />
                
                {skillsData.map((skill, index) => {
    return (
        <div key={index}>
            <h2 className='mb-5 text-xl font-bold'>{skill.name}</h2>

            {/* 1. الشريط الرمادي (الأب الكبير) */}
            <div className='bg-gray-300 rounded-2xl h-3.5 w-full'>

                {/* 2. الشريط الأزرق (الابن الأول) */}
                <div 
                    className='relative bg-blue-500 rounded-2xl h-3.5' 
                    style={{ width: `${skill.percentage}%` }}
                >
                    
                    {/* 3. الدائرة للنسبة المئوية */}
                    <div className='absolute -top-1.5 left-full -translate-x-1/2 border-[3px] border-[#0C96E2] bg-white h-6 w-6 rounded-full shadow-sm flex flex-col items-center justify-center hover:scale-110 transition-all'>
                        
                        {/* صندوق النسبة المئوية */}
                        <div className='absolute bottom-4 flex items-center justify-center w-9 text-[#0C96E2]'>
        
        {/* الأيقونة كخلفية */}
            <BsChatSquareFill  className='text-5xl text-blue-500' />        
        {/* النص يوضع فوقها */}
        <p className='absolute text-white text-[12px] font-bold mb-2'>
            {skill.percentage}%
        </p>
        
    </div>
                    </div>

                </div>
            </div>
        </div>
    )
})}
            </div>
        </div>
    )
}

export default About