import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import AboutUs from "./AboutUs";
import OurService from "./OurService";
import Question from "./Question";
import Quotation from "./Quotation";

const Home = () => {
  return (
    <div>
      <header>
        <div className="min-h-[500px] bg-[linear-gradient(to_bottom,rgba(0,52,15,0.8),rgba(1,167,43,0.1)),url('/images/home-hero.jpg')] relative bg-cover bg-center">
          <Navbar className="max-w-screen-xl px-4 mx-auto" />
          <div className="max-w-3xl space-y-6 px-4 py-8 md:py-20 mx-auto text-center text-white">
            <h1 className="font-bold text-4xl md:text-6xl">
              Discover the Wonders of Nature
            </h1>
            <p>
              Immerse yourself in the beauty and tranquility of nature. From
              majestic mountains to pristine beaches, there{`'`}s no shortage of
              breathtaking scenery waiting to be explored. Unwind and recharge
              in the great outdoors, and experience the wonder of our natural
              world like never before.
            </p>
            <button
              type="button"
              className="px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              Get Started
            </button>
          </div>
        </div>
      </header>

      <OurService/>
      <Quotation/>
      <AboutUs/>
      <Question/>
      <Footer/>
    </div>
  );
};

export default Home;
