export default function Showcase() {
   return (
      <section className="flex flex-col items-center justify-center pt-20">
         <h2 className="p-10 text-4xl font-bold text-center pt-36 grote md:text-5xl ">
            Experience{" "}
            <span className="font-bold text-gold">Holistic Healing</span> with
            our Wombcare, Hijama, and Pelvic Steaming Services
         </h2>

         <p className="pt-8 text-lg text-center">
            Experience holistic wellness through our specialized services
         </p>

         <div className="flex flex-wrap items-center justify-center gap-10 pt-16 ">
            <img
               src="/show1.jpeg"
               alt="showcase-image-1"
               className="h-[300px] w-[300px] object-cover rounded-2xl"
            />
            <img
               src="/show2.jpeg"
               alt="showcase-image-2"
               className="h-[300px] w-[300px] object-cover rounded-2xl"
            />
            <img
               src="/show3.jpeg"
               alt="showcase-image-3"
               className="h-[300px] w-[300px] object-cover rounded-2xl"
            />
            <img
               src="/show4.jpeg"
               alt="showcase-image-4"
               className="h-[300px] w-[300px] object-cover rounded-2xl"
            />
         </div>
      </section>
   );
}
