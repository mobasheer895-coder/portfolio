import React from 'react'
import HeadSection from '../HeadSection/HeadSection'
import { FaArrowUp } from 'react-icons/fa'

const educationData = [
    {
        title: "Experince Designer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales "
    },
    {
        title: "Experince Designer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales "
    },
    {
        title: "Frontend Developer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales "
    },
    {
        title: "Frontend Developer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales "
    }
]

const Educations = ({icon}) => {
    return (
        <div id='Education' 
        className=' relative px-16 py-15 bg-[url(/images/Images-bg.svg)] max-sm:bg-size-[auto_180px] bg-no-repeat bg-top-right max-sm:px-5'>
            {/* صورة الخلفية اليسرى */}
            <div className=' absolute -bottom-15 left-1'>
                <img src="/images/Images-bg-1.svg" alt="" className='max-sm:w-37'/>
            </div>
            
            <HeadSection
                fullTitle="Education and Experience"
                title="Education & Experience"
            />
            
            <div className='grid grid-cols-2 gap-x-16 gap-y-0  py-16 max-sm:grid-cols-1 '>
                {educationData.map((element, index) => (

                    <div key={index} className='relative border-l-2 border-dashed border-gray-400 pl-6 flex flex-col gap-3 max-w-md'>
                        <h1 className='text-2xl font-semibold'>{element.title}</h1>
                        <p className='text-gray-600 mb-8'>{element.description}</p>
                            <div className='flex justify-center items-center absolute border-2 border-dashed rounded-full p-px top-0 -left-2 '>
                            <div className='rounded-full bg-blue-500  w-2.5 h-2.5'>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='text-right'>
                <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className='bg-blue-600 p-3 rounded-lg inline-block cursor-pointer transition-all hover:shadow-xl hover:shadow-blue-600/50 hover:-translate-y-1'>
                    {icon}
            </button>
            </div>
        </div>
        )
}

export default Educations