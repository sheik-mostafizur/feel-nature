import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <div>
      <header>
        <div className="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(1,167,43,0.4)),url('/images/home-hero.jpg')] relative bg-cover bg-center">
          <Navbar className="max-w-screen-xl px-4 mx-auto" />
          <div className="md:w-2/3 space-y-6 py-8 md:py-20 mx-auto text-center text-white">
            <h1 className="font-bold text-6xl">
              Discover the Wonders of Nature
            </h1>
            <p>
              Immerse yourself in the beauty and tranquility of nature. From
              majestic mountains to pristine beaches, there{`'`}s no shortage of
              breathtaking scenery waiting to be explored. Unwind and recharge
              in the great outdoors, and experience the wonder of our natural
              world like never before.
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
