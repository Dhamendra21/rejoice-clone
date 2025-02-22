import React from "react";

function Video1() {
  return (
    <section
    // data-scroll 
    // data-scroll-speed="1"
    className="w-full h-screen max-sm:pt-5 relative ">
      <h1 className="text-white text-nowrap underline font-light text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        Show Reel
      </h1>
      <video
        className="object-cover w-full h-full"
        autoPlay
        muted
        loop
        src="https://www.rejouice.com/static/reel-short.mp4"
      ></video>
    </section>
  );
}

export default Video1;
