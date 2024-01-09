import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Food Ordering App",
  description: "Order food any time any where",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="border mx-auto max-w-4xl">{children}</main>
      </body>
    </html>
  );
}
