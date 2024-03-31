import { API_URL } from "./constants";
import styles from "./lists.module.css";
import Link from "next/link";

export async function getLists() {
  const response = await fetch(`${API_URL}/lists`);
  return response.json();
}

export default async function Lists() {
  const lists = await getLists();
  return (
    <ul className={styles.container}>
      {lists.results.map((list) => (
        <Link href={`/detail/list/${list.list_name_encoded}`}>
          <li>{list.list_name}</li>
        </Link>
      ))}
    </ul>
  );
}
