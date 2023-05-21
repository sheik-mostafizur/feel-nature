import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const About = () => {
  return (
    <div>
      <header>
        <div className="bg-[linear-gradient(to_bottom,rgba(0,52,15,0.8),rgba(1,167,43,0.1)),url('/images/about-hero.jpg')] relative bg-cover bg-center">
          <Navbar className="max-w-screen-xl px-4 mx-auto" />
          <div className="md:w-2/3 space-y-6 py-8 md:py-20 mx-auto text-center text-white flex items-center justify-center min-h-[448px]">
            <h1 className="font-bold text-3xl md:text-6xl">About Us</h1>
          </div>
        </div>
      </header>
      <div className="py-8 md:py-24 bg-primary-50">
        <h2 className="font-bold text-3xl md:text-5xl text-center">
          Embrace the Beauty of Nature <br /> Discover Feel Nature
        </h2>
        <img
          className="w-full object-cover h-96 my-6 md:my-16"
          src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="About Nature"
        />
        <p className="max-w-[600px] mx-auto">
          Welcome to Feel Nature, where the captivating beauty of the natural
          world awaits. Immerse yourself in breathtaking landscapes,
          awe-inspiring wildlife, and the serenity of untouched environments.
          Our mission is to connect you with nature{`'s`} wonders, inspiring a
          deep appreciation and understanding of our planet. Through stunning
          imagery, engaging articles, and immersive experiences, Feel Nature
          invites you to embark on a journey of exploration, discovery, and
          rejuvenation. Join us as we celebrate the extraordinary power and
          tranquility found within the embrace of nature.
        </p>
      </div>
      <Footer />
    </div>
  );
};
export default About;
