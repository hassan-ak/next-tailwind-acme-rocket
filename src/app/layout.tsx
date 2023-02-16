import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
        <Header />
        <main className="widescreen:section-min-height tallscreen:section-min-height mx-auto max-w-4xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
