import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap, { Linear, Power1, Power4 } from 'gsap'
function LandingPage() {
  
  var tl = gsap.timeline()
  var path = useRef(null)
  var page = useRef(null)

  useGSAP(()=>{
    tl.from(page.current,{
      y: "-100%",
      duration: 2,
      height:"100vh",
      ease: Power4.easeInOut
    })
      tl.from( "path, react",{
        y: "-100%",
        stagger: .1,
        ease:Linear
      })
  },[])
  return (
    <section
       data-scroll
        data-scroll-speed="-1"
      ref={page}
      
      className="h-[80vh] pb-10 max-sm:pb-2 pt-20 w-full text-white px-5 flex flex-col justify-between"
    >
      <div className="logo">
        <svg
        
          id="Calque_1"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 1358 217"
          fill="white"
          className="logo"
          data-v-9fb53f58=""
        >
          <path
          ref={path}
            className="letter"
            d="M1358,102.2c0-50.7-30.6-101.4-97-102.2-57.6-.8-101,40.4-101,108.1s46.9,108.9,102.1,108.9,87.4-29.3,94.6-70.9h-35.8c-6.8,24.2-25.8,38.8-58,38.8s-63.2-19.8-66.4-65.3h160.2c.8-5.9,1.2-11.5,1.2-17.4ZM1197.4,89.5c5.2-40.8,30.2-57.4,62.8-57.4s56.4,16.2,60.8,57.4h-123.6Z"
            data-svg-origin="1160 -0.01144199725240469"
            transform="matrix(1,0,0,1,0,0)"
          ></path>
          <path
            className="letter"
            d="M1045.4,32.1c31.4,0,57.6,12.7,62.4,50.7h35.4C1139.2,26.5,1097.5,0,1046.2,0s-102.1,39.2-102.1,108.1,46.9,108.9,102.5,108.9,92.6-31.7,96.6-88.7h-35.4c-5.2,38-30.2,56.6-62,56.6s-65.6-25.3-65.6-76.4,29.8-76.4,65.2-76.4Z"
            data-svg-origin="944.0999755859375 0"
            transform="matrix(1,0,0,1,0,0)"
          ></path>
          <rect
            className="letter"
            x="889.3"
            y="5.6"
            width="35"
            height="205.9"
            data-svg-origin="889.2999877929688 5.599999904632568"
            transform="matrix(1,0,0,1,0,0)"
          ></rect>
          <path
            className="letter"
            d="M826.5,122.4c0,45.9-22.7,63-54.8,63s-54.8-17-54.8-63V5.6h-35v123.9c0,63.4,48.5,87.5,89.8,87.5s89.8-24.2,89.8-87.5V5.6h-35v116.8Z"
            data-svg-origin="681.9000244140625 5.599999904632568"
            transform="matrix(1,0,0,1,0,0)"
          ></path>
          <path
            className="letter"
            d="M556.4,0c-54.8,0-102.5,39.2-102.5,108.1s47.7,108.9,102.5,108.9,102.5-40,102.5-108.9S611.2,0,556.4,0ZM556.4,184.9c-35.8,0-66.4-25.3-66.4-76.4s30.6-76.4,66.4-76.4,66.4,23.4,66.4,76.4-30.6,76.4-66.4,76.4Z"
            data-svg-origin="453.9000244140625 0"
            transform="matrix(1,0,0,1,0,0)"
          ></path>
          <path
            className="letter"
            d="M395,118.8c0,39.6-20.3,61-52.5,61h-21.5v34.1h20.7c42.5,0,88.2-26.9,88.2-92.3V5.6h-35v113.2Z"
            data-svg-origin="321 5.599999904632568"
            transform="matrix(1,0,0,1,0,0)"
          ></path>
          <path
            className="letter"
            d="M216.8,0c-57.6-.8-100.9,40.4-100.9,108.1s46.9,108.9,102.1,108.9,87.4-29.3,94.6-70.9h-35.8c-6.8,24.2-25.8,38.8-58,38.8s-63.2-19.8-66.4-65.3h160.2c.8-5.9,1.2-11.5,1.2-17.4C313.7,51.5,283.1.8,216.8,0ZM153.2,89.5c5.2-40.8,30.2-57.4,62.8-57.4s56.4,16.2,60.8,57.4h-123.6Z"
            data-svg-origin="115.9000015258789 -0.01144199725240469"
            transform="matrix(1,0,0,1,0,0)"
          ></path>
          <path
            className="letter"
            d="M0,95.4v116h35v-113.2c0-39.6,20.3-61,52.5-61h21.5V3.2h-20.7C45.7,3.2,0,30.1,0,95.4Z"
            data-svg-origin="0 3.200000047683716"
            transform="matrix(1,0,0,1,0,0)"
          ></path>
        </svg>
      </div>
      <div className="elems max-sm:mb-5 leading-none">
        <div className="elem1 flex items-end justify-between ">
          <div className="flex">
            <h3 className="w-4/5 sm:w-[10rem] text-[1rem]">
              Strategy design and performance
            </h3>
            <h3 className="w-3/5 sm:w-[10rem] text-[1rem]">
              Two engagement models: cash or equity
            </h3>
          </div>
          <div>
            <svg

              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="32"
              fill="none"
              viewBox="0 0 12 12"
              className="icon max-sm:-mt-10 "
              data-v-9fb53f58=""
            >
              <path
                fill="currentColor"
                className="text-xl"
                d="m5.796 9.246-2.97-2.97-.762.782 4.356 4.356 4.356-4.356-.782-.782-2.96 2.96V1.039H5.806z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
