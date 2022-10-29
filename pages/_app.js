import "../styles/globals.css";
import "../styles/design_tokens.css";

export const STARTING_NUMBER_OF_POSTS = 7;
// The maximum number of posts the home page should show before showing the 'Load More' button
// This includes the post linked in the hero image so for a hero and three blog cards, this should be '4'

export const BLOG_NAME = "The Running Dog Blog";
// Name of the blog

export const TITLE_SEPARATOR = "|";
// How the blog name is separated from the page title in the document title, e.g. "|" or "-". Spaces are added automatically

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
