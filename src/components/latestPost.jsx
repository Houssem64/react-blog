import  { useEffect, useState } from "react";
import { fetchLatestPost } from "../graphql/dataFetching";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
const LatestPost = ({ title, image, date, description, slug }) => {
  return (
    <section className="bg-black-950  text-white">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <h1 className="font-extrabold text-4xl ml-10">Latest Post</h1>

        <Link
          as={NavLink}
          to={`${slug}`}
          className="block hover:shadow-lg hover:shadow-white hover:translate-x-3 hover:-translate-y-3 transition max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-black-50"
        >
          <img
            src={image}
            alt={title}
            className="rounded-xl object-cover w-full h-64  sm:h-96 lg:col-span-7 bg-black-950"
          />
          <div className="p-6  space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:no-underline group-focus:no-underline">
              {title}
            </h3>
            <span className="text-xs text-white">{date}</span>
            <p>{description}</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

const LatestPostCard = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const latestPost = await fetchLatestPost();
        setPost(latestPost);
      } catch (error) {
        history.push("/404");
      }
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
        slug={post.slug}
      />
    </div>
  ) : null;
};
LatestPost.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
};
export default LatestPostCard;
