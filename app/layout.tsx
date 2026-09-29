import localFont from "next/font/local";
import "./globals.css";

export const poppins = localFont({
  src: "./fonts/Poppins-SemiBold.woff2",
  variable: "--font-poppins",
  weight: "600",
});

export const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Regular.woff2",
      weight: "400",
    },
    {
      path: "./fonts/Satoshi-Medium.woff2",
      weight: "500",
    },
  ],
  variable: "--font-satoshi",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={satoshi.className}>{children}</body>
    </html>
  );
}
