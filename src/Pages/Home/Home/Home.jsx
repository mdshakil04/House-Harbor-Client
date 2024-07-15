import Appartements from '../../Appartements/Appartements';
import Banner from '../Banner/Banner';
import ExploreHome from '../ExploreHome/ExploreHome';
import Offer from '../Offer/Offer';
import Tips from '../Tips/Tips';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Tips></Tips>
            <Offer></Offer>
            <ExploreHome></ExploreHome>
            <Appartements></Appartements>
        </div>
    );
};

export default Home;