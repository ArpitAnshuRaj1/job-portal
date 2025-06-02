import React from "react";
import styles from "../styles/Footer.module.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3>About Us</h3>
          <p>
            Arpit Anshu Raj, a MERN stack developer, connects job seekers with employers while creating seamless career opportunities. Passionate about building impactful web applications since 2023.
          </p>
        </div>

        <div className={styles.column}>
          <h3>Contact Info</h3>
          <p>Email: arpitanshuraj1@gmail.com</p>
          <p>Phone: +91 9234299843</p>
          <p>Location: India</p>
        </div>

        <div className={styles.column}>
          <h3>Follow Me</h3>
          <div className={styles.socialIcons}>
            <a href="" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/arpit-anshu-raj-014164242/" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>&copy; 2025 Arpit Anshu Raj - MERN Stack Developer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
