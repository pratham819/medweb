import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Synergia Sciences – Building Sustainable Partnerships",
  description:
    "Synergia Sciences is an Indian manufacturer of active ingredients for household insecticides and animal health for global markets. Building sustainable partnerships with extensive product development, manufacturing and quality assurance experience.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Synergia Sciences Favicon */}
        <link
          rel="icon"
          href="https://i0.wp.com/synergiasciences.com/wp-content/uploads/2023/03/Synergia-Sciences-Symbol.png?fit=32%2C32&ssl=1"
          sizes="32x32"
        />
        <link
          rel="apple-touch-icon"
          href="https://i0.wp.com/synergiasciences.com/wp-content/uploads/2023/03/Synergia-Sciences-Symbol.png?fit=177%2C180&ssl=1"
        />
        {/* Google Fonts — Manrope + Open Sans via CDN */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
