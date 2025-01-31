

export default function AboutMe() {
  return (
    <div className="bg-gradient-to-r from-[#020213] to-[#091c38]    mb-0 ">
      <div className="text-center  md:pt-32">
        <h1 className="font-bold text-white mb-4 p-2 break-normal text-3xl md:text-5xl">
          About Me
        </h1>
      </div>
      <div className="container max-w-6xl mx-auto ">
        <div className="mx-0 sm:mx-6">
          <div
            className="bg-white w-full  md:p-24 text-xl md:text-2xl text-gray-800 leading-normal shadow-md  shadow-black"
            style={{ fontFamily: "Georgia, serif" }}
          >
            <p className="text-2xl md:text-3xl mb-5">
              Hi, I&aposm Houssem Mehouachi, a passionate web developer dedicated to
              turning digital dreams into reality. Dive into my portfolio and
              let&aposs collaborate to bring your vision to vibrant life online.I
              have experience working with JavaScript, React, Node.js, and
              MongoDB. I&aposm currently learning GraphQL and TypeScript.
            </p>
            <p className="text-2xl md:text-3xl mb-5">
              I&aposm a tech enthusiast who loves to learn new things. I&aposm always
              looking for opportunities to work on projects that challenge me
              and help me grow as a developer. I&aposm open to new opportunities and
              collaborations. Feel free to reach out to me if you have any
              questions or would like to work together.
            </p>
            <div className="flex space-x-9 text-center justify-center mt-10 pt-10 ">
              <a
                className="group relative inline-block focus:outline-none focus:ring "
                href="https://www.linkedin.com/in/houssem-mehouachi "
              >
                <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-blue-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

                <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold  tracking-widest text-black group-active:text-opacity-75">
                  LinkedIn
                </span>
              </a>
              <a
                className="group relative inline-block focus:outline-none focus:ring"
                href="https://www.github.com/Houssem64"
              >
                <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-blue-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

                <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold  tracking-widest text-black group-active:text-opacity-75">
                  Github
                </span>
              </a>
              <a
                className="group relative inline-block focus:outline-none focus:ring"
                href="https://www.houssem-mehouachi.com/"
              >
                <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-blue-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

                <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold  tracking-widest text-black group-active:text-opacity-75">
                  Portfolio
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
