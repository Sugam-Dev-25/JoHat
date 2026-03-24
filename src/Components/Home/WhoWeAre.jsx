import React from "react";
import img1 from "../../assets/who-we-are-1.jpg";
import img2 from "../../assets/who-we-are-2.jpg";
import img3 from "../../assets/who-we-are-3.jpg";

const WhoWeAre = () => {
  return (
    <section className="bg-[#f4f1ee] py-20 px-4">
      <div className="max-w-[1200px] mx-auto">

        <div className="grid lg:grid-cols-3 gap-10 items-center">

          {/* LEFT IMAGE */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src={img1}
                alt=""
                className="w-full max-w-[380px] border-[3px] border-yellow-400"
              />

              {/* SMALL IMAGE */}
              <img
                src={img3}
                alt=""
                className="w-24 h-24 object-cover absolute -bottom-6 left-6 border-4 border-white shadow-lg"
              />
            </div>
          </div>

          {/* CENTER CONTENT */}
          <div className="text-center lg:text-left">
            <h5 className="uppercase tracking-widest font-[#1c1c1c] font-bold font-designer text-[35px] mb-4">
              Who We Are
            </h5>

            <p className="mb-6 text-[#333333] font-semibold italic text-[35px] leading-[45px] font-lato">
              Johat Enterprises is a trusted name in property investment funding
              solutions. Based in Williamsburg, Michigan, we specialize in
              connecting property investors with private lenders who understand
              their needs. Our expertise lies in identifying the right funding
              partners who can help our clients acquire, renovate, and sell
              properties for maximum profit.
            </p>

            <button className="px-6 py-2 border border-gray-400 rounded-full hover:bg-black hover:text-white transition">
              Learn More About Us
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={img2}
              alt=""
              className="w-full max-w-[280px] border-[3px] border-yellow-400"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;