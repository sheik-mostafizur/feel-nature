const AboutUs = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-8 md:py-20 grid md:grid-cols-2 gap-6 md:items-center">
      <div className="text-primary-950 space-y-6">
        <p>ABOUT US</p>
        <h2 className="text-3xl md:text-5xl">
          Tell website visitors who you are and why they should choose your
          business.
        </h2>
        <p>
          Because when a visitor first lands on your website, you’re a stranger
          to them. They have to get to know you in order to want to read your
          blog posts, subscribe to your email newsletter, or buy what you’re
          selling.
        </p>
        <button
          type="button"
          className="text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-500 dark:focus:ring-primary-800">
          Find Out More
        </button>
      </div>
      <div>
        <img
          src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/leaf.jpg"
          alt="Feel Nature"
        />
      </div>
    </section>
  );
};

export default AboutUs;
