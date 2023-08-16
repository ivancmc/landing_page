import { workSans } from "@/util/fonts";
import type { Metadata } from "next";
import { Providers } from "./providers";

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
