import "../index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Specialists = () => {
   const testimonials: string[] = [
      "/test1.jpeg",
      "/test2.jpeg",
      "/test3.jpeg",
      "/test4.jpeg",
      "/test5.jpeg",
      "/test6.jpeg",
   ];
   return (
      <section>
         <h2 className="text-4xl text-center  grote md:text-5xl leading-[50px] font-bold pt-36">
            Happy Clients
         </h2>
         <p className="self-start pt-8 text-lg text-center">
            Read what our clients have to say about us
         </p>
         <div className="my-[100px]">
            <div className="flex items-center justify-center flex-grow px-5 mx-auto">
               <Swiper
                  slidesPerView={1}
                  spaceBetween={3}
                  autoplay={{
                     delay: 3000,
                     disableOnInteraction: false,
                  }}
                  pagination={{
                     clickable: true,
                  }}
                  breakpoints={{
                     320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                     },
                     768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                     },
                     1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                     },
                     1440: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                     },
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="flex items-center justify-center productSlider">
                  {testimonials.map((image: string, i) => {
                     return (
                        <SwiperSlide className="h-[450px] mb-8" key={i}>
                           <img
                              className="w-auto h-[450px] rounded-2xl"
                              src={image}
                              alt="testimonial-img"
                           />
                        </SwiperSlide>
                     );
                  })}
               </Swiper>
            </div>
         </div>
      </section>
   );
};

export default Specialists;
