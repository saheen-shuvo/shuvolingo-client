import CountUp from "react-countup";
import { FaStarHalfStroke } from "react-icons/fa6";

const Stats = () => {
  return (
    <div className="flex flex-wrap justify-between my-8 md:my-16 gap-4 md:px-24 max-w-7xl mx-auto">
      <div className="w-full sm:w-auto">
        <h1 className="text-base sm:text-xl lg:text-4xl font-bold text-center">
          <CountUp start={0} end={32000} duration={3} />+
        </h1>
        <p className="text-xs sm:text-sm lg:text-base text-center">
          Experienced Tutors
        </p>
      </div>
      <div className="w-full sm:w-auto">
        <h1 className="text-base sm:text-xl lg:text-4xl font-bold text-center">
          <CountUp start={0} end={202000} duration={3} />+
        </h1>
        <p className="text-xs sm:text-sm lg:text-base text-center">
          5 Star Tutor Reviews
        </p>
      </div>
      <div className="w-full sm:w-auto">
        <h1 className="text-base sm:text-xl lg:text-4xl font-bold text-center">
          <CountUp start={0} end={120} duration={3} />+
        </h1>
        <p className="text-xs sm:text-sm lg:text-base text-center">
          Subjects Taught
        </p>
      </div>
      <div className="w-full sm:w-auto">
        <h1 className="text-base sm:text-xl lg:text-4xl font-bold text-center">
          <CountUp start={0} end={180} duration={3} />+
        </h1>
        <p className="text-xs sm:text-sm lg:text-base text-center">
          Tutor Nationalities
        </p>
      </div>
      <div className="w-full sm:w-auto">
        <h1 className="flex justify-center items-center text-base sm:text-xl lg:text-4xl font-bold">
          <p className="mr-1">
            <CountUp start={0} end={4} duration={3} />
          </p>
          <FaStarHalfStroke />
        </h1>
        <p className="text-xs sm:text-sm lg:text-base text-center">
          On the App Store
        </p>
      </div>
    </div>
  );
};

export default Stats;
