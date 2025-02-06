import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Carousel from './Carousel'
import './App.css'

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <nav className={`${dropdown ? "min-h-screen bg-stone-700" : "min-h-0 bg-emerald-100"} transition-all duration-500 ease-in-out fixed top-0 left-0 w-full pt-4 z-50`}>
      <div className="container mx-auto flex justify-between">
        <div id="menu_icon" className={`items-center space-x-4 text-l`}>
          <img src='../icon-menu.png' alt='Menu Icon' className='h-4 w-4' onClick={()=>setDropdown(!dropdown)}/>
        </div>
        {dropdown && (
        <div className='flex flex-row bg-stone-700 pt-40'>
          <div className='flex flex-col space-y-10'>
            <a href="#" className='border-b-3 bg-transparent hover:bg-stone-50 hover:text-stone-800 text-3xl font-semibold'>
              About
            </a>
            <a href="#" className='border-b-3 bg-transparent hover:bg-stone-50 hover:text-stone-800 text-3xl font-semibold'>
              Project
            </a>
            <a href="#" className='border-b-3 bg-transparent hover:bg-stone-50 hover:text-stone-800 text-3xl font-semibold'>
              Contact
            </a>
          </div>
          <div className='border boderder-white ml-30'></div>
          <div className='ml-30'>
            <p className={`text-9xl font-bold`}>
            <span className='text-stone-300'>Lo</span>
            <span className='text-cyan-600'>Go</span>
            </p>
          </div>
        </div>
      )}
        <p className={`${dropdown ? "invisible" : "visible"} text-xl font-bold`}>
          <span className='text-stone-600'>Lo</span>
          <span className='text-cyan-600'>Go</span>
        </p>
      </div>
    </nav>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center pt-12 p-b-4 bg-emerald-100 ">
        <div className='bg-stone-100/40 fixed left-0 w-200 h-100 mt-20 ml-10'>
          <p className='mt-20 ml-10 text-7xl text-stone-700 text-left font-semibold'>
            Perfect solution in branding  and digital for ambitius leader
          </p>
        </div>
        <div className='fixed bg-transparent h-30 w-20 right-6 mt-55'>
          <button
            className="transform bg-emerald-200 rounded-full shadow-xl ease-out-in hover:animate-bounce"
          >
            &#10094; 
          </button>
          <button
            className="mt-6 transform bg-emerald-100 rounded-full shadow-xl ease-out-in hover:animate-bounce"
          >
            &#10095;
          </button>
        </div>
        <div id="carousel" className='flex space-x-16 p-0 mb-3 h-64 w-full p-8 px-16'>
          {/* <Carousel/>
          <Carousel/> */}
        </div>
          <div id="section2" className="flex-grow w-full bg-emerald-200">
        </div>
      </main>
    </div>
  );
}

export default App;
