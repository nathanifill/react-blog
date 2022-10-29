import styles from "../../styles/BlogPost.module.css";
import { GraphQLClient, gql } from "graphql-request";
import { format } from "date-fns";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const hygraph = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cl9k5hy8q2x8b01t85soof167/master"
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
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

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await hygraph.request(SLUGLIST);
  console.log("SLUGLIST", posts);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await hygraph.request(QUERY, { slug });
  const post = data.post;

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

function BlogPost({ post }) {
  const [documentTitle, setDocumentTitle] = useDocumentTitle(post.title);

  const datePublished = new Date(post.datePublished);
  console.log(datePublished);

  return (
    <main className={styles.blogpost}>
      <Navigation />
      <picture className={styles.picture}>
        <img src={post.coverImage.url} className={styles.coverimage} alt={post.title}/>
      </picture>
      <h1 className={styles.title}>{post.title}</h1>
      {/* prettier-ignore */}
      <p className={styles.datepublished}>Published on {format(datePublished, "d MMMM yyyy")} by {post.author.name}</p>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      ></div>
      <Footer />
    </main>
  );
}

export default BlogPost;
