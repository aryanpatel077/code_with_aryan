import Link from "next/link";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-4 md:py-6">
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20 xl:py-24">
          <div className="container flex flex-col items-center justify-center gap-4 text-center md:gap-10">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Hi, I'm Aryan</h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 md:mx-auto lg:mx-auto">
                I'm a passionate and creative web developer with a love for building amazing user experiences.
              </p>
            </div>
            <div className="space-y-4 sm:space-y-0 sm:flex space-x-2 md:gap-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border px-8 text-sm font-medium shadow-sm transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-purple-700 dark:hover:bg-purple-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="/contact"
              >
                Contact Me
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border  px-8 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-purple-700 dark:hover:bg-purple-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="/"
              >
                My Work
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-start gap-4 px-4 text-center md:gap-8 md:px-6 lg:grid-cols-2 lg:items-center xl:max-w-6xl xl:gap-10">
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I'm a passionate web developer with a keen eye for design. I've been coding for over a decade and love
                every aspect of it.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
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
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24">
      <div className="container grid max-w-3xl items-center gap-4 px-4 text-center md:gap-8 md:px-6 lg:grid-cols-1 lg:max-w-5xl xl:gap-10">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Skills</h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            I'm a full-stack developer with expertise in various technologies.
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="inline text-2xl font-semibold tracking-tighter sm:text-3xl">Frontend</h3>
            <div className="gap-2.5 md:gap-3.5">
              <span className="inline rounded-lg border border-gray-200 bg-gray-50 py-1.5 text-sm font-medium text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
                JavaScript
              </span>
              <span className="inline rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
                TypeScript
              </span>
              <span className="inline rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
                React.js
              </span>
              <span className="inline rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
                Next.js
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="inline text-2xl font-semibold tracking-tighter sm:text-3xl">Backend</h3>
            <div className="gap-2.5 md:gap-3.5">
              <span className="inline rounded-lg border border-gray-200 bg-gray-50 py-1.5 text-sm font-medium text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
                Node.js
              </span>
              <span className="inline rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
                Spring
              </span>
              <span className="inline rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
                Django
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="inline text-2xl font-semibold tracking-tighter sm:text-3xl">Databases</h3>
            <div className="gap-2.5 md:gap-3.5">
              <span className="inline rounded-lg border border-gray-200 bg-gray-50 py-1.5 text-sm font-medium text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
                PostgreSQL
              </span>
              <span className="inline rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
                MongoDB
              </span>
              <span className="inline rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
                MySQL
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="inline text-2xl font-semibold tracking-tighter sm:text-3xl">Tools</h3>
            <div className="gap-2.5 md:gap-3.5">
              <span className="inline rounded-lg border border-gray-200 bg-gray-50 py-1.5 text-sm font-medium text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
                Git
              </span>
              <span className="inline rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
                GitHub
              </span>
              <span className="inline rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
                VS Code
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
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
            {/* <div className="space-y-4">
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
            </div> */}
          </div>
        </div>
      </section>
     <Contact/>
      </main>
     <Footer/>
    </div>
     );
    }

    // <div className="flex flex-col min-h-screen">
    //   <header className="py-4 md:py-6">
    //     <Navbar/>
    //   </header>
    //   <main className="flex-1">
    //     <section className="py-12 md:py-16 lg:py-20 xl:py-24">
    //       <div className="container flex flex-col items-center justify-center gap-4 text-center md:gap-10">
    //         <div className="space-y-3">
    //           <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Hi, I'm Aryan</h1>
    //           <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 md:mx-auto lg:mx-auto">
    //             I'm a passionate and creative web developer with a love for building amazing user experiences.
    //           </p>
    //         </div>
    //         <div className="space-y-4 sm:space-y-0 sm:flex sm:gap-4 lg:gap-4">
    //           <Link
    //             className="inline-flex h-10 items-center justify-center rounded-md border px-8 text-sm font-medium shadow-sm transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-purple-700 dark:hover:bg-purple-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
    //             href="#"
    //           >
    //             Contact Me
    //           </Link>
    //           <Link
    //             className="inline-flex h-10 items-center justify-center rounded-md border  px-8 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-purple-700 dark:hover:bg-purple-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
    //             href="#"
    //           >
    //             My Work
    //           </Link>
    //         </div>
    //       </div>
    //     </section>
    //     <section className="py-12 md:py-16 lg:py-20 xl:py-24">
    //       <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6 lg:grid-cols-2 lg:text-left">
    //         <div className="space-y-4 md:space-y-6">
    //           <div className="space-y-3">
    //             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
    //             <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
    //               I'm a web developer based in New York. I specialize in creating beautiful and functional websites
    //               using the latest technologies.
    //             </p>
    //           </div>
    //           <div className="grid grid-cols-2 items-center gap-4 text-left sm:gap-6">
    //             <img
    //               alt="Profile Picture"
    //               className="rounded-full overflow-hidden object-cover object-center w-[180px]"
    //               height="180"
    //               src="/placeholder.svg"
    //               style={{
    //                 aspectRatio: "180/180",
    //                 objectFit: "cover",
    //               }}
    //               width="180"
    //             />
    //             <div className="space-y-4">
    //               <div className="space-y-1">
    //                 <h3 className="font-semibold">John Doe</h3>
    //                 <p className="text-sm text-gray-500 dark:text-gray-400">Frontend Developer</p>
    //               </div>
    //               <div className="space-y-2">
    //                 <p className="leading-loose">
    //                   Welcome to my personal website. I'm passionate about creating clean and elegant user interfaces.
    //                   In my free time, I enjoy experimenting with new frameworks and libraries to expand my skill set.
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="grid items-center justify-center gap-4 md:gap-8">
    //           <div className="block w-full max-w-sm border border-dashed border-gray-200 border-gray-200 dark:border-gray-800 dark:border-gray-800" />
    //           <div className="space-y-4">
    //             <Link
    //               className="flex items-center space-x-1.5 font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
    //               href="#"
    //             >
    //               <div className="w-4 h-4 stroke-current" />
    //               My Team
    //             </Link>
    //             <Link
    //               className="flex items-center space-x-1.5 font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
    //               href="#"
    //             >
    //               <div className="w-4 h-4 stroke-current" />
    //               Contact Me
    //             </Link>
    //             <Link
    //               className="flex items-center space-x-1.5 font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
    //               href="#"
    //             >
    //               <div className="w-4 h-4 stroke-current" />
    //               My Projects
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //     <section className="py-12 md:py-16 lg:py-20 xl:py-24">
    //       <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6">
    //         <div className="space-y-3">
    //           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Portfolio</h2>
    //           <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
    //             Check out some of my recent projects.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="container grid max-w-5xl items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6 lg:grid-cols-2 lg:text-left xl:max-w-6xl xl:gap-10">
    //         <div className="mx-auto grid gap-2 sm:gap-4 items-center justify-center p-4 sm:p-8">
    //           <img
    //             alt="Project Image"
    //             className="aspect-[4/3] overflow-hidden rounded-lg object-contain object-center"
    //             height="400"
    //             src="/placeholder.svg"
    //             width="600"
    //           />
    //         </div>
    //         <div className="space-y-4">
    //           <div className="space-y-2">
    //             <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Project Title</h3>
    //             <p className="text-gray-500 dark:text-gray-400">Description</p>
    //           </div>
    //           <div className="space-y-4">
    //             <button >
    //               View Project
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //     <section className="py-12 md:py-16 lg:py-20 xl:py-24">
    //       <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6">
    //         <div className="space-y-3">
    //           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
    //           <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
    //             I'm experienced in the following technologies.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="container grid max-w-5xl items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6 lg:grid-cols-2 lg:text-left xl:max-w-6xl xl:gap-10">
    //         <div className="mx-auto grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
    //           <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
    //             <div className="w-12 h-12" />
    //           </div>
    //           <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
    //             <div className="w-12 h-12" />
    //           </div>
    //           <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
    //             <div className="w-12 h-12" />
    //           </div>
    //           <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
    //             <div className="w-12 h-12" />
    //           </div>
    //           <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
    //             <div className="w-12 h-12" />
    //           </div>
    //           <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
    //             <div className="w-12 h-12" />
    //           </div>
    //         </div>
    //         <div className="divide-y rounded-lg border">
    //           <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
    //             <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">HTML</div>
    //             <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">CSS</div>
    //             <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">JavaScript</div>
    //           </div>
    //           <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
    //             <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">React</div>
    //             <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">Next.js</div>
    //             <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">TypeScript</div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //     <section className="py-12 md:py-16 lg:py-20 xl:py-24">
    //       <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6">
    //         <div className="space-y-3">
    //           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h2>
    //           <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
    //             Send me a message if you'd like to collaborate.
    //           </p>
    //         </div>
    //         <form className="mx-auto max-w-[400px] grid gap-4">
    //           <input className="mx-auto w-full md:grid-cols-2" placeholder="Name" type="text" />
    //           <input className="mx-auto w-full md:grid-cols-2" placeholder="Email" type="email" />
    //           <span className="mx-auto w-full md:grid-cols-2"  />
    //           <button className="mx-auto w-full md:col-start-2" type="submit">
    //             Submit
    //           </button>
    //         </form>
    //       </div>
    //     </section>
    //   </main>
    //   <footer className="border-t">
    //     <div className="container flex flex-col items-center justify-center gap-2 py-4 md:py-6">
    //       <div className="text-center text-sm tracking-wider text-gray-500 dark:text-gray-400">
    //         © 2023 Acme Inc. All rights reserved.
    //       </div>
    //     </div>
    //   </footer>
    // </div>
