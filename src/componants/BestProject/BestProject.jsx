import { useState } from 'react'
import HeadSection from '../HeadSection/HeadSection'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import { projectsArray } from '../Projects/Projects'
import Card from '../Card/Card'
const BestProject = () => {
    const [current, setCurrent] = useState(0)
    const slidesBtn = [
        {
            btnIcon:<GoChevronLeft />,
            onClick: () => {
                setCurrent(prev => Math.max(prev - 1, 0))
            }
        },
        {
            btnIcon:<GoChevronRight />,
            onClick: () => {
            setCurrent(prev => Math.min(prev + 1, 3))
        }
        }
    ]
    const featuredProjects = projectsArray.filter(project => project.featured)
    return (
        <div className='py-20 px-10'>
            <div className='flex justify-between items-center'>
                <HeadSection
            fullTitle="Portfolio"
            title="The Best Projects"
            />
            <div className='flex gap-4'>
            {slidesBtn.map((btn, index) => {
                return (
                    <button 
                    key={index} 
                    className="text-3xl text-gray-500 rounded-full border border-blue-600 cursor-pointer transition-all hover:bg-blue-700 hover:text-white"
                    onClick={()=>{btn.onClick() , console.log("clicked")}}
                    >
                        {btn.btnIcon}
                    </button>
                )
            })}
        </div>
            
            </div>
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10 p-5">
  {/* هنا كود الـ map الخاص بك الذي يكرر الكروت */}
  {featuredProjects.slice(current, 3).length > 0 ? (
    featuredProjects.slice(current, 3).map((project, index) => (
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
    ))
) : (
    <p className="col-span-3 text-center text-gray-500 text-2xl">
        No featured projects.
    </p>
)}
</div>
        </div>
    )
}

export default BestProject
