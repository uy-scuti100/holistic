import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
   return (
      <section className="w-full gap-20 mx-auto pt-36 wideness pad">
         <h2 className="text-4xl text-center md:text-left grote md:text-5xl leading-[50px] font-bold">
            Frequently Asked Questions
         </h2>

         <p className="self-start pt-8 text-lg text-center md:text-left">
            Find answers to common questions about our services and clinic.
         </p>
         <Accordion type="single" collapsible className="w-full pt-20">
            <AccordionItem value="item-1">
               <AccordionTrigger className="text-xl font-bold grote md:text-2xl text-gold ">
                  What is Wombcare?
               </AccordionTrigger>
               <AccordionContent className="max-w-md p-2 text-lg  text-[#818181]">
                  Wombcare is a holistic approach to women's health, focusing on
                  nurturing and supporting the womb through natural therapies
                  and practices.
               </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
               <AccordionTrigger className="text-xl font-bold grote md:text-2xl text-gold ">
                  What is Hijama?
               </AccordionTrigger>
               <AccordionContent className="max-w-md p-2 text-lg  text-[#818181]">
                  Hijama, also known as cupping therapy, is an ancient practice
                  that involves creating suction on the skin to promote blood
                  flow and healing.
               </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
               <AccordionTrigger className="text-xl font-bold text-gold grote md:text-2xl ">
                  What is Pelvic Steaming?
               </AccordionTrigger>
               <AccordionContent className="max-w-md p-2 text-lg text-[#818181]">
                  Pelvic steaming, also known as vaginal steaming, is a natural
                  therapy that involves sitting over a steaming herbal infusion
                  to support reproductive health and balance.
               </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
               <AccordionTrigger className="text-xl font-bold grote md:text-2xl text-gold ">
                  How can I book an appointment?
               </AccordionTrigger>
               <AccordionContent className="max-w-md p-2 text-lg  text-[#818181]">
                  Booking an appointment is easy! Simply visit our Contact Us
                  page and fill out the booking form, or give us a call.
               </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
               <AccordionTrigger className="text-xl font-bold grote md:text-2xl text-gold ">
                  Do you offer virtual consultations?
               </AccordionTrigger>
               <AccordionContent className="max-w-md p-2 text-lg  text-[#818181]">
                  Yes, we offer virtual consultations for certain services.
                  Please contact us for more information.
               </AccordionContent>
            </AccordionItem>
         </Accordion>
      </section>
   );
}
