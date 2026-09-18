import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'
import HeadSection from '../../componants/HeadSection/HeadSection'
import { projectsArray, techLabels } from '../../componants/Projects/Projects' 
import { LuCircleArrowOutUpRight } from 'react-icons/lu'
import Button from '../../componants/Button/Button'
import { AiOutlineFullscreen } from 'react-icons/ai'


const CardProject = () => {
    const { id } = useParams()
    const imageRef = useRef(null)

    const handleFullscreen = () => {
    imageRef.current?.requestFullscreen()
}

    const handleRepoClick = () => {
        window.open(project.repoRef)
    }
    const handleShowDemo = () => {
      window.open(project.demoLink)
    }
    
      // جلب بيانات المشروع بناءً على الـ id القادم من الرابط
      const project = projectsArray[Number(id)]
    return (
            <div className='relative py-30 px-10 w-full  mx-auto border-b-2 border-dashed border-gray-600'>
      {/* الحاوية الأب - أضفنا overflow-visible لضمان خروج الدائرة فوق البردر */}

  
  {/* الدائرة الخارجية الثابتة - نستخدم bg-white لكي تحجب الخط المتقطع من خلفها */}
  <div className='absolute  bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-6 h-6 flex justify-center items-center rounded-full border border-gray-900'>
    <div className='w-4 h-4 rounded-full border flex justify-center items-center border-gray-900 '>

    {/* الدائرة الداخلية الصغيرة */}
    <div className='w-1 h-1 rounded-full bg-gray-900'></div>
    </div>
    
  </div>
      
      <div className='flex justify-between gap-12 max-lg:flex-col'>
        
        {/* ----------------- الجهة اليسرى (الصورة المنسقة) ----------------- */}
        <div className="relative group w-1/2 bg-gray-50 flex justify-center items-center p-2 rounded-2xl border border-gray-100 shadow-sm max-lg:w-3/4 max-md:w-full">

    <img
      ref={imageRef}
        src={project.img}  
        alt={project.title}  
        className="w-full rounded-xl"
    />

    <div className="absolute flex gap-18 justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gray-800/50 w-full h-full rounded-lg">
        
        <LuCircleArrowOutUpRight 
            onClick={handleShowDemo}
            className="cursor-pointer text-white text-5xl transition-all hover:scale-125"
        />
        <AiOutlineFullscreen 
        onClick={handleFullscreen}
        className='cursor-pointer text-6xl text-white transition-all hover:scale-125'
        />

    </div>

</div>

        {/* ----------------- الجهة اليمنى (النصوص والتفاصيل) ----------------- */}
        <div className='w-1/2 flex flex-col items-start gap-5 max-lg:w-full'>
          
          {/* سطر الهيدر والزر جنباً إلى جنب */}
          <div className='flex justify-between items-start w-full mb-4'>
            <div className='max-w-xl'>
              <HeadSection
                title={project.title} // جلب العنوان ديناميكياً من الكرت
                subTitle={project.date} // التاريخ
              />
            </div>
            
            {/* زر الأيقونة بجانب الهيدر مباشرة */}
            <button className="pt-2" onClick={handleShowDemo}>
              <LuCircleArrowOutUpRight className='cursor-pointer text-blue-600 text-3xl transition-all hover:scale-125'/>
            </button>
          </div>

          {/* الـ p الوصف: محاذاة مرنة ممتازة تحت العنوان */}
          <p className='text-gray-600 leading-relaxed text-justify w-full max-w-xl'>
            {project.description}
          </p>

          <div className='flex flex-col gap-2'>
            <p>{techLabels.basic} <span>{project.skills}</span></p>
            {project.framework && (
              <p>
                {techLabels.framework}: <span>{project.framework}</span>
              </p>
            )}

          {project.libraries && (
            <p>
              {techLabels.libraries}: <span>{project.libraries}</span>
            </p>
          )}
          </div>

        <Button
        onClick={handleRepoClick}
        btnContent="Github Repo"
        />
        </div>
      </div>
        </div>
    )
}

export default CardProject
