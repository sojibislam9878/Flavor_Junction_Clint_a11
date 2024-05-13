import AboutUs from "../Components/AboutUs";
import ContactUs from "../Components/ContactUs";
import Slider from "../Components/Slider";
import TopFoodsSection from "../Components/TopFoodsSection";


const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <TopFoodsSection></TopFoodsSection>
           <AboutUs></AboutUs>
           <ContactUs></ContactUs>
           
        </div>
    );
};

export default Home;