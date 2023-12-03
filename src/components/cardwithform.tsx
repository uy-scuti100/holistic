import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";

export function CardWithForm() {
   return (
      <Card className="w-[400px] bg-black text-white border-gold">
         <CardHeader>
            <CardTitle className="pb-4 text-lg text-center grote">
               Send Us A Message{" "}
            </CardTitle>
            <CardDescription className="text-center text-[#818181] text-lg">
               We are happy to hear from you
            </CardDescription>
         </CardHeader>
         <CardContent>
            <form>
               <div className="grid items-center w-full gap-4">
                  <div className="flex flex-col space-y-1.5">
                     <label htmlFor="name">Your Name</label>
                     <input
                        id="name"
                        placeholder="John Doe"
                        className="h-10 bg-transparent border-b outline-none placeholder:text-xs placeholder:opacity-75 border-[#818181]"
                     />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                     <label htmlFor="email">Your Email</label>
                     <input
                        id="email"
                        placeholder="email@email.com"
                        className="h-10 bg-transparent border-b outline-none placeholder:text-xs placeholder:opacity-75 border-[#818181]"
                     />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                     <label htmlFor="message">Message</label>
                     <textarea
                        name="message"
                        placeholder="How can we help you..."
                        className="bg-transparent border-b outline-none resize-none h-28 placeholder:text-xs placeholder:opacity-75 border-[#818181]"
                     />
                  </div>
               </div>
            </form>
         </CardContent>
         <CardFooter className="flex justify-center">
            <button className="px-5 py-2 transition duration-300 bg-black border rounded-full ease border-gold hover:bg-white/40">
               Send Message
            </button>
         </CardFooter>
      </Card>
   );
}
