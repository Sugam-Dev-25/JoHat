import React, { useEffect } from "react";
import profileImg from "../../assets/james.png"; // replace later
import gsap from "gsap";
const AboutJames = () => {
    // Inside AboutJames:
useEffect(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-container",
      start: "top 80%",
       toggleActions: "play reverse play reverse"
    }
  });

  tl.from(".black-bg-box", { scaleX: 0, transformOrigin: "left", duration: 1 })
    .from(".about-text", { opacity: 0, x: -30, duration: 0.6 }, "-=0.4")
    .from(".gold-frame", { opacity: 0, x: 50, duration: 0.8 }, "-=0.6");
}, []);
    return (
        <div className="bg-[#ffffff] about-container">
            <div className="max-w-[1440px] mx-auto ">

                {/* MAIN BOX */}
                <div className="black-bg-box relative bg-[#1C1C1C] px-4 md:px-8 lg:px-12 xl:px-[60px] w-full lg:w-[890px] lg:h-[605px] xl:w-[1000px] py-10 lg:py-30 flex flex-col lg:flex-row items-start">

                    {/* LEFT CONTENT */}
                    <div className="text-white lg:max-w-[537px] xl:max-w-[700px] pt-6 lg:pt-0 about-text">

                        {/* HEADING */}
                        <h2 className="font-designer font-normal text-[22px] md:text-[28px] lg:text-[35px] leading-snug">
                            ABOUT JAMES TAYLOR
                        </h2>

                        {/* SUBTEXT */}
                        <p className="font-bold text-[16px] md:text-[18px] lg:text-[20px] mt-3">
                            Committed To Helping Property Investors Succeed
                        </p>

                        {/* DESCRIPTION */}
                        <p className="font-normal text-[14px] md:text-[16px] lg:text-[18px] text-[#FFFFFFCC] mt-4 leading-relaxed">
                            James Taylor is the driving force behind{" "}
                            <span className="font-medium text-white">Johat Enterprises</span>, bringing years of experience in real estate investment and private lending consultation. His mission is to help property investors access the right funding solutions quickly, securely, and strategically.
                            <br /><br />
                            With a deep understanding of the real estate market and strong relationships with trusted private lenders, James ensures every client receives personalized guidance and reliable financial support.
                            <br /><br />
                            At <span className="font-medium text-white">Johat Enterprises</span>, James leads with integrity and results — making sure every project runs smoothly from application to approval.
                        </p>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative mt-0 lg:mt-0 lg:absolute lg:right-[-85px] xl:right-[-380px] top-[50px]">

                        {/* BORDER BOX */}
                        <div className="relative w-[280px] h-[320px] sm:w-[320px] sm:h-[380px] md:w-[380px] md:h-[450px] lg:w-[380px] lg:h-[400px] xl:w-[458px] xl:h-[513px]
    border-[4px] border-[#FACA51] box-border gold-frame">

                            {/* IMAGE WITH INNER SPACING */}
                            <div className="w-full h-full p-[11px_18px] box-border">
                                <img
                                    src={profileImg}
                                    alt="James Taylor"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default AboutJames;