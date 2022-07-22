import { request, gql } from 'graphql-request';

type CommentObj = {
  name: string;
  email: string;
  comment: string;
  slug: string;
};

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || '';

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const res = await request(graphqlAPI, query);

  return res.postsConnection.edges;
};

export const getPostDetails = async (slug: string) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        author {
          bio
          name
          id
          photo {
            url
          }
        }
        createdAt
        slug
        title
        excerpt
        featuredImage {
          url
        }
        categories {
          name
          slug
        }
        content {
          raw
        }
      }
    }
  `;

  const res = await request(graphqlAPI, query, { slug });

  return res.post;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
          title
          featuredImage {
            url
          }
          createdAt
          slug
        }
      }
  `;

  const res = await request(graphqlAPI, query);
  return res.posts;
};

type RequestP = {
  categories: string[];
  slug: string;
};

export const getSimilarPosts = async ({ categories, slug }: RequestP) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const res = await request(graphqlAPI, query, { categories, slug });
  return res.posts;
};

export const getCategories = async () => {
  const query = gql`
    query GetCategories() {
      categories {
        name
        slug
      }
    }
  `;

  const res = await request(graphqlAPI, query);
  return res.categories;
};

export const getCategoryPost = async (slug: string) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: { categories_some: { slug: $slug } }) {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const res = await request(graphqlAPI, query, { slug });
  return res.postsConnection.edges;
};

export const getComments = async (slug: string) => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        email
        createdAt
        comment
      }
    }
  `;

  const res = await request(graphqlAPI, query, { slug });
  return res.comments;
};

export const submitComment = async (commentObj: CommentObj) => {
  const res = await fetch('/api/comment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentObj),
  });

  return res.json();
};

export async function getPhotos() {
  const query = gql`
    query GetPhotos {
      galleriesConnection {
        edges {
          node {
            photo {
              id
              url
            }
            createdAt
            title
          }
        }
      }
    }
  `;

  const photos = await request(graphqlAPI, query);
  return photos.galleriesConnection.edges;
}
