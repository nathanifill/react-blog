import styles from "../styles/Navigation.module.css";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import Button from "../components/Button";
import Link from "next/link";

function Navigation() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Logo />
        <Menu />
        <Button cta title="SUBSCRIBE" />
      </nav>
    </header>
  );
}

export default Navigation;
