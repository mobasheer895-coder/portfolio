import React from 'react'
import HeadSection from '../HeadSection/HeadSection'
import Button from '../Button/Button'
import { MdArrowOutward } from 'react-icons/md'
import Card from '../Card/Card'
import { LuCircleArrowOutUpRight } from 'react-icons/lu'

export const techLabels = {
    basic: "Basic Languages: ",
    framework: "Framework",
    libraries: "Libraries"
};

export const projectsArray = [
    {
        img:"/images/first-project-img.png",
        title:"First Project",
        skills:"HTML5, CSS3",
        description:"A responsive web project built with HTML5 and CSS3, focusing on clean structure, modern styling, and responsive layout.",
        repoContent:<LuCircleArrowOutUpRight className=' cursor-pointer text-blue-600 text-2xl transition-all hover:scale-125'/>,
        repoRef:'https://github.com/mobasheer895-coder/first-project',
        demoLink:"https://mobasheer895-coder.github.io/first-project/",
        date:"12-5-2024",
        featured: false,
    },
    {
        img:"/images/eduPress-img.png",
        title:"EduPress Project",
        skills:"HTML5, CSS3",
        description:"A responsive educational website built with HTML5 and CSS3, designed to present educational content through a clean and user-friendly interface.",
        repoContent:<LuCircleArrowOutUpRight className=' cursor-pointer text-blue-600 text-2xl transition-all hover:scale-125'/>,
        repoRef:'https://github.com/mobasheer895-coder/EduPress-project',
        demoLink:"https://mobasheer895-coder.github.io/EduPress-project/",
        date:"12-6-2024",
        featured: false,
    },
    {
        img:"/images/dashbouard-typeScript.png",
        title:"Dashboard TypeScript",
        skills:"HTML5, Tailwind CSS, TypeScript, React, Vite",
        description:"A responsive dashboard application built with React and TypeScript, using Vite and Tailwind CSS to create a modern and structured user interface.",
        repoContent:<LuCircleArrowOutUpRight className=' cursor-pointer text-blue-600 text-2xl transition-all hover:scale-125'/>,
        repoRef:'https://github.com/mobasheer895-coder/Dashbourd_typeScript',
        demoLink:"https://dashbourd-type-script.vercel.app/",
        date:"12-7-2024",
        libraries:"React, React Router, Axios",
        featured: true,
    },
    {
        img:"/images/eduPress-NextJs.png",
        title:"EduPress Next.js",
        skills:"HTML5, Tailwind CSS, TypeScript, Next.js",
        description:"A modern educational platform built with Next.js, TypeScript, and Tailwind CSS, focusing on reusable components, responsive design, and a user-friendly experience.",
        repoContent:<LuCircleArrowOutUpRight className=' cursor-pointer text-blue-600 text-2xl transition-all hover:scale-125'/>,
        repoRef:'https://github.com/mobasheer895-coder/edupress-nextjs',
        demoLink:"https://edupress-nextjs.vercel.app/",
        date:"12-7-2024",
        framework:"Next.js",
        libraries:"React, Redux",
        featured: true,
    },
    {
        img: "/images/typing-speed-test.png",
        title: "Typing Speed Test",
        skills: "TypeScript, Next.js, React, Tailwind CSS",
        description:"A typing speed test application built with Next.js, TypeScript, and Tailwind CSS, featuring real-time WPM and accuracy tracking, difficulty levels, test results, responsive design, and a user-friendly interface.",
        repoContent: <LuCircleArrowOutUpRight 
        className="cursor-pointer text-blue-600 text-2xl transition-all hover:scale-125" 
        />,
        repoRef: "https://github.com/mobasheer895-coder/typing-speed-test",
        demoLink: "https://typing-speed-test-three-opal.vercel.app/",
        date: "18-9-2026",
        framework: "Next.js",
        libraries: "React",
        featured: true,
    }
]
const goToGithub = () => {
    window.open("https://github.com/mobasheer895-coder")
    }
    
const Projects = () => {
    return (
        <div id='Projects' className='py-20'>
            <div className='flex justify-between items-center max-sm:flex-col'>
                <div className='max-w-100'>
                    <HeadSection
                        fullTitle="Portfolio"
                        title="My Creative Works Latest"
                        completTitle=" Projects"
                    />
                </div>
            <Button
            btnContent='View Github '
            btnIcon={<MdArrowOutward className='text-2xl' />}
            onClick={goToGithub}
            />
            </div>
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10 p-5">
  {/* هنا كود الـ map الخاص بك الذي يكرر الكروت */}
    {projectsArray.map((project , index) => (
        <Card 
            key={index}
            id={index}
            imgProject={project.img}
            title={project.title}
            skills={project.skills}
            repo={project.repoContent}
            repoLink={project.repoRef}
            demoLink={project.demoLink}
        />
    ))}
</div>
        </div>
    )
}

export default Projects
