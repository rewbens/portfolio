import "../globals.css";

export const metadata = {
  title: "Benjamins portfolio",
  description: "Generated using Next.js, Sanity.io & TS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
