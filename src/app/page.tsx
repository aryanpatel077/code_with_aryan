import Link from "next/link";
import Contact from "./components/Contact";
import * as motion from "framer-motion/client" // Add Framer Motion for animations

export default function Component() {
  const categories = [
    {
      title: "Programming Languages",
      skills: ["Java/C++", "Python", "JavaScript", "Rust"],
    },
    {
      title: "Frontend",
      skills: ["TypeScript", "React", "Next.js", "Astro"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Next.js", "Django"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLite"],
    },
    {
      title: "Tools",
      skills: ["Git", "Docker", "Vercel", "Linux"],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900">
      <header className="py-4 md:py-6"></header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 lg:py-20 xl:py-24">
          <div className="container flex flex-col items-center justify-center gap-4 text-center md:gap-10">
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-900 dark:text-gray-50">
                Hi, I'm Aryan
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400 md:mx-auto lg:mx-auto">
                I'm a passionate and creative web developer with a love for
                building amazing user experiences.
              </p>
            </motion.div>
            <div className="space-y-4 sm:space-y-0 sm:flex space-x-2 md:gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border px-8 text-sm font-medium shadow-sm transition-colors hover:bg-purple-800 hover:text-white dark:border-gray-800 dark:bg-purple-700 dark:hover:bg-purple-800 dark:hover:text-gray-50"
                  href="/contact"
                >
                  Contact Me
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border px-8 text-sm font-medium shadow-sm transition-colors hover:bg-purple-800 hover:text-white dark:border-gray-800 dark:bg-purple-700 dark:hover:bg-purple-800 dark:hover:text-gray-50"
                  href="/about"
                >
                  About Me
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-start gap-4 px-4 text-center md:gap-8 md:px-6 lg:grid-cols-2 lg:items-center xl:max-w-6xl xl:gap-10">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-50">
                  About Me
                </h2>
                <p className="mx-auto max-w-3xl text-gray-500 md:text-xl dark:text-gray-400">
                  I'm a passionate web developer with a keen eye for design.
                  I love every aspect of coding and creating seamless user
                  experiences.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                alt="Profile Picture"
                className="rounded-full"
                height="200"
                src="/abhi.jpeg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container grid max-w-3xl items-center gap-4 px-4 text-center md:gap-8 md:px-6 lg:grid-cols-1 lg:max-w-5xl xl:gap-10">
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 dark:text-gray-50">
                My Skills
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                I'm a full-stack developer with expertise in various
                technologies.
              </p>
            </motion.div>
            <div className="space-y-8 max-w-4xl mx-auto px-4">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  className="space-y-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl text-gray-900 dark:text-gray-50">
                    {category.title}
                  </h3>
                  <div className="flex justify-center flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="inline-block rounded-full border border-gray-300 bg-gray-100 px-4 py-2 text-base font-medium text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 transition-all hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-start gap-4 px-4 text-center md:gap-8 md:px-6 lg:grid-cols-2 lg:items-center xl:max-w-6xl xl:gap-10">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-50">
                My Projects
              </h2>
              <p className="mx-auto max-w-3xl text-gray-500 md:text-xl dark:text-gray-400">
                Check out some of my recent projects.
              </p>
            </motion.div>

            <div className="grid w-full grid-cols-1 items-start justify-center gap-8 md:grid-cols-2 md:gap-12">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-gray-900 dark:text-gray-50">
                  Restaurant-App
                </h3>
                <p className="text-gray-500 dark:text-gray-400">Major Project</p>
                <img
                  alt="Major Project"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
                  height="250"
                  src="/opentable.svg"
                  width="500"
                />
                <div className="flex items-center justify-center p-4 border border-dashed border-gray-200 dark:border-gray-800">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800"
                    href="https://github.com/aryanpatel077/restaurant-booking"
                  >
                    View Project
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-gray-900 dark:text-gray-50">
                  Task-Manager-App
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  To-Do List Full Stack App
                </p>
                <img
                  alt="Task Manager"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
                  height="250"
                  width="500"
                  src="/"
                />
                <div className="flex items-center justify-center p-4 border border-dashed border-gray-200 dark:border-gray-800">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800"
                    href="https://github.com/codezaryan/full-stack-work-manager-2"
                  >
                    View Project
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <Contact />
      </main>
    </div>
  );
}