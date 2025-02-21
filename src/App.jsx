import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Carousel from './Carousel'
import './App.css'


function Navbar({bgColor="bg-emerald-100"}) {
  const [dropdown, setDropdown] = useState(false);
  
  return (
    <nav className={`${dropdown ? "min-h-screen bg-stone-700" : `min-h-0 ${bgColor}`} transition-all duration-1000 ease-in-out fixed top-0 left-0 pl-6 pr-6 pt-4 w-full z-50`}>
      <div className="container mx-auto flex justify-between">
        <div 
          id="menu_icon" 
          className="flex flex-col justify-center items-center w-10 h-10 cursor-pointer space-y-1"
          onClick={() => setDropdown(!dropdown)}
        >
          <span className={`static w-8 h-2 bg-black rounded transition-all duration-300 
            ${dropdown ? "rotate-45 translate-y-2.5" : ""}`}
          />
          <span className={`static w-8 h-2 bg-black rounded transition-all duration-300 
            ${dropdown ? "-rotate-45 -translate-y-1" : ""}`}
          />
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
        <p className={`${dropdown ? "invisible" : "visible"} text-3xl font-bold`}>
          <span className='text-stone-600'>Lo</span>
          <span className='text-cyan-600'>Go</span>
        </p>
      </div>
    </nav>
  );
}

function App() {
  const [cgpage, setCgpage] = useState(false);
  return (
    <div>
      <Navbar bgColor={cgpage ? "bg-emerald-200" : "bg-emerald-100"} />
      <main className={`${cgpage ? "bg-emerald-200" : "bg-emerald-100"} transition-colors duration-1000 ease-in-out min-h-screen flex flex-col items-center pt-12 p-b-4`}>
        {/* <div className={`${cgpage ? "invisible" : "visible"} bg-stone-100/40 fixed left-0 w-200 h-100 mt-20 ml-10`}> */}
        <div
          className={`fixed left-10 w-200 h-100 mt-20 bg-stone-100/40 
                      transition-all duration-500 ease-in-out 
                      ${cgpage ? "opacity-0 scale-95 pointer-events-none translate-x-40" : "opacity-100 scale-100 translate-x-0"}`}
        >
          <p className='mt-20 ml-10 text-7xl text-stone-700 text-left font-semibold'>
            Perfect solution in branding  and digital for ambitius leader
          </p>
        </div>
        <div
          className={`fixed right-30 w-200 h-100 mt-20 bg-stone-100/40 
                      transition-all duration-500 ease-in-out 
                      ${cgpage ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-95 -translate-x-40 pointer-events-none"}`}
        >
          <p className='mt-20 ml-10 text-7xl text-stone-700 text-left font-semibold'>
            We are ready to help you, let us know what your problem
          </p>
        </div>
        <div className='fixed bg-transparent h-30 w-20 right-6 mt-55'>
          <button
            onClick={()=>setCgpage(false)}
            className="transform bg-emerald-200 rounded-full shadow-xl ease-out-in hover:animate-bounce"
          >
            &#10094; 
          </button>
          <button
          onClick={()=>setCgpage(true)}
            className="mt-6 transform bg-emerald-100 rounded-full shadow-xl ease-out-in hover:animate-bounce"
          >
            &#10095;
          </button>
        </div>
        <div id="carousel" className={`flex space-x-16 mb-3 h-64 w-full p-0 px-16`}>
        </div>
        <div id="section2" className={`${cgpage ? "bg-emerald-100" : "bg-emerald-200"} transition-colors duration-1000 ease-in-out flex-grow w-full`}>
        </div>
      </main>
    </div>
  );
}

export default App;
