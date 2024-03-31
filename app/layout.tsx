import Header from "../components/Header";
import "./global.css";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | NYT Best Sellers",
    default: "Loading...",
  },
  description: "New York Times Best Sellers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
