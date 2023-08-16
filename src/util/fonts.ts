import { NextFont } from "next/dist/compiled/@next/font";
import { Mulish, Work_Sans } from "next/font/google";

export const workSans: NextFont = Work_Sans({ subsets: ["latin"] });
export const mulish: NextFont = Mulish({
  subsets: ["latin"],
  style: ["italic", "normal"],
});
