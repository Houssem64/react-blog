// dataFetching.js
import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(API_URL, {
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

// Query to get unique categories
const categoriesQuery = gql`
  query GetCategories {
    posts {
      category {
        id
        category
      }
    }
  }
`;

// Query posts by category
const allPostsQuery = gql`
  query GetPosts($category: String) {
    posts(where: { category_some: { category: $category } }) {
      id
      title
      date
      description
      image {
        url
      }
      slug
      category {
        category
        id
      }
    }
  }
`;

export const fetchCategories = async () => {
  try {
    const { posts } = await graphcms.request(categoriesQuery);
    // Extract unique categories
    const uniqueCategories = Array.from(
      new Set(
        posts.flatMap(post => 
          post.category.map(cat => 
            JSON.stringify({ id: cat.id, name: cat.category })
          )
        )
      )
    ).map(cat => JSON.parse(cat));
    
    return uniqueCategories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const fetchAllPosts = async (categoryId = null) => {
  try {
    const variables = categoryId ? { category: categoryId } : {};
    const { posts } = await graphcms.request(allPostsQuery, variables);
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
