import { API_URL } from "./constants";
import styles from "./books.module.css";

export async function getBooks(id: string) {
  const response = await fetch(`${API_URL}/list?name=${id}`);
  return response.json();
}

export default async function Books({ id }: { id: string }) {
  const res = await getBooks(id);
  return (
    <ul className={styles.container}>
      {res.results.books.map((book) => (
        <li>
          <div
            className={styles.bookCover}
            style={{ backgroundImage: `url(${book.book_image})` }}
          ></div>
          <div className={styles.bookInfo}>
            <h3>{book.title}</h3>
            <h4>{book.author}</h4>
            <a href={book.amazon_product_url} target="_blank">
              Buy Now &rarr;
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}
