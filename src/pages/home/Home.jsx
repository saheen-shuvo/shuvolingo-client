import Banner from "../banner/Banner";
import Discount from "../discount/Discount";
import Faq from "../faq/Faq";
import PopularTutors from "../popularTutors/PopularTutors";
import Stats from "../stats/Stats";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <Discount></Discount>
            <Faq></Faq>
            <PopularTutors></PopularTutors>
        </div>
    );
};

export default Home;