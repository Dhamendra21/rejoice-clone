import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap, { Power4 } from "gsap";
import ScrollTrigger from "gsap/scrollTrigger";
function AnimatedVideo() {
  let parent = useRef(null);
  let video = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: parent.current,
          top: "top top",
          // markers: true,
          pin: true,
          scrub: 1,
        },
      })
      .to(video.current, {
        width: "120%",
        height: "120%",
        scale: 1,
        ease: Power4.easeInOut,
      });
  });

  return (
    <section
      ref={parent}
      className="w-full py-20  flex flex-col items-center justify-center"
    >
      <video
         muted
         autoPlay
         loop
        ref={video}
        className="h-full w-[60%]"
        src="https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z2BbT5bqstJ98kk6_REJOUICE-PORTFOLIO-LOOP-PROJECTS.mp4"
      ></video>
      <a
        className="text-6xl text-white underline max-sm:text-5xl py-40"
        href=""
      >
        Get to know us
      </a>
    </section>
  );
}

export default AnimatedVideo;
