import  { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GraphQLClient, gql } from "graphql-request";
import LoadingAnimation from "../components/loading";

const graphcms = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cluczoi5o0m1007vxfauiuile/master"
);

const Articles = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const fetchPost = async () => {
      const query = gql`
        query GetPost($slug: String!) {
          post(where: { slug: $slug }) {
            id
            title
            date
            description
            image {
              url
            }
            body {
              html
            }
          }
        }
      `;

      try {
        const { post } = await graphcms.request(query, { slug });
        setPost(post);
      } catch (error) {
        console.error("Error fetching post:", error);
        navigate("/404");
      }
    };

    fetchPost();
  }, [slug, navigate]);
  console.log(post);

  return (
    <>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <>
          {post && (
            <section className="bg-gradient-to-r from-[#020213] to-[#091c38] leading-normal tracking-normal">
              <div className="text-center pt-11 md:pt-32">
                <p className="text-sm md:text-base text-green-500 font-bold">
                  {post.date}
                </p>
                <h1 className="font-bold text-white break-normal text-3xl md:text-5xl">
                  {post.title}
                </h1>
              </div>

              <img
                src={post.image.url}
                className="h-[75vh] -z-50 container w-full max-w-6xl mx-auto  mt-8 rounded"
                alt="Article Image"
              />

              <div className="container max-w-6xl mx-auto -translate-y-52 -mb-40">
                <div className="mx-0 sm:mx-6">
                  <div
                    className="bg-white w-full p-2 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal shadow-md  shadow-black"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    <p className="text-2xl md:text-3xl mb-5">
                      {post.description}
                    </p>
                    <div
                      className="text-black body-content"
                      dangerouslySetInnerHTML={{ __html: post.body.html }}
                    ></div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default Articles;
