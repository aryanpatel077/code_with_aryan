import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import * as motion from "framer-motion/client";
import Link from "next/link";
export default function Contact() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  
  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.3 } },
  };
  
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-t  dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerVariants}
          className="grid max-w-5xl mx-auto items-center gap-6 lg:gap-12"
        >
          <motion.div
            variants={fadeInUpVariants}
            className="space-y-2"
          >
            <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
              Contact Me
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Get in Touch
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl lg:text-base dark:text-gray-400">
              Ready to bring your project to life? Let's talk. Fill out the form and I'll get back to you as soon as possible.
            </p>
          </motion.div>
          
          <motion.div
            variants={fadeInUpVariants}
            className="mx-auto w-full max-w-[500px] space-y-4"
          >
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
              <div className="text-xs p-2">
                <p>* Currently this service is unavailable. Optional service below!</p>
              </div>
            </form>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerVariants}
          className="flex justify-center items-center min-h-0.5 pt-10"
        >
          <motion.div
            variants={fadeInUpVariants}
            className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-900"
          >
            <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg">
              Visit our <Link className="text-blue-500 hover:underline" href={"/about"}>About Page</Link>
            </p>
            <p className="text-lg mt-4">
              Call us:{" "}
              <Link href="tel:+91 7987419262" className="text-blue-500 hover:underline">
                +(91) 7987419262
              </Link>
            </p>
            <p className="text-lg mt-4">
              Email us:{" "}
              <Link href="mailto:aryanpatel7987@gmail.com" className="text-blue-500 hover:underline">
                aryanpatel7987@gmail.com
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}