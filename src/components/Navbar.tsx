import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
   const [open, setOpen] = useState(false);
   return (
      <nav className="flex items-center justify-between w-full mx-auto bg-black nav-anime wideness pad">
         <img
            src="logo.jpg"
            alt="logo"
            className="h-[100px] w-[100px] rounded-full object-contain"
         />

         <div
            className={`items-center ${
               open ? "" : "hidden"
            }  uppercase md:flex gap-7`}>
            <ul className="absolute inset-x-0 top-[100px] h-full bg-black flex flex-col pt-20 md:pt-0 gap-5 text-center items-center md:justify-normal md:flex-row md:static ">
               <NavLink
                  to={"/"}
                  className="transition-all duration-300 hover:text-gold ease">
                  About Us
               </NavLink>
               <NavLink
                  to={"/"}
                  className="transition-all duration-300 hover:text-gold ease">
                  Services
               </NavLink>
               <button className="w-auto px-3 py-2 uppercase transition duration-300 border rounded-full md:hidden border-gold hover:bg-ash ease">
                  Appointment
               </button>
            </ul>
            <button className="hidden px-3 py-2 uppercase transition duration-300 border rounded-full border-gold md:block hover:bg-ash ease">
               Appointment
            </button>
         </div>

         <div className="md:hidden">
            <button onClick={() => setOpen((prev) => !prev)}>
               {open ? (
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="30"
                     height="30"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     stroke-width="2"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     className="transition-all duration-300 ease-in-out cursor-pointer">
                     <path d="M18 6 6 18" />
                     <path d="m6 6 12 12" />
                  </svg>
               ) : (
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="30"
                     height="30"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     stroke-width="2"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     className="transition-all duration-300 ease-in-out cursor-pointer">
                     <line x1="3" x2="21" y1="6" y2="6" />
                     <line x1="3" x2="21" y1="12" y2="12" />
                     <line x1="3" x2="21" y1="18" y2="18" />
                  </svg>
               )}
            </button>
         </div>
      </nav>
   );
}
