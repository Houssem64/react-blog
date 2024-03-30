import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import { useEffect, useState } from "react";

const graphcms = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cluczoi5o0m1007vxfauiuile/master"
);

const blogDataQuery = gql`
  {
    posts {
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

const BlogCards = ({ image, title, date, description, slug }) => {
  return (
    <>
      <a
        rel="noopener noreferrer"
        href={`/posts/${slug}`}
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
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { posts } = await graphcms.request(blogDataQuery);
      setPosts(posts);
    };

    fetchData();
  }, []);
  return (
    <section className="bg-black-950  text-white" element-id="268">
      <div
        className="container  max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12"
        element-id="267"
      >
        <div
          className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          element-id="260"
        >
          {posts &&
            posts.map((blog, id) => (
              <BlogCards
                key={id}
                title={blog.title}
                description={blog.description}
                image={blog.image.url}
                date={blog.date}
                slug={blog.slug}
              />
            ))}
        </div>
        <div className="flex justify-center" element-id="223">
          <div className="relative inline-flex  group">
            <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href="#"
              title="Get quote now"
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Load More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCardSection;
