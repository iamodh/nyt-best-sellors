import { Suspense } from "react";
import Books from "../../../../apis/Books";
import { getLists } from "../../../../apis/Lists";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const list = id.replaceAll("-", " ").toUpperCase();
  return {
    title: list,
  };
}

export default function Detail({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading Books...</h1>}>
        <Books id={id} />
      </Suspense>
    </div>
  );
}
