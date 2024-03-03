import Link from "next/link"

export default function page() {
  return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-start gap-4 px-4 text-center md:gap-8 md:px-6 lg:grid-cols-2 lg:items-center xl:max-w-6xl xl:gap-10">
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
              <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Check out some of my recent projects.
              </p>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-center gap-8 md:grid-cols-2 md:gap-12">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Restaurant-App</h3>
                <p className="text-gray-500 dark:text-gray-400">Major Project</p>
              </div>
              <div className="flex flex-col gap-2 min-h-[200px]">
                <img
                  alt="Major Project"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
                  height="250"
                  src="/opentable.svg"
                  width="500"
                />
                <div className="flex items-center justify-center p-4 border border-dashed border-gray-200  dark:border-gray-800">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200  bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="https://github.com/aryanpatel077/restaurant-booking"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Nextjs-App</h3>
                <p className="text-gray-500 dark:text-gray-400">Build Shopping website for my resume</p>
              </div>
              <div className="flex flex-col gap-2 min-h-[200px]">
                <img
                  alt="e-com project"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
                  height="250"
                  src="/ecom.svg"
                  width="500"
                />
                <div className="flex items-center justify-center p-4 border border-dashed border-gray-200  dark:border-gray-800">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200  bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="https://github.com/aryanpatel077/restaurant-booking"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
