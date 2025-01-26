import Banner from "../banner/Banner";
import PopularTutors from "../popularTutors/PopularTutors";
import Stats from "../stats/Stats";


const Home = () => {
    return (
        <div>
            <h2>This is home</h2>
            <Banner></Banner>
            <Stats></Stats>
            <PopularTutors></PopularTutors>
        </div>
    );
};

export default Home;