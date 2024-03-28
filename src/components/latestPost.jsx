import React from "react";
import blogData from "../data/blogData";
const LatestPost = ({ title, image, date, description }) => {
  return (
    <>
      <a
        rel="noopener noreferrer"
        href="#"
        className=" block hover:shadow-lg hover:shadow-white hover:translate-x-3 hover:-translate-y-3 transition max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-black-50"
        element-id="266"
      >
        <img
          src={image}
          alt={title}
          className="rounded-xl object-cover w-full h-64  sm:h-96 lg:col-span-7 bg-black-950"
          element-id="265"
        />
        <div className="p-6  space-y-2 lg:col-span-5" element-id="264">
          <h3
            className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline"
            element-id="263"
          >
            {title}
          </h3>
          <span className="text-xs text-white" element-id="262">
            {date}
          </span>
          <p element-id="261">{description}</p>
        </div>
      </a>
    </>
  );
};
const LatestPostCard = () => {
  // Render only the first element of blogData
  const firstBlog = blogData[0];
  return (
    <div>
      <LatestPost
        title={firstBlog.title}
        description={firstBlog.description}
        image={firstBlog.image}
        date={firstBlog.date}
      />
    </div>
  );
};

export default LatestPostCard;
