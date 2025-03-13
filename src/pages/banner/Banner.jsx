/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import banner3 from '../../assets/images/banner3.jpg';
import { Navigation, Pagination } from 'swiper/modules';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const Banner = () => {
  useEffect(() => {
    // Initialize Swiper
    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);

  return (
    <div className="mt-24 max-w-7xl  swiper w-[92%] lg:w-[100%] rounded-3xl mx-auto">
      {/* Wrapper for slides */}
      <div className="swiper-wrapper">
        {/* Slide 1 */}
        <div className="swiper-slide relative">
          <img
            className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[650px] w-full object-contain md:object-cover"
            src={banner3}
            alt="Banner 3"
          />
          <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black">
              
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#fcff55] font-semibold mt-2">
              
            </p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="swiper-slide relative">
          <img
            className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[650px] w-full object-contain md:object-cover"
            src={banner1}
            alt="Banner 1"
          />
          <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black">
             
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 font-semibold mt-2">
              
            </p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="swiper-slide relative">
          <img
            className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[650px] w-full object-contain md:object-cover"
            src={banner2}
            alt="Banner 2"
          />
          <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black">
              
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 font-semibold mt-2">
              
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