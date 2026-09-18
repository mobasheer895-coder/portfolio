
const TrustSection = ({ title, subTitle, complet, btnContent, btnIcon , contactRef }) => {
    return (
        //  الأب الأساسي
        <div className='flex justify-around items-center bg-[url(/images/bg-moveContact.png)] bg-cover bg-no-repeat 
                        p-16 rounded-2xl
                        max-lg:flex-col max-lg:text-center max-lg:gap-10'>
            
            {/* قسم النصوص */}
            <div className='text-white max-w-98 py-14'>
                <h1 className='text-3xl mb-4 font-bold'>{title}</h1>
                <p className='text-[16px]'>
                    {subTitle} 
                    <span className='font-bold block sm:inline mt-2 sm:mt-0'>
                        {complet}
                    </span>
                </p>
            </div>
            
            {/* الزر */}
            <button 
                onClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className='flex text-white text-xl lg:text-2xl gap-4 items-center bg-blue-600 
                py-4 px-8 rounded-xl cursor-pointer transition-all
                hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/50 
                max-lg:mb-10 max-lg:justify-center max-sm:text-lg'>
                {btnContent}
                {btnIcon}
            </button>
        </div>
    )
}

export default TrustSection