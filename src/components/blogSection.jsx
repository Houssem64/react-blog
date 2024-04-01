import React, { useEffect, useState } from "react";
import { fetchAllPosts } from "../graphql/dataFetching";
import Article from "../pages/Article";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const BlogCardSection = () => {
  const [posts, setPosts] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allPosts = await fetchAllPosts();
        setPosts(allPosts);
      } catch (error) {
        history.push("/404");
      }
    };

    fetchData();
  }, []);

  return (
    <section className="bg-black-950 text-white">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((blog) => (
            <Link
              key={blog.id}
              as={NavLink}
              to={`${blog.slug}`}
              onClick={() => setSelectedBlog(blog)}
              className="hover:shadow-lg hover:shadow-white no-underline hover:translate-x-3 hover:-translate-y-3 transition max-w-sm mx-auto group hover:no-underline focus:no-underline bg-black-950"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded-xl h-44 bg-black-950"
                src={blog.image.url}
                alt={blog.title}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:no-underline group-focus:no-underline">
                  {blog.title}
                </h3>
                <span className="text-xs text-black-600">{blog.date}</span>
                <p>{blog.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center">
          <div className="relative inline-flex group">
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
