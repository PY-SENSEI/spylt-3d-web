import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MessageSection from './sections/MessageSection';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <MessageSection />
      <div className='h-dvh'></div>

    </main>
  )
}

export default App