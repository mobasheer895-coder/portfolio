
const Button = ({btnContent , btnIcon , onClick}) => {
    return (
        <div>
        <button 
        className=' flex items-center text-white gap-3 p-4 bg-blue-600/90 rounded-2xl cursor-pointer transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/40'
        onClick={onClick}
        >
                {btnContent} {btnIcon}
        </button>
        </div>
    )
}

export default Button
