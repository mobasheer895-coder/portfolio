import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage/HomePage"
import ShowProjects from "./Pages/Show-Projects/ShowProjects"
import NavBar from "./componants/NavBar/NavBar"
import { useState } from "react"
import Footer from "./componants/Footer/Footer"


function App() {
      const [mode, setMode] = useState(false)
//
  return (
    <div  className={`transition-all ${mode && "dark bg-gray-800 text-white"}`}>
      <BrowserRouter>
        <NavBar
            mode={mode}       
            setMode={setMode}
            logo="Mohammad"
          />
        <Routes>
          {/* الرابط الأساسي */}
          <Route path="/" element={<HomePage/>}/>
          {/* رابط صفحة المشروع الذي يتم اختياره */}
          <Route path="/projects/:id" element={<ShowProjects/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App