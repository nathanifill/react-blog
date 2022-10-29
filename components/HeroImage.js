import { printIntrospectionSchema } from "graphql";
import styles from "../styles/HeroImage.module.css";
import Link from "next/link";

function HeroImage(props) {
  return (
    <Link href={props.slug && "/posts/" + props.slug}>
      <div className={styles.container}>
        <picture>
          <img src={props.image} className={styles.hero} />
        </picture>
        <p className={styles.subtitle}>
          <span className={styles.lines}>Latest Post</span>
        </p>
        <p className={styles.title}>{props.title}</p>
      </div>
    </Link>
  );
}

export default HeroImage;
