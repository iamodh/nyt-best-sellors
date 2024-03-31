import { Suspense } from "react";
import Lists from "../../apis/Lists";

export const metadata = {
  title: "Home",
};

export default async function Home() {
  return (
    <div>
      <Suspense fallback={<h1>Loading Categories...</h1>}>
        <Lists />
      </Suspense>
    </div>
  );
}
