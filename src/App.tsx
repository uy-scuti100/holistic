import { BrowserRouter } from "react-router-dom";
import Discover from "./components/Discover";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Services from "./components/Services";
import Showcase from "./components/Showcase";
import Testimonials from "./components/Testimonials";

export default function App() {
   return (
      <BrowserRouter>
         <main className="flex flex-col mx-auto ">
            <Navbar />
            <HeroSection />
            <Showcase />
            <Services />
            {/* <Testimonials /> */}
            <Discover />
            <Faq />
            <Newsletter />
            <Footer />
         </main>
      </BrowserRouter>
   );
}
