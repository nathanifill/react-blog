import styles from "../styles/Footer.module.css";
import Link from "next/link";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import {
  FaFacebook as FacebookIcon,
  FaTwitter as TwitterIcon,
  FaLinkedin as LinkedInIcon,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { Router, useRouter } from "next/router";

function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.legal}>
        <nav className={styles.nav}>
          <Logo grayscale="true" />
          <Menu legal />
        </nav>
        <div className={styles.socials}>
          <IconContext.Provider
            value={{ size: "2em", className: "react-icons" }}
          >
            <a href="https://www.facebook.com/nathanifill">
              <FacebookIcon />
            </a>
            <a href="https://www.twitter.com/nathanifill">
              <TwitterIcon />
            </a>
            <a href="https://www.linkedin.com/in/nathanifill">
              <LinkedInIcon />
            </a>
          </IconContext.Provider>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
