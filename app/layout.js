import "./globals.css";

export const metadata = {
  title: "AliMo Bakery | Freshly Baked, Reliably Delivered",
  description: "AliMo Bakery manufactures and distributes quality bakery products."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}