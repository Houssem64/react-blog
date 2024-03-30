import React, { useEffect, useState } from "react";
import { GraphQLClient, gql } from "graphql-request";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { RichText } from "@graphcms/rich-text-react-renderer";
const content = {
  type: "document",
  children: [
    {
      type: "paragraph",
      children: [{ text: "This is a simple example of a rich text field." }],
    },
  ],
};

const Article = ({ title, date, description, image, body }) => {
  return (
    <section className="bg-gradient-to-r from-[#020213] to-[#091c38] leading-normal tracking-normal">
      <div className="text-center pt-11 md:pt-32">
        <p className="text-sm md:text-base text-green-500 font-bold">{date} </p>
        <h1 className="font-bold text-white break-normal text-3xl md:text-5xl">
          {title}
        </h1>
      </div>

      <img
        src={image}
        className="h-[75vh] -z-50 container w-full max-w-6xl mx-auto  mt-8 rounded "
        alt="Article Image"
      />

      <div className="container max-w-5xl mx-auto -translate-y-52 ">
        <div className="mx-0 sm:mx-6">
          <div
            className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal"
            style={{ fontFamily: "Georgia, serif" }}
          >
            <p className="text-2xl md:text-3xl mb-5">{description} </p>

            <RichText
              className="py-6 text-md text-black "
              content={content}
              renderers={{
                h1: ({ children }) => (
                  <h1 className="text-white">{children}</h1>
                ),
                bold: ({ children }) => <strong>{children}</strong>,
              }}
            />
          </div>

          <div className="flex w-full items-center font-sans p-8 md:p-24"></div>
        </div>
      </div>
    </section>
  );
};

const Articles = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const graphcms = new GraphQLClient(
        "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cluczoi5o0m1007vxfauiuile/master"
      );

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
      }
    };

    fetchPost();
  }, [slug]);

  return (
    <>
      {post && (
        <Article
          title={post.title}
          date={post.date}
          description={post.description}
          image={post.image.url}
          body={post.body.html}
        />
      )}
    </>
  );
};

export default Articles;
