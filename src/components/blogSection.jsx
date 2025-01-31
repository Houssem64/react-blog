import { useEffect, useState } from "react";
import { fetchAllPosts } from "../graphql/dataFetching";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const BlogCardSection = ({ selectedCategory }) => {
  const [posts, setPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const allPosts = await fetchAllPosts(selectedCategory);
        setPosts(allPosts);
        setDisplayedPosts(allPosts.slice(0, postsPerPage));
      } catch (error) {
        navigate("/404");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory, navigate]);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    const startIndex = 0;
    const endIndex = nextPage * postsPerPage;
    
    setDisplayedPosts(posts.slice(startIndex, endIndex));
    setCurrentPage(nextPage);
  };

  const hasMorePosts = displayedPosts.length < posts.length;

  return (
    <section className="text-white animate-fade-in-up">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedPosts.map((blog, index) => (
            <Link
              key={blog.id}
              as={NavLink}
              to={`${blog.slug}`}
              className={`hover:shadow-lg hover:shadow-white hover:translate-x-3 hover:-translate-y-3 transition max-w-sm mx-auto group hover:no-underline focus:no-underline animate-fade-in-up stagger-delay-${(index % 3) + 1}`}
            >
              <img
                role="presentation"
                className="object-cover w-full rounded-xl h-44"
                src={blog.image.url}
                alt={blog.title}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:no-underline group-focus:no-underline">
                  {blog.title}
                </h3>
                <span className="text-xs text-white">{blog.date}</span>
                <p>{blog.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {hasMorePosts && (
          <div className="flex justify-center">
            <div className="relative inline-flex group">
              <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <button
                onClick={handleLoadMore}
                disabled={loading}
                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-800"
              >
                {loading ? 'Loading...' : 'Load More'}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogCardSection;
