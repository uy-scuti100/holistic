export default function HeroSection() {
   return (
      <section
         className="flex flex-col items-center justify-center w-full mx-auto text-center md:text-left md:items-start pad wideness herobg"
         style={{ height: `calc(100vh - 100px)` }}>
         <h1 className="text-[2.938rem] font-bold md:text-6xl grote leading-[70px] ">
            Welcome to <br className="hidden md:block" />{" "}
            <span className="text-gold">Murabiyah</span> Holistics.
         </h1>
         <p className="pt-5 text-xl font-semibold text-white/80">
            Experience holistic healing for a balanced mind, body, and soul.
         </p>
         <div className="flex items-center justify-center gap-5 pt-10">
            <button className="px-5 py-2 transition-transform duration-300 bg-black rounded-full hover:border border-gold hover:bg-black/80">
               Book Appointment
            </button>
            <button className="px-5 py-2 transition-colors duration-300 border rounded-full border-gold hover:bg-white hover:text-black">
               Learn More
            </button>
         </div>

         <div className="pt-10">
            <img
               src="/public/certify.png"
               alt="certificate-image"
               className="h-[100px] w-[100px]"
            />
            {/* <p className="font-bold ">UK CERTIFIED</p> */}
         </div>
      </section>
   );
}
