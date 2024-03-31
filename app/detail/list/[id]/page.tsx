import { Suspense } from "react";
import Books from "../../../../apis/Books";

export default function Detail({ params: { id } }) {
  console.log(id);
  return (
    <div>
      <Suspense fallback={<h1>Loading Books...</h1>}>
        <Books id={id} />
      </Suspense>
    </div>
  );
}
