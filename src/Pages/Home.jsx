import Slider from "../Components/Slider";
import useAuth from "../Hooks/useAuth";


const Home = () => {
    const {user}= useAuth()
    return (
        <div>
           <Slider></Slider>
        </div>
    );
};

export default Home;