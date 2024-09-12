import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { error } from "console";
import Link from "next/link";
export default function Contact() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid max-w-5xl mx-auto items-center gap-6 lg:gap-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Contact Me
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl/tight">
              Get in Touch
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Ready to bring your project to life? Let's talk. Fill out the form
              and I'll get back to you as soon as possible.
            </p>
          </div>
          <div className="mx-auto w-full max-w-[500px] space-y-4">
            <form className="grid gap-4">
                <Input className="w-full" required placeholder="Name" type="text" />
              <Input className="w-full" required placeholder="Email" type="email" />
              <Input className="w-full" required placeholder="Subject" type="text" />
              <Textarea
                className="min-h-[100px] w-full"
                placeholder="Your Message"
                required
              />
              <Button disabled onClick={undefined} type="submit">Submit</Button>
              <div className="text-xs p-2"><p>* Currently this service is unavailable Optional service below!</p></div>
            </form>
          </div>
        </div>
        <div className="flex justify-center items-center min-h-0.5 pt-10">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>

        {/* Internal Page Navigation Using Link */}
        <p className="text-lg">
          Visit our <Link className="text-blue-500 hover:underline" href={"/about"}>About Page</Link>
        </p>

        {/* Phone Link */}
        <p className="text-lg mt-4">
          Call us:{" "}
          <Link href="tel:+91 7987419262" className="text-blue-500 hover:underline">
            +(91) 7987419262
          </Link>
        </p>

        {/* Email Link */}
        <p className="text-lg mt-4">
          Email us:{" "}
          <Link href="mailto:aryanpatel7987@gmail.com" className="text-blue-500 hover:underline">
            aryanpatel7987@gmail.com
          </Link>
        </p>
      </div>
    </div>
      </div>
    </section>
  );
}

// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import { Textarea } from '@/components/ui/textarea'
// import React from 'react'

// export default function Contact() {
//   return (
//     <div className="container grid gap-4 px-4 py-12 md:grid-cols-2 md:gap-10 lg:gap-20 xl:px-6 xl:py-24">
//         <div className="space-y-2">
//           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h2>
//           <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//             Have a question or want to work together? Send me a message.
//           </p>
//         </div>
//         <div className="grid gap-4">
//           <div className="space-y-2">
//             <Label className="text-lg" htmlFor="name">
//               Name
//               <span className="text-sm font-normal text-gray-500 dark:text-gray-400">(Optional)</span>
//             </Label>
//             <Input id="name" placeholder="Enter your name" />
//           </div>
//           <div className="space-y-2">
//             <Label className="text-lg" htmlFor="email">
//               Email
//               <span className="text-sm font-normal text-gray-500 dark:text-gray-400">(Optional)</span>
//             </Label>
//             <Input id="email" placeholder="Enter your email" type="email" />
//           </div>
//           <div className="space-y-2">
//             <Label className="text-lg" htmlFor="message">
//               Message
//             </Label>
//             <Textarea className="min-h-[150px] resize-y" id="message" placeholder="Enter your message" />
//           </div>
//           <Button size="lg">Submit</Button>
//         </div>
//       </div>
//   )
// }
