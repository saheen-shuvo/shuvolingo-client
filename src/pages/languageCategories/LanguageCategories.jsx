import { BsMoonStarsFill } from "react-icons/bs";
import { FaMegaport } from "react-icons/fa";
import { GiSpain, GiTigerHead } from "react-icons/gi";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { LuReceiptJapaneseYen } from "react-icons/lu";
import { RiEnglishInput } from "react-icons/ri";
import {
  SiAirchina,
  SiDigitalocean,
  SiIledefrancemobilites,
} from "react-icons/si";

const LanguageCategories = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-8">
        Language Categories
      </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-2 mx-16">
          <div className="border-2 flex items-center justify-around gap-2 p-3 rounded-lg">
            {/* LOGO */}
            <div className="text-3xl">
              <RiEnglishInput />
            </div>
            {/* TEXT */}
            <div>
              <h1 className="text-lg font-semibold">English Tutors</h1>
              <p className="text-sm">20,000 teachers</p>
            </div>
            {/* ARROW */}
            <div>
              <button className="text-3xl">
                <IoIosArrowDroprightCircle />
              </button>
            </div>
          </div>
          <div className="border-2 flex items-center justify-around gap-2 p-3 rounded-lg">
            {/* LOGO */}
            <div className="text-3xl">
              <GiSpain />
            </div>
            {/* TEXT */}
            <div>
              <h1 className="text-lg font-semibold">Spanish Tutors</h1>
              <p className="text-sm">6,300teachers</p>
            </div>
            {/* ARROW */}
            <div>
              <button className="text-3xl">
                <IoIosArrowDroprightCircle />
              </button>
            </div>
          </div>
          <div className="border-2 flex items-center justify-around gap-2 p-3 rounded-lg">
            {/* LOGO */}
            <div className="text-3xl">
              <SiIledefrancemobilites />
            </div>
            {/* TEXT */}
            <div>
              <h1 className="text-lg font-semibold">French Tutors</h1>
              <p className="text-sm">2,600 teachers</p>
            </div>
            {/* ARROW */}
            <div>
              <button className="text-3xl">
                <IoIosArrowDroprightCircle />
              </button>
            </div>
          </div>
          <div className="border-2 flex items-center justify-around gap-2 p-3 rounded-lg">
            {/* LOGO */}
            <div className="text-3xl">
              <GiTigerHead />
            </div>
            {/* TEXT */}
            <div>
              <h1 className="text-lg font-semibold">German Tutors</h1>
              <p className="text-sm">1,603 teachers</p>
            </div>
            {/* ARROW */}
            <div>
              <button className="text-3xl">
                <IoIosArrowDroprightCircle />
              </button>
            </div>
          </div>
          <div className="border-2 flex items-center justify-around gap-2 p-3 rounded-lg">
            {/* LOGO */}
            <div className="text-3xl">
              <SiDigitalocean />
            </div>
            {/* TEXT */}
            <div>
              <h1 className="text-lg font-semibold">Italian Tutors</h1>
              <p className="text-sm">1,750 teachers</p>
            </div>
            {/* ARROW */}
            <div>
              <button className="text-3xl">
                <IoIosArrowDroprightCircle />
              </button>
            </div>
          </div>
          <div className="border-2 flex items-center justify-around gap-2 p-3 rounded-lg">
            {/* LOGO */}
            <div className="text-3xl">
              <SiAirchina />
            </div>
            {/* TEXT */}
            <div>
              <h1 className="text-lg font-semibold">Chinese Tutors</h1>
              <p className="text-sm">2,260 teachers</p>
            </div>
            {/* ARROW */}
            <div>
              <button className="text-3xl">
                <IoIosArrowDroprightCircle />
              </button>
            </div>
          </div>
          <div className="border-2 flex items-center justify-around gap-2 p-3 rounded-lg">
            {/* LOGO */}
            <div className="text-3xl">
              <BsMoonStarsFill />
            </div>
            {/* TEXT */}
            <div>
              <h1 className="text-lg font-semibold">Arabic Tutors</h1>
              <p className="text-sm">4,780 teachers</p>
            </div>
            {/* ARROW */}
            <div>
              <button className="text-3xl">
                <IoIosArrowDroprightCircle />
              </button>
            </div>
          </div>
          <div className="border-2 flex items-center justify-around gap-2 p-3 rounded-lg">
            {/* LOGO */}
            <div className="text-3xl">
              <LuReceiptJapaneseYen />
            </div>
            {/* TEXT */}
            <div>
              <h1 className="text-lg font-semibold">Japanese Tutors</h1>
              <p className="text-sm">3,400 teachers</p>
            </div>
            {/* ARROW */}
            <div>
              <button className="text-3xl">
                <IoIosArrowDroprightCircle />
              </button>
            </div>
          </div>
          <div className="border-2 flex items-center justify-around gap-2 p-3 rounded-lg">
            {/* LOGO */}
            <div className="text-3xl">
              <FaMegaport />
            </div>
            {/* TEXT */}
            <div>
              <h1 className="text-lg font-semibold">Portuguese Tutors</h1>
              <p className="text-sm">1,300 teachers</p>
            </div>
            {/* ARROW */}
            <div>
              <button className="text-3xl">
                <IoIosArrowDroprightCircle />
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default LanguageCategories;
