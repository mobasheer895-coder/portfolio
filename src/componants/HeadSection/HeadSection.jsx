import React from 'react'

const HeadSection = ({fullTitle , title , completTitle , subTitle}) => {
    return (
        <div className='flex flex-col items-center gap-4 max-sm:text-center'>
            {/* عبارة تعرض قبل العنوان ان كان يوجد */}
            <p className='text-blue-700 text-left w-full text-[20px] font-bold max-sm:text-[16px] '>{fullTitle}</p>
            
            <h1 className='text-4xl font-bold max-sm:text-[30px] w-full'>
                {title}
                <span className='text-blue-600'>
                    {completTitle}
                </span>
            </h1>
            <p className='text-[22px] text-left w-full'>{subTitle}</p>
        </div>
    )
}

export default HeadSection
