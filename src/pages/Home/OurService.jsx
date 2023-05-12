import OurServiceData from "./OurServiceData";

const OurService = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-8 md:py-20">
      <h1 className="font-bold text-3xl md:text-7xl text-center mb-10 text-primary-800">
        Our Service
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {OurServiceData.map(({id, imgURL, title, description}) => (
          <div key={id} className="border border-primary-600">
            <img src={imgURL} alt={title} />
            <div className="mt-6 p-4 space-y-4 text-primary-950">
              <h2 className="font-bold text-xl">{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurService;
