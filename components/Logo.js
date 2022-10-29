import { printIntrospectionSchema } from "graphql";
import Link from "next/link";
import styles from "../styles/Logo.module.css";
import { BLOG_NAME } from "../pages/config";

function Logo(props) {
  return (
    <Link href="/">
      <picture>
        <img
          src="/assets/logo.png"
          className={!props.grayscale ? styles.logo : styles.logogray}
          alt={BLOG_NAME}
          title={BLOG_NAME}
        />
        {/* Sets grayscale styles in props.grayscale is set */}
      </picture>
    </Link>
  );
}

export default Logo;
