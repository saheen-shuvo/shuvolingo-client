/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import banner1 from '../../assets/images/banner1.jpeg';
import banner2 from '../../assets/images/banner2.jpeg';
import banner3 from '../../assets/images/banner3.jpeg';
import { Navigation, Pagination } from 'swiper/modules';
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const Banner = () => {

    useEffect(() => {
        // Initialize Swiper
        const swiper = new Swiper(".swiper", {
          modules: [Navigation, Pagination],
          direction: "horizontal",
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      }, []);

  return (
    <div className="swiper w-[92%] lg:w-[100%] rounded-3xl">
      {/* Wrapper for slides */}
      <div className="swiper-wrapper">
        <div className="swiper-slide relative">
          <img
            className="h-[550px] w-full object-cover"
            src={banner3}
            alt=""
          />
          <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-6xl font-extrabold text-black text-center">
            </h1>
            <p className="text-[#fcff55]  font-semibold mt-3 text-center">

            </p>
          </div>
        </div>
        <div className="swiper-slide">
          <img
            className="h-[550px] w-full object-cover"
            src={banner1}
            alt=""
          />
          <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-6xl font-extrabold text-black text-center">
            </h1>
            <p className="text-gray-700 font-semibold mt-3 text-center">

            </p>
          </div>
        </div>
        <div className="swiper-slide">
          <img
            className="h-[550px] w-full object-cover"
            src={banner2}
            alt=""
          />
          <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-6xl font-extrabold text-black text-center">
            </h1>
            <p className="text-gray-700 font-semibold mt-3 text-center">

            </p>
          </div>
        </div>
      </div>
      {/* Pagination */}
      <div className="swiper-pagination"></div>
      {/* Navigation */}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default Banner;
