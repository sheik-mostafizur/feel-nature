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
    </div>
  );
};
export default About;
