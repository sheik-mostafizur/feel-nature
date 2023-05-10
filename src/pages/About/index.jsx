import Navbar from "../../components/Navbar";

const About = () => {
  return (
    <div>
      <header>
        <div className="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(1,167,43,0.4)),url('/images/about-hero.jpg')] relative bg-cover bg-center">
          <Navbar className="max-w-screen-xl px-4 mx-auto" />
          <div className="md:w-2/3 space-y-6 py-8 md:py-20 mx-auto text-center text-white">
            <h1 className="font-bold text-6xl">About Us</h1>
          </div>
        </div>
      </header>
    </div>
  );
};

export default About;
