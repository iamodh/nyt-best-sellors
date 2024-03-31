import styles from "./about.module.css";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className={styles.container}>
      <h1>ABOUT US</h1>
      <p>
        <span>W</span>elcome to the official explorer for The New York Times
        Best Seller list explorer.
      </p>
      <p>We hope you enjoy your stay!</p>
    </div>
  );
}
