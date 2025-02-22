import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function Marquee() {
  let logo = useRef(null);
  let [ismobile, setisMobile] = useState(window.innerWidth);
  let card = useRef(null);
  useEffect(() => {
    const handleResize = () => setisMobile(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let tl = gsap.timeline({ paused: true });

  useGSAP(() => {
    gsap.to(card.current, {
      x: "-100%",
      repeat: -1,
      ease: "linear",
      duration: 7,
    });
    if (ismobile < 786) {
      gsap.to(logo.current, {
        x: "-100%",
        repeat: -1,
        ease: "linear",
        duration: 5,
        stagger: { amount: 0.5 },
      });

    } else {
      gsap.set(logo.current, { x: 0 });
      gsap.set(card.current, { x: 0 });
    }
  }, [ismobile]); // Depend on isMobile

  // List of cards with title arrays
  const cards = [
    {
      image:
        "https://www.rejouice.com/_vercel/image?url=https:%2F%2Fimages.prismic.io%2Frejouice-2024%2FZ1m0HZbqstJ98VgZ_oura-abdul-ovaice-3d-cd-031.png?auto=format,compress?auto=compress,format&w=1919&q=80",
      hasImage: true,
      titles: ["E-Commerce", "Biotech", "Real Estate", "Fashion", "Healthcare"],
      height: "100%",
      backgroundColor: "yellow",
    },
    {
      hasImage: false,
      titles: ["Engagement", "Models", "Venture", "Classic"],
      title2: "Classic / Venture",
      height: "50%",
      button: "Know More",
      backgroundColor: "black",
    },
    {
      hasImage: false,
      titles: ["60+ Brands  ."],
      title2: "successfully launched since 2013",
      height: "50%",
      backgroundColor: "black",
      logo: [
        "https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z0cAzJbqstJ970Cv_Frame1073714686.svg",
        "https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z2LneZbqstJ98pKu_Moxion.svg",
        "https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z1r07ZbqstJ98aSL_8VCVCFirm.svg",
        "https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z2LlrpbqstJ98pJz_RAPPI.svg",
        "https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z0cA4ZbqstJ970C3_Rivian_logo_and_wordmark2.svg",
        "https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z2Lo5ZbqstJ98pLj_HYPERFRAME.svg",
        "https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z0cAypbqstJ970Cs_Frame1073714684.svg",
        "https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z2HXc5bqstJ98naA_Proof.svg",
      ],
    },
    {
      hasImage: false,
      titles: [
        "Driving 150%",
        "LTV: CAC in Avg",
        "Scaling Growth",
        "Customer Focus",
      ],
      height: "50%",
      backgroundColor: "#F7F7F7",
      logo: [
        "https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z2LlrpbqstJ98pJz_RAPPI.svg",
      ],
    },
    {
      image:
        "https://images.prismic.io/rejouice-2024/Z1m0-JbqstJ98Vh9_pergola-module-floor-1-360-grey-blue-bioclimatic-ceiling-and-curtains2.png?auto=format,compress",
      hasImage: true,
      titles: ["E-Commerce"],
      title2: "10+ years of experience",
      height: "100%",
      backgroundColor: "yellow",
    },
    {
      hasImage: false,
      titles: ["70+ industries recognized awards."],
      height: "50%",
      backgroundColor: "#F7F7F7",
      logo: [
        "https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z0cAzJbqstJ970Cv_Frame1073714686.svg",
        "https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z2LneZbqstJ98pKu_Moxion.svg",
        "https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z1r07ZbqstJ98aSL_8VCVCFirm.svg",
        "https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z2LlrpbqstJ98pJz_RAPPI.svg",
        "https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z0cA4ZbqstJ970C3_Rivian_logo_and_wordmark2.svg",
        "https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z2Lo5ZbqstJ98pLj_HYPERFRAME.svg",
        "https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z0cAypbqstJ970Cs_Frame1073714684.svg",
        "https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z2HXc5bqstJ98naA_Proof.svg",
      ],
    },
  ];

  // State to track each card's current title & logo index
  const [titleIndices, setTitleIndices] = useState(
    new Array(cards.length).fill(0)
  );
  const [logoIndices, setLogoIndices] = useState(
    new Array(cards.length).fill(0)
  );

  // Cycle through each card's titles and logos every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndices((prevIndices) =>
        prevIndices.map(
          (index, cardIndex) => (index + 1) % cards[cardIndex].titles.length
        )
      );

      setLogoIndices((prevIndices) =>
        prevIndices.map((index, cardIndex) =>
          cards[cardIndex].logo
            ? (index + 1) % cards[cardIndex].logo.length
            : index
        )
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section data-scroll
    data-scroll-speed="1" className="w-screen pt-10 pb-[15rem] bg-white">
      <div className="brands sm:py-40 sm:px-10 overflow-x-hidden py-20">
        <div
          ref={logo}
          className="flex max-sm:gap-10 items-center sm:justify-between "
        >
          {/* Scrolling Logos */}
          { [
        "https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z0cAzJbqstJ970Cv_Frame1073714686.svg",
        "https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z2LneZbqstJ98pKu_Moxion.svg",
        "https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z1r07ZbqstJ98aSL_8VCVCFirm.svg",
        "https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z2LlrpbqstJ98pJz_RAPPI.svg",
        "https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z0cA4ZbqstJ970C3_Rivian_logo_and_wordmark2.svg",
        "https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z2Lo5ZbqstJ98pLj_HYPERFRAME.svg",
        "https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z0cAypbqstJ970Cs_Frame1073714684.svg",
        "https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z2HXc5bqstJ98naA_Proof.svg",
      ].map((item, index) => (
            <img
              key={index}
              src={item}
              alt="brand"
              className="w-1/3 sm:w-[5rem]"
            />
          ))}
        </div>
      </div>
      <hr />
      <div className="heading w-full sm:px-10 py-10 font-[400] px-2 flex justify-between">
        <h6>Rejouice at a Glance.</h6>
        <p>hello@rejouice.com</p>
      </div>

      {/* Cards with dynamic titles and background images */}
      <div
        ref={card}
        className="w-full flex  max-sm:h-[50vh]  h-[80vh] gap-16 px-20 max-sm:px-10 flex-nowrap "
      >
        {cards.map((item, index) => (
          <div
            key={index}
            className={`w-[32rem] rounded-md max-sm:w-[22rem] relative flex-shrink-0 p-6 flex flex-col items-center justify-center bg-cover bg-center`}
            style={{
              height: item.height,
              backgroundColor: item.backgroundColor,
              backgroundImage: item.hasImage ? `url(${item.image})` : "none",
            }}
          >
            

            {/* Dynamic Title */}
            <div
              className={`w-full h-full  flex flex-col items-start justify-between text-xl z-10 ${
                item.backgroundColor == "#F7F7F7" ? "text-black" : "text-white"
              }`}
            >
              <div>
                <h2 className="w-[11rem]">
                  {item.titles[titleIndices[index]]}
                </h2>
                {item.title2 && <h2 className="w-[15rem]">{item.title2}</h2>}
              </div>
              {item.button && (
                <a href="#" className="text-sm  underline">
                  {item.button}
                </a>
              )}
            </div>

            {/* Rotating Logo (if available) */}
            {item.logo && (
              <img
                src={item.logo[logoIndices[index]]}
                alt="dynamic logo"
                className={`absolute bottom-4 right-4  ${
                  item.backgroundColor === "black" ? "invert" : ""
                }  max-h-[10%] w-22`}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Marquee;
