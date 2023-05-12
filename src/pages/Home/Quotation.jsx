// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";

import {ImQuotesLeft, ImQuotesRight} from "react-icons/im";

const Quotation = () => {
  return (
    <section className="bg-primary-50 flex items-center justify-center text-primary-950 px-4 py-8 md:py-20">
      <Swiper className="mySwiper max-w-screen-xl mx-auto">
        <SwiperSlide>
          <ImQuotesLeft className="block mx-auto text-3xl md:text-6xl" />
          <p className="text-xl py-8">
            Nature is a powerful force that can have a profound impact on our
            physical and mental health. Spending time in nature has been shown
            to reduce stress, improve mood, boost creativity, and increase
            feelings of well-being.
          </p>
          <ImQuotesRight className="block mx-auto text-3xl md:text-6xl" />
        </SwiperSlide>
        <SwiperSlide>
          <ImQuotesLeft className="block mx-auto text-3xl md:text-6xl" />
          <p className="text-xl py-8">
            There are many ways to connect with nature. You can go for a walk in
            the woods, hike in the mountains, swim in the ocean, or simply sit
            in your backyard and listen to the birds sing. No matter how you
            choose to connect with nature, the important thing is to simply be
            present and allow yourself to experience the beauty and wonder of
            the natural world.
          </p>
          <ImQuotesRight className="block mx-auto text-3xl md:text-6xl" />
        </SwiperSlide>
        <SwiperSlide>
          <ImQuotesLeft className="block mx-auto text-3xl md:text-6xl" />
          <p className="text-xl py-8">
            When you spend time in nature, take some time to slow down and focus
            on your surroundings. Pay attention to the sounds, smells, and
            textures of nature. Notice the way the sunlight filters through the
            trees or the way the wind rustles through the leaves. Allow yourself
            to be fully present in the moment and let go of any worries or
            stresses from your day-to-day life.
          </p>
          <ImQuotesRight className="block mx-auto text-3xl md:text-6xl" />
        </SwiperSlide>
        <SwiperSlide>
          <ImQuotesLeft className="block mx-auto text-3xl md:text-6xl" />
          <p className="text-xl py-8">
            Connecting with nature can be a simple but powerful way to improve
            your health and well-being. So next time you{`'`}re feeling
            stressed, overwhelmed, or simply need a break from the hustle and
            bustle of everyday life, take some time to connect with nature. You
            may be surprised at how good it makes you feel.
          </p>
          <ImQuotesRight className="block mx-auto text-3xl md:text-6xl" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Quotation;
