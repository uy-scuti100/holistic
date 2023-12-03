import { CardWithForm } from "./cardwithform";

export default function Newsletter() {
   return (
      <section className="w-full gap-20 mx-auto wideness md:flex-row pad ">
         <h2 className="text-4xl text-center  grote md:text-5xl leading-[50px] font-bold pt-36">
            Still have questions?
         </h2>

         <p className="self-start pt-8 text-lg text-center">
            Contact us for further assistance.
         </p>

         <div className="flex flex-col items-center justify-center gap-16 pt-32 md:flex-row">
            <div className="order-2 rounded md:order-1">
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.1830809505086!2d4.610092575164843!3d8.481572097317455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10364ce7b5dd6b7d%3A0x2dedb46f0d4b3a5f!2sMurabiyah%20Holistics%20Clinic!5e0!3m2!1sen!2sng!4v1701588137775!5m2!1sen!2sng"
                  width="600"
                  height="450"
                  className="rounded-sm w-[400px] md:h-[532px]"
                  // @ts-expect-error
                  allowfullscreen
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="order-1 md:order-2">
               <CardWithForm />
            </div>
         </div>
      </section>
   );
}
