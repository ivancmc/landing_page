import type { Metadata } from "next";
import { Mulish, Work_Sans } from "next/font/google";
import { Providers } from "./providers";

export const workSans = Work_Sans({ subsets: ["latin"] });
export const mulish = Mulish({
  subsets: ["latin"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "Landing page",
  description: "Caso de estudo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
