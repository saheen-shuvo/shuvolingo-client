import Banner from "../banner/Banner";
import Discount from "../discount/Discount";
import Faq from "../faq/Faq";
import LanguageCategories from "../languageCategories/LanguageCategories";
import Stats from "../stats/Stats";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <LanguageCategories></LanguageCategories>
            <Discount></Discount>
            <Faq></Faq>
        </div>
    );
};

export default Home;