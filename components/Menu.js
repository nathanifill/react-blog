import styles from "../styles/Menu.module.css";
import Link from "next/link";

function Menu(props) {
  function getYear() {
    const d = new Date();
    const thisYear = d.getFullYear();

    return thisYear;
  }

  function StandardMenu() {
    return (
      <menu className={styles.menustandard}>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/">
          <li>Healthy Living</li>
        </Link>
        <Link href="/">
          <li>Travel</li>
        </Link>
        <Link href="/">
          <li>Food & Drink</li>
        </Link>
        <Link href="/">
          <li>Controversial</li>
        </Link>
      </menu>
      // keep this simple and put in a blog title
    );
  }

  function LegalMenu() {
    return (
      <menu className={styles.menulegal}>
        <Link href="/">
          <li>Contact</li>
        </Link>
        <Link href="/">
          <li>Privacy Policy</li>
        </Link>
        <Link href="/">
          <li>Terms and Conditions</li>
        </Link>
        <li className={styles.notlink}>&copy; {getYear()}</li>
      </menu>
    );
  }

  return (
    <>
      {!props.legal ? <StandardMenu /> : <LegalMenu />}
      {/* If prop.legal not set, show standard menu, otherwise show legal menu */}
    </>
  );
}

export default Menu;
