import React from "react";
export default function Article() {
  return (
    <section className="bg-gradient-to-r from-[#020213] to-[#091c38] leading-normal tracking-normal">
      <div className="text-center pt-11 md:pt-32">
        <p className="text-sm md:text-base text-green-500 font-bold">Date</p>
        <h1 className="font-bold text-white break-normal text-3xl md:text-5xl">
          Title
        </h1>
      </div>

      <img
        src="https://source.unsplash.com/collection/1118905/"
        className="h-[50vh] -z-50 container w-full max-w-6xl mx-auto  mt-8 rounded "
      ></img>

      <div className="container max-w-5xl mx-auto -translate-y-52 ">
        <div className="mx-0 sm:mx-6">
          <div
            className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal"
            style={{ fontFamily: "Georgia, serif" }}
          >
            <p className="text-2xl md:text-3xl mb-5">
              Welcome{" "}
              <a
                className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
                href="https://www.tailwindcss.com"
              >
                tailwind{" "}
              </a>
              test{" "}
              <a
                className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
                href="https://www.ghost.org"
              >
                {" "}
                test{" "}
              </a>
              <a
                className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
                href="https://demo.ghost.io/welcome"
              >
                test{" "}
              </a>{" "}
              test
            </p>

            <p className="py-6">
              The basic blog page layout is available and all using the default
              Tailwind CSS classNamees (although there are a few hardcoded style
              tags). If you are going to use this in your project, you will want
              to convert the classNamees into components.
            </p>

            <p className="py-6">
              Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus
              purus, in mattis tortor sollicitudin pretium. Phasellus at diam
              posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi
              diam, pulvinar ut molestie eget, eleifend ac magna. Sed at lorem
              condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend
              turpis vel erat bibendum scelerisque. Maecenas id risus dictum,
              rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor
              molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae
              molestie quam fermentum. Donec ac pretium diam. Suspendisse sed
              odio risus. Nunc nec luctus nisi. className aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.
              Duis nec nulla eget sem dictum elementum.
            </p>

            <ol>
              <li className="py-3">
                Maecenas accumsan lacus sit amet elementum porta. Aliquam eu
                libero lectus. Fusce vehicula dictum mi. In non dolor at sem
                ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse
                quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi
                sit amet tellus scelerisque tortor semper posuere.
              </li>
              <li className="py-3">
                Morbi varius posuere blandit. Praesent gravida bibendum neque
                eget commodo. Duis auctor ornare mauris, eu accumsan odio
                viverra in. Proin sagittis maximus pharetra. Nullam lorem
                mauris, faucibus ut odio tempus, ultrices aliquet ex. Nam id
                quam eget ipsum luctus hendrerit. Ut eros magna, eleifend ac
                ornare vulputate, pretium nec felis.
              </li>
              <li className="py-3">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Nunc vitae pretium elit. Cras leo mauris,
                tristique in risus ac, tristique rutrum velit. Mauris accumsan
                tempor felis vitae gravida. Cras egestas convallis malesuada.
                Etiam ac ante id tortor vulputate pretium. Maecenas vel sapien
                suscipit, elementum odio et, consequat tellus.
              </li>
            </ol>

            <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
              Crocodiles are easy. They try to kill and eat you. People are
              harder. Sometimes they pretend to be your friend first. - Steve
              Irwin
            </blockquote>

            <p className="py-6">What's the output?</p>
            <pre className="bg-gray-900 rounded text-white font-mono text-base p-4">
              <code className="break-words whitespace-pre-wrap">
                let a = 3; let b = new Number(3); let c = 3; console.log(a ==
                b); console.log(a === b); console.log(b === c);
              </code>
            </pre>

            {/*  article content  */}
          </div>

          <div className="flex w-full items-center font-sans p-8 md:p-24">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="https://avatars0.githubusercontent.com/u/3438943?s=460&u=7a7f3b7b3d2d1f9f8f5a5f3f0d1c4e8a3b2e3c5d&v=4"
              alt="Avatar of Author"
            ></img>
            <div className="flex-1">
              <p className="text-base text-pink-500 font-bold md:text-xl leading-none">
                Houssem Mehouachi
              </p>
              <p className="text-white text-xs md:text-base">
                Web Developer
                <a
                  className="text-pink-500 hover:text-green-500 ml-2 no-underline tranistion hover:scale-[1.2]"
                  href="https://www.houssemmehouachi.me/"
                  target="_blank"
                >
                  My Website
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
