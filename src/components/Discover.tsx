export default function Discover() {
   return (
      <section className="flex flex-col justify-center w-full gap-20 mx-auto pt-36 wideness md:flex-row pad ">
         <div>
            <h2 className="text-4xl text-center md:text-left grote md:text-5xl leading-[50px] font-bold">
               Discover Holistic <span className="text-gold">Wellness</span>{" "}
               Solutions
            </h2>

            <p className="self-start pt-8 text-lg text-center md:text-left">
               Experience the transformative power of our natural healing
               therapies.
            </p>
            <div className="flex items-center self-start justify-center gap-5 pt-10 md:justify-normal">
               <button className="px-5 py-2 transition-colors duration-300 border rounded-full border-gold hover:bg-white/80 hover:text-black">
                  Book Appointment
               </button>
            </div>
         </div>
         <div className="h-[500px] md:w-[800px] w-[400px] rounded border border-gold">
            <video
               src="/discovery.mp4"
               autoPlay
               controls
               loop
               muted
               className="object-cover w-full h-full rounded"
            />
         </div>
      </section>
   );
}
