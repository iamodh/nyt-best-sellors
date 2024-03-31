// https://books-api.nomadcoders.workers.dev/list?name=hardcover-fiction

import { API_URL } from "./constants";

export async function getBooks(id: string) {
  console.log(`${API_URL}?name=${id}`);
  const response = await fetch(`${API_URL}/list?name=${id}`);
  return response.json();
}

export default async function Books({ id }: { id: string }) {
  const res = await getBooks(id);
  console.log(res.results);
  return (
    <ul>
      {res.results.books.map((book) => (
        <li>{book.title}</li>
      ))}
    </ul>
  );
}
