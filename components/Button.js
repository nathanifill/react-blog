import styles from "../styles/Button.module.css";

function Button(props) {
  return (
    <button className={props.cta ? styles.btnCta : styles.btn} onClick={props.onClick}>
      {props.title}
    </button>
  );
}

export default Button;
