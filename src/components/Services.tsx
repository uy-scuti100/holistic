export default function Services() {
   return (
      <section>
         <h2 className="p-20 text-4xl font-bold text-center pt-36 grote md:text-5xl ">
            Service Highlights
         </h2>

         <p className="pt-8 text-lg text-center">
            Discover our range of holistic services for your well-being
         </p>

         <div className="flex flex-wrap items-center justify-center gap-5">
            <img
               src="/hiamma.jpg"
               alt="showcase-image-1"
               className="h-[500px] w-[500px] object-contain rounded-2xl"
            />
            <img
               src="/womb care.jpg"
               alt="showcase-image-2"
               className="h-[500px] w-[500px] object-contain rounded-2xl"
            />
            <img
               src="/palvic.jpg"
               alt="showcase-image-3"
               className="h-[500px] w-[500px] object-contain rounded-2xl"
            />
            <img
               src="/nourishmant.jpg"
               alt="showcase-image-4"
               className="h-[500px] w-[500px] object-contain rounded-2xl"
            />
            <img
               src="/clinic.jpg"
               alt="showcase-image-4"
               className="h-[500px] w-[500px] object-contain rounded-2xl"
            />
         </div>
      </section>
   );
}
