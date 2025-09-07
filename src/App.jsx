import './App.css'
import { Header } from './components/Header/Header'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from './pages/Home'
import { ProjectDetail } from './pages/ProjectDetail'
import { Contact } from './pages/Contact'
import { AboutMe } from './pages/AboutMe';

import ChatWidget from './components/Chat-Widget/Chat';
function App() {

  return (
    <>
    <ChatWidget />
    <section className='main grid grid-rows-[auto_1fr] min-h-screen bg-[#F0F2F5] gap-4'>
       <BrowserRouter>
        <div className="header z-50 w-full sticky top-0 max-sm:h-14 sm:h-16">
          <Header />
        </div>
        <div className="content flex flex-col items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inicio" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/proyectos/:id" element={<ProjectDetail />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </div>
       </BrowserRouter>
    </section>
    </>
  )
}

export default App
