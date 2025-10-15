import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import PreSaleSection from './components/PreSaleSection'
import Future from './components/Future'
import Security from './components/Security'
import Roadmap from './components/Roadmap'
import About from './components/About'
import What from './components/What'
import Powered from './components/Powered'
import Features from './components/Features'
import Team from './components/Team'
import Partners from './components/Partners'
import Media from './components/Media'
import Keynote from './components/Keynote'
import Latest from './components/Latest'
import Stats from './components/Stats'

function App() {

  return (
    <>
     <div className=' text-red-500'>
     <div class="
        absolute 
        top-[-20px]
        w-3/4     
        h-48      
        bg-gradient-to-br from-black to-blue-500
        rounded-[50%_50%_0_0/100%_100%_0_0] 
        opacity-80 
        filter blur-3xl 
        ">
  </div>
        <Navbar/>
        <div className='flex items-center justify-center '><PreSaleSection/></div>
        <div className='flex items-center justify-center mt-20'><Future/></div>
        <div className='flex items-center justify-center mt-20'><Security/></div>
        <div className='flex items-center justify-center'><Roadmap/></div>
        <div className='flex items-center justify-center'><About/></div>
        <div className='flex items-center justify-center'><What/></div>
        <div className='flex items-center justify-center'><Powered/></div>
        <div className='flex items-center justify-center'><Features/></div>
        <div className='flex items-center justify-center'><Team/></div>
        <div className='flex items-center justify-center'><Stats/></div>
        <div className='flex items-center justify-center'><Partners/></div>
        <div className='flex items-center justify-center'><Keynote/></div>
        <div className='flex items-center justify-center'><Media/></div>
        <div className='flex items-center justify-center'><Latest/></div>
     </div>
    </>
  )
}

export default App
