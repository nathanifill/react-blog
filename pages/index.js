import styles from "../styles/Home.module.css";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "../components/BlogCard";
import BlogCardGrid from "../components/BlogCardGrid";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import { useState } from "react";
import Button from "../components/Button";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { STARTING_NUMBER_OF_POSTS } from "./_app";

const hygraph = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cl9k5hy8q2x8b01t85soof167/master"
);

const QUERY = gql`
  {
    posts {
      content {
        html
      }
      author {
        name
        profileImage {
          url
        }
      }
      datePublished
      id
      title
      slug
      coverImage {
        url
      }
      category {
        name
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await hygraph.request(QUERY);
  console.log(posts);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default function Home({ posts }) {
  const [documentTitle, setDocumentTitle] = useDocumentTitle("Home");

  const [postCount, setPostCount] = useState(STARTING_NUMBER_OF_POSTS);
  // Loads the first

  function loadMorePosts() {
    setPostCount(postCount + 3); // Loads next three posts
  }

  let latestPost;

  const selectedPosts = posts.slice(0, postCount);

  if (selectedPosts) {
    latestPost = selectedPosts[0];
  }

  // Default hero image if there are no posts
  if (!selectedPosts) {
    latestPost = {
      title: "Add a blog post to get started",
      coverImage: {
        url: "https://media.graphassets.com/Fl70peZeTXmUK5Fv7lDz",
      },
      slug: "",
    };
  }

  return (
    <main className={styles.main}>
      <Navigation></Navigation>
      <HeroImage
        title={latestPost.title}
        image={latestPost.coverImage.url}
        slug={latestPost.slug}
      />

      <BlogCardGrid>
        {selectedPosts &&
          selectedPosts
            .filter((post) => post !== latestPost)
            .map((post) => (
              <BlogCard
                key={post.id}
                coverImage={post.coverImage.url}
                category={post.category.name}
                title={post.title}
                author={post.author}
                slug={post.slug}
              />
            ))}
        {!selectedPosts && (
          <p className={styles.notice}>
            Add more blog posts to show additional content.
          </p>
        )}
      </BlogCardGrid>
      {selectedPosts.length < posts.length && (
        <Button title="Load More" onClick={loadMorePosts} />
      )}
      {/* Shows 'Load more' button if the number of selected posts is less than the total number of posts available */}
      <Footer></Footer>
    </main>
  );
}
