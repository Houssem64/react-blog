import React from "react";
import blogData from "../data/blogData";
import LatestPostCard from "./latestPost";

const BlogCards = ({ title, image, date, description }) => {
  return (
    <>
      <a
        rel="noopener noreferrer"
        href="#"
        className="hover:shadow-lg hover:shadow-white hover:translate-x-3 hover:-translate-y-3 transition max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black-950"
        element-id="259"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded-xl h-44 bg-black-950"
          src={image}
          element-id="258"
        />
        <div className="p-6 space-y-2" element-id="257">
          <h3
            className="text-2xl font-semibold group-hover:underline group-focus:underline"
            element-id="256"
          >
            {title}
          </h3>
          <span className="text-xs text-black-600" element-id="255">
            {date}
          </span>
          <p element-id="254">{description}</p>
        </div>
      </a>
    </>
  );
};
const BlogCardSection = () => {
  return (
    <section className="bg-black-950  text-white" element-id="268">
      <div
        className="container  max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12"
        element-id="267"
      >
        <h1 className="font-extrabold text-4xl ml-10">Latest Post</h1>
        <LatestPostCard />
        <div
          className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          element-id="260"
        >
          {blogData.map((blog, index) => (
            <BlogCards
              key={index}
              title={blog.title}
              description={blog.description}
              image={blog.image}
              date={blog.date}
            />
          ))}
        </div>
        <div className="flex justify-center" element-id="223">
          <button
            type="button"
            className="px-6 py-3 text-sm rounded-md hover:underline bg-black-50 text-black-600"
            element-id="222"
          >
            Load more posts...
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogCardSection;
