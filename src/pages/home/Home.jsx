import Banner from "../banner/Banner";
import Discount from "../discount/Discount";
import Faq from "../faq/Faq";
import Stats from "../stats/Stats";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <Discount></Discount>
            <Faq></Faq>
        </div>
    );
};

export default Home;