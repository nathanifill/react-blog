import Link from "next/link";
import styles from "../styles/BlogCard.module.css";

function BlogCard(props) {
  return (
    <Link href={"/posts/" + props.slug}>
      <article className={styles.card}>
        <div className={styles.content}>
          <img
            src={props.coverImage}
            alt={props.title}
            title={props.title}
            // prettier-ignore
            className={styles.coverimage}
          />
          <p className={styles.category}>
            <span className={styles.lines}>{props.category}</span>
          </p>
          <h3 className={styles.title}>{props.title}</h3>
        </div>
        <img
          src={props.author.profileImage.url}
          alt={props.author.name}
          title={props.author.name}
          // prettier-ignore
          className={styles.profileimage}
        />
      </article>
    </Link>
  );
}

export default BlogCard;
