import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { RiThreadsLine } from "react-icons/ri";

export default function Footer() {
   return (
      <footer className="flex flex-col items-center justify-center w-full gap-20 pt-20 pb-5 mx-auto wideness pad ">
         <div className="pt-40">
            {" "}
            <div className="container mx-auto">
               <div className="text-center ">
                  <h2 className="mb-6 font-semibold uppercase grote">
                     Subscribe to our newsletter
                  </h2>
                  <p className="text-[#777777]">
                     Be the first to get the latest news about health tips,
                     promotions, and much more
                  </p>
               </div>
               {/* form */}
               <form className="flex flex-col items-center w-full gap-5 mx-auto my-14">
                  <input
                     type="email"
                     placeholder="Your email address"
                     className="h-10 text-center bg-transparent border-b outline-none placeholder:text-xs placeholder:opacity-75 w-[400px] md:w-[600px]"
                  />
                  <button className="px-5 py-2 transition duration-300 bg-black border rounded-full ease border-gold hover:bg-white/40">
                     Join
                  </button>
               </form>
               {/* links */}
               <div className="flex mx-auto text-base capitalize text-gold gap-x-6 max-w-max mb-9 ">
                  <a
                     href="#"
                     className="text-center transition-all hover:text-gold">
                     {" "}
                     Returns Policy
                  </a>
                  <a
                     href="#"
                     className="text-center transition-all hover:text-gold t">
                     {" "}
                     Track your order
                  </a>
                  <a
                     href="#"
                     className="text-center transition-all hover:text-gold t">
                     {" "}
                     Shipping & delivery
                  </a>
               </div>
               {/* social buttons */}
               <div className="flex mx-auto mb-16 text-lg gap-x-6 max-w-max">
                  <a href="#" className="transition-all hover:text-gold">
                     <FaInstagram size={30} />
                  </a>
                  <a href="#" className="transition-all hover:text-gold">
                     <FaFacebook size={30} />
                  </a>
                  <a href="#" className="transition-all hover:text-gold">
                     <RiThreadsLine size={30} />
                  </a>
                  <a href="#" className="transition-all hover:text-gold">
                     <FaWhatsapp size={30} />
                  </a>
               </div>
            </div>
            <div className="flex items-center justify-center">
               <img
                  src="murabiyyah.jpg"
                  alt="logo-img"
                  className="h-[200px] w-[200px] "
               />
            </div>
            <div className="py-10 bprder-t border-t-primary">
               <div className="container mx-auto">
                  <div className="text-sm text-center text-white">
                     copyright &copy; Murabiyah Hijaamah Inc 2023. All rights
                     reserved.
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}
