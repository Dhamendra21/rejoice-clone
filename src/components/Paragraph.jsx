import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Paragraph() {
  let main = useRef(null);
  let paraRefs = useRef([]);

  useGSAP(() => {
    gsap.to(paraRefs.current, {
      scrollTrigger: {
        trigger: ".heading",
        start: "top 70%",
        end:"top 10%",
        scrub:1,
        // markers: true, 
      },
      y: 0,
      rotate:0,
      // duration: 1, 
      ease: "power4.out",
      stagger: 0.05, 
    });
  }, []);

  return (
    <section ref={main} className="w-full h-[120vh] text-white px-5 py-10">
      <div className="text-center heading">
        {"We blend the power of strategy, design, and performance marketing to transform founders' visions into remarkable brands. See our services."
          .split(" ")
          .map((item, index) => {
            return (
              <span
                key={index}
                className="font-bold inline-block h-fit overflow-hidden"
              >
                <p
                  ref={(el) => (paraRefs.current[index] = el)}
                  className="translate-y-[130%] origin-left rotate-90 inline-block text-[1.9rem] sm:text-[5rem] font-light leading-none"
                >
                  <span>{item}&nbsp;</span>
                </p>
              </span>
            );
          })}
      </div>
      <div className="line w-full h-[1px] my-5 sm:my-14 bg-zinc-500"></div>
      <div className="growth flex">
        <div className="left w-1/2">
          <p className="sm:text-3xl">Tomorrow’s brands, today.</p>
        </div>
        <div className="right w-1/2 flex flex-col gap-5 sm:gap-7 ">
          <p className="sm:text-xl text-sm sm:w-1/2 sm:font-light">
            We are a growth accelerator.
          </p>
          <p className="sm:text-xl text-sm sm:w-1/2 sm:font-light">
            Since 2013, we have been recognized globally for helping founders
            build market-defining brands that drive sustainable revenue and
            shape culture.
          </p>
          <p className="sm:text-xl text-sm sm:w-1/2 sm:font-light">
            In 2023, we launched our Venture Model to further support founders.
          </p>
          <p className="sm:text-xl text-sm sm:w-1/2 sm:font-light">
            We partner with five clients a year to give each one the focus and
            care they deserve.
          </p>
          <a href="" className="underline">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}

export default Paragraph;
