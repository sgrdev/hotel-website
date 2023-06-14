import Hero from '../Components/Hero';
import About from '../Components/About';
import SecondEvent from '../Components/SecondEvent';
import CarouselExample from "../Components/Carousel"
import Footer from '../Components/Footer';
import NavigationBar from '../Components/Navbar';

const FrontPage = () => {
    return (
        <>


            <NavigationBar />
            <Hero />
            <About />
            <SecondEvent />
            <CarouselExample />
            <Footer />

        </>
    )
}

export default FrontPage