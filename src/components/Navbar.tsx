import { NavLink } from "react-router-dom";

export default function Navbar() {
   return (
      <nav className="wideness w-full items-center mx-auto flex justify-between bg-black pad">
         <img
            src="logo.jpg"
            alt="logo"
            className="h-[100px] w-[100px] rounded-full object-contain"
         />

         <div className=" md:flex items-center gap-7 uppercase hidden">
            <ul className="inline-flex gap-5 ">
               <NavLink
                  to={"/"}
                  className="hover:text-gold duration-300 ease transition-all">
                  About Us
               </NavLink>
               <NavLink
                  to={"/"}
                  className="hover:text-gold duration-300 ease transition-all">
                  Services
               </NavLink>
            </ul>
            <button className="border border-gold px-3 py-2 uppercase rounded-full">
               Appointment
            </button>
         </div>

         <div className="md:hidden">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="50"
               height="50"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round"
               className="cursor-pointer">
               <line x1="3" x2="21" y1="6" y2="6" />
               <line x1="3" x2="21" y1="12" y2="12" />
               <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
         </div>
      </nav>
   );
}
