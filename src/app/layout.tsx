import FooterComponent from "@/components/FooterComponent";
import "./globals.css";
import { Providers } from "@/components/ThemeProvider";
import GalleryHeader from "@/components/HeaderComponent";
import { ReactNode } from "react";

export const metadata = {
  title: "frontend hiking task",
  description:
    "A modern, responsive image gallery built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`font-yekan antialiased`}>
        <Providers>
          <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="flex flex-col flex-1">
              <GalleryHeader />
              <main className="flex-1 container max-w-4xl mx-auto">{children}</main>
              {modal}
              <FooterComponent />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
