import React, { useEffect, useRef } from 'react';

import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Video1 from './Video1';
import Paragraph from './Paragraph';
import MousefollowerVideo from './MousefollowerVideo';
import Marquee from './Marquee';
import OurApproch from './OurApproch';
import AnimatedVideo from './AnimatedVideo';
import Footer from './Footer';

import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();


  return (
    <main  className="w-full overflow-x-hidden bg-[#000000]">
      <Navbar />
      <LandingPage />
      <Video1 />
      <Paragraph />
      <MousefollowerVideo />
      <Marquee />
      <OurApproch />
      <AnimatedVideo />
      <Footer />
    </main>
  );
}

export default App;
