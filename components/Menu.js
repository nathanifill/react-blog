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
      <div className={styles.menumain}>
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
      </div>
      // keep this simple and put in a blog title
    );
  }

  function LegalMenu() {
    return (
      <div className={styles.menu}>
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
      </div>
    );
  }

  return (
    <menu className={styles.menu}>
      {!props.legal ? <StandardMenu /> : <LegalMenu />}
      {/* If prop.legal not set, show standard menu, otherwise show legal menu */}
    </menu>
  );
}

export default Menu;
