import { Link } from "react-router-dom"; // Add this import
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
  // Define categories with their details
  const categories = [
    {
      name: "English",
      icon: <RiEnglishInput />,
      teachers: "20,000 teachers",
    },
    {
      name: "Spanish",
      icon: <GiSpain />,
      teachers: "6,300 teachers",
    },
    {
      name: "French",
      icon: <SiIledefrancemobilites />,
      teachers: "2,600 teachers",
    },
    {
      name: "German",
      icon: <GiTigerHead />,
      teachers: "1,603 teachers",
    },
    {
      name: "Italian",
      icon: <SiDigitalocean />,
      teachers: "1,750 teachers",
    },
    {
      name: "Chinese",
      icon: <SiAirchina />,
      teachers: "2,260 teachers",
    },
    {
      name: "Arabic",
      icon: <BsMoonStarsFill />,
      teachers: "4,780 teachers",
    },
    {
      name: "Japanese",
      icon: <LuReceiptJapaneseYen />,
      teachers: "3,400 teachers",
    },
    {
      name: "Portuguese",
      icon: <FaMegaport />,
      teachers: "1,300 teachers",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center text-xl md:text-3xl font-bold my-8">
        Language Categories
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-2 mx-8 md:mx-24 ">
        {categories.map((category) => (
          <div
            key={category.name}
            className="border-2 flex items-center justify-around gap-2 p-3 rounded-lg"
          >
            {/* LOGO */}
            <div className="text-3xl">{category.icon}</div>
            {/* TEXT */}
            <div>
              <h1 className="text-lg font-semibold">{category.name} Tutors</h1>
              <p className="text-sm">{category.teachers}</p>
            </div>
            {/* ARROW LINK */}
            <Link to={`/tutors/language/${category.name}`}> {/* Dynamic link */}
              <IoIosArrowDroprightCircle className="text-3xl hover:text-blue-500 cursor-pointer" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageCategories;