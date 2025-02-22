import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";
import gsap, { Linear } from "gsap";

function MousefollowerVideo() {
  let video = useRef(null);

  useGSAP(() => {}, []);

  function HandleMousemove(e) {
    // e.preventDefault(); // Prevent scrolling when the mouse moves.

    let videoWidth = video.current.offsetWidth / 2;
    let videoHeight = video.current.offsetHeight / 2;

    gsap.to(video.current, {
      x: e.clientX - videoWidth,
      y: e.clientY - videoHeight,
      scale: 1,
      //   width: "20rem",
      ease: Linear,
      // delay: 0.2, // Delay before starting the animation.
    });
  }

  function HnadleMouseEnter(e) {
    gsap.to(video.current, {
      opacity: 1,
      width: "25rem",
      height: "30rem",
    });
  }

  function handleMouseLeave(e) {
    gsap.to(video.current, {
      opacity: 0,
      width: 0,
      height: 0,
    });
  }
  return (
    <section
    
    className="w-screen text-white max-sm:px-0 px-10 ">
      <div className="heading sm:px-0 px-5 w-full my-5 flex text-xl justify-between ">
        <h6>Highlights</h6>
        <p>see the work</p>
      </div>

      {[
        {
          image:
            "https://images.prismic.io/rejouice-2024/Z1r5Y5bqstJ98aaF_rivian.jpg?auto=format,compress&w=2418&h=1390&fm=avif",
          video:
            "https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z2BZfpbqstJ98kkB_RJ-HIGHLIGHT-Work-01.mp4",
        },
        // {
        //     image:"https://images.prismic.io/rejouice-2024/Z2AYnZbqstJ98i2G_oura-abdul-ovaice-photography-cd-21.png?auto=format,compress&w=2418&h=3140&fm=avif",
        // },
        // {
        //     image:"https://images.prismic.io/rejouice-2024/Z2AYnJbqstJ98i2E_moxionpower.2023.04.onlocation-17821.png?auto=format,compress&w=2418&h=3149&fm=avif",
        // }
      ].map((elem, index) => {
        return (
          <div

            key={index}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={HnadleMouseEnter}
            onMouseMove={HandleMousemove}
            className="relative w-full h-full bg-red-200 "
          >
            <img
              className=" w-full -z-10 h-full object-cover"
              src={elem.image}
              alt=""
            />
            <video
              autoPlay
              muted
              loop
              ref={video}
              className="w-0  object-cover scale-0 h z-50 absolute top-0 left-0"
              src="https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z2BZfpbqstJ98kkB_RJ-HIGHLIGHT-Work-01.mp4"
            ></video>
          </div>
        );
      })}
    </section>
  );
}

export default MousefollowerVideo;
