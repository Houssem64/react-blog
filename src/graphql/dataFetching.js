// dataFetching.js
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

export const fetchLatestPost = async () => {
  try {
    const { posts } = await graphcms.request(blogDataQuery);
    return posts[0];
  } catch (error) {
    throw error;
  }
};

export const fetchAllPosts = async () => {
  const query = gql`
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

  try {
    const { posts } = await graphcms.request(query);
    return posts;
  } catch (error) {
    throw error;
  }
};
