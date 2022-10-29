import styles from "../styles/BlogCardGrid.module.css";

function BlogCardGrid(props) {
  return <div className={styles.container}>{props.children}</div>;
}

export default BlogCardGrid;
