import { Suspense } from "react";
import Books from "../apis/Books";
import Lists from "../apis/Lists";

export default async function Home() {
  return (
    <div>
      <Suspense fallback={<h1>Loading Categories...</h1>}>
        <Lists />
      </Suspense>
    </div>
  );
}
