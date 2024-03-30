import React from "react";

import { useState, useEffect } from "react";
import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cluczoi5o0m1007vxfauiuile/master"
);

const blogDataQuery = gql`
  {
    posts(orderBy: date_DESC, first: 1) {
      body {
        html
      }
      date
      id
      image {
        url
      }
      slug
      title
      description
    }
  }
`;

const LatestPost = ({ title, image, date, description }) => {
  return (
    <>
      <section className="bg-black-950  text-white" element-id="268">
        <div
          className="container  max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12"
          element-id="267"
        >
          <h1 className="font-extrabold text-4xl ml-10">Latest Post</h1>

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
        </div>
      </section>
    </>
  );
};
const LatestPostCard = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { posts } = await graphcms.request(blogDataQuery);
      setPost(posts[0]);
    };

    fetchData();
  }, []);

  return post ? (
    <div>
      <LatestPost
        title={post.title}
        description={post.description}
        image={post.image.url}
        date={post.date}
      />
    </div>
  ) : null;
};

export default LatestPostCard;
