import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "OUNJEEH Kulikuli | Good Food. Better Living.",
  description: "Meet OUNJEEH Crunchy Kuli-Kuli, a Nigerian groundnut snack made for a satisfying crunch. Explore the product, see how it's made and enquire on WhatsApp.",
  icons: { icon: "/ounjeeh-logo.png" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
