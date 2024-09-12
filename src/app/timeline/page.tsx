import Footer from "../components/Footer";

export default function page() {
  const data = [
    {
      title: "Life, 20 Aug 2002",
      event: "Born in Vijayraghavgarh, village- Deosari Indore in Katni City Madhya Pradesh 🇮🇳",
    },
    {
      title: "School, July 2005",
      event:
        "First day of School at Sarswati Shishu Mandir Deosari Indore 🧑‍🎓 (papa sent me very early lol)",
    },
    {
      title: "School, July 2007",
      event:
        "My admission first class after kg one and kg two was again",
    },
    {
      title: "School, July 2008- May 2018",
      event:
        " I did my schooling from my village school",
    },
    {
      title: "School, June 2018",
      event:
        "Then, I decided to do 11th from anywhere else but there study and enviorment was not well",
    },
    {
      title: "School, July 2019",
      event:
        "Then, I switched school in 12th",
    },
    {
      title: "Life, July 2019",
      event:
        "I got feverized 2 months continue badly those days makes me weak. Still, I did hard work and crack 12th with A+ marks",
    },
    {
      title: "Life, Mar 2020",
      event:
        "I cleared 12th class papers and passed with good marks and ignored JEE because of interest in engineering was zero at that time.",
    },
    {
      title: "Collage, Sept 2020",
      event:
        "After 12th I choose my carrer in engineering then pendemic was on peak (Lol at that time i don't know anything about computer science engineering and my interest in this)" 
    },
    {
      title: "Life, Dec 2020",
      event:
      "Moved to Jabalpur & First day in OIST, Jabalpur. Got a chance to know the city lifestyle and made some new friends.",
    },
    {
      title: "Life, Sept 2020- July 2022",
      event:
      "First, second and third semester cleared in pendemic online",
    },
    {
      title: "Education, March 2021",
      event:
        "Started learning programming in C in pandamic 🧑🏻‍💻 ",
    },
    {
      title: "Life, March 2022",
      event:
        "after all I purchased my first laptop and explore about programming and practice typing",
    },
    {
      title: "Education, Aug 2022",
      event:
        "I fell in love with HTML, CSS and web development followed Code With Harry as my Mantor",
    },
    {
      title: "Education, Jul 2023",
      event:
        "Started learning Full stack web development and explored many technologies",
    },
    {
      title: "Education, Jan 2024",
      event:
        "Making myself strong in coding and exploring various",
    }
  ];
  return (
    <main>
      <section className="my-2 py-5">
        <div className="text-center text-black">
          <h1 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl">
            Timeline
          </h1>
          <p className="my-4">Life events, opportunities, failures</p>
        </div>
        <div className="w-full my-12 flex items-center justify-center">
          <div className="max-w-xl">
            {data.map((info) => (
              <div className="flex gap-x-3" data-aos="zoom-up">
                <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                  <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  </div>
                </div>
                <div className="grow pt-0.5 pb-8">
                  <h3 className="flex gap-x-1.5 font-semibold text-gray-800">
                    {info.title}
                  </h3>
                  <div className="mt-1 text-sm text-gray-600">
                    {info.event}
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
