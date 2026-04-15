import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "BarberShop - Premium Grooming Services",
  description:
    "Experience luxury barber services in a sophisticated environment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body
        className="min-h-full flex flex-col bg-[#0B0B0B] font-poppins"
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
