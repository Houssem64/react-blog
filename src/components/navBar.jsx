import "../index.css";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { gql } from "graphql-request";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { GraphQLClient } from "graphql-request";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint =
        "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cluczoi5o0m1007vxfauiuile/master";

      const graphQLClient = new GraphQLClient(endpoint);
      const query = gql`
        {
          navLinks {
            navlink
          }
        }
      `;

      const data = await graphQLClient.request(query);
      console.log(data.navLinks);
      setData(data.navLinks);
    };

    fetchData();
  }, []);

  return (
    <Disclosure
      as="nav"
      className="bg-gradient-to-r from-[#020213] to-[#091c38] mb-2"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {data.map((item, index) => (
                      <Link key={index}>
                        <div
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.navlink}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {/* Search bar */}
              <div className="max-w-md hover:scale-[1.2]    hover:ring-2 hover:ring-white/50 transition  ">
                <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-none overflow-hidden">
                  <div className="grid bg-transparent place-items-center h-full w-12 text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>

                  <input
                    className="peer bg-transparent h-full w-full outline-none text-md text-white "
                    type="text"
                    id="search"
                    placeholder="Search something.."
                  />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {data.map((item, index) => (
                <Disclosure.Button
                  key={index}
                  as="a"
                  href="#"
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.navlink}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
