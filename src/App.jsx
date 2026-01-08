import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MessageSection from './sections/MessageSection';
import FlavorSection from './sections/FlavorSection';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <MessageSection />
      <FlavorSection />

      <div className='h-dvh border-red-500' />
    </main>
  )
}

export default App