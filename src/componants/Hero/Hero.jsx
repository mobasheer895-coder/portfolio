    import React from 'react'

    const Hero = ({ title, subTitle, btnContent, linkImages, completTitle }) => {
        const downloadCV = () => {
            const link = document.createElement("a");

            link.href = "/MOHAMMAD-BASHEER-CV.pdf";
            link.download = "MOHAMMAD-BASHEER-CV.pdf";

            link.click();
        };
        return (
            // جعلنا الحاوية relative لضبط العناصر العائمة، و w-full لتغطية الشاشة كاملة
            <div id='Hero' className='relative w-full min-h-screen border-b border-dashed pt-20 flex justify-between items-start  max-lg:flex-col-reverse'>
                <div className='absolute  bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-6 h-6 flex justify-center items-center rounded-full border '>
    <div className='w-4 h-4 rounded-full border flex justify-center items-center '>

    {/* الدائرة الداخلية الصغيرة */}
    <div className='w-1 h-1 rounded-full bg-gray-900 dark:bg-white'></div>
    </div>
    
</div>
                {/* ====== الخطوط المنحنية والزخارف في الخلفية (Vectors) ====== */}
                {/* تم توزيعها بـ absolute لتطابق تصميم فيجما الملتوي حول العناصر */}
                <img 
                    src="/images/Vector-1.png" 
                    className="absolute w-full h-full object-cover pt-50" 
                    alt="" 
                />
                <img 
                    src="/images/Vector-3.png" 
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 pt-50" 
                    alt="" 
                />

                {/* ====== الجزء الأيسر: النصوص والأزرار ====== */}
                <div className='flex flex-col justify-center'>
                    <img src="/images/Blur-Gradient.png" alt="" className='relative h-screen' />
                    <div className='absolute px-22 max-w-140 flex flex-col items-start gap-7 max-[400px]:px-10 max-[400px]:items-center max-[400px]:text-center'>
                        <h1 className='text-3xl'> 
                        {title} 
                        <span className='font-bold text-[40px] max-sm:text-4xl'>{completTitle}</span>
                    </h1>
                    
                    <p className='text-[#43495B]/60 text-lg max-w-md
                    dark:text-[#FFFFFF]/60
                    '>
                        {subTitle}
                    </p>
                    
                    {/* تعديل زر الـ Download CV ليكون بتنسيق فخم وظل ناعم كما في فيجما */}
                    <button className='cursor-pointer px-6 py-3 bg-gray-200 transition-all rounded-2xl
                    hover:bg-gray-300
                    hover:-translate-y-1.5
                    
                    dark:bg-[#0C96E299] dark:hover:bg-[#0c97e2d2]
                    '
                    onClick={downloadCV}
                    >
                        {btnContent}
                    </button>
                    </div>
                </div>

                {/* ====== الجزء الأيمن: الصورة الشخصية المحاطة بزخرفتها ====== */}
                <div className='z-10 max-lg:w-full max-sm:flex max-sm:justify-center'>
                    <img 
                        className='max-lg:w-3/4'
                        src={linkImages} 
                    />
                </div>
            </div>
            
        )
    }

    export default Hero