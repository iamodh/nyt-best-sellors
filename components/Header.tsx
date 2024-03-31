"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
  return (
    <nav className={styles.container}>
      <ul>
        <li className={path === "/" ? styles.highlight : null}>
          <Link href="/">Home</Link>
        </li>
        <li className={path === "/about" ? styles.highlight : null}>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
