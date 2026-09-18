import { useNavigate } from 'react-router-dom'

const Card = ({ id , imgProject, title, skills, repo , repoLink , demoLink}) => {
  const navigate = useNavigate()
  const handleCardClick = () => {
    navigate(`/projects/${id}`)
    window.scrollTo(0, 0)
}
const handleRepoClick = () => {
        window.open(repoLink)
    }
    const handleShowDemo = () => {
      window.open(demoLink)
    }
  return (
    // أزلنا flex-wrap وجعلنا الكرت يأخذ العرض الكامل المتاح له من الـ Grid بالأب
    <div className="w-full  rounded-lg ">
      
      <div onClick={handleShowDemo} className='cursor-pointer'>
        {/* الصورة الخاصة بالمشروع */}
        <img src={imgProject} alt={title} className="w-full h-auto object-cover" />
      </div>
      
      {/* تفاصيل الكرت */}
      <div className="p-4 flex justify-between cursor-pointer">
        <div onClick={handleCardClick}>
          <h1 className="text-xl font-bold mb-2">{title}</h1>
          <p className="w-3xs">{skills}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          
          <div
                    className="flex justify-between items-center mt-4 cursor-pointer"
                    onClick={handleRepoClick}
                >
                    {repo}
                </div>
        </div>
      </div>

    </div>
  )
}

export default Card