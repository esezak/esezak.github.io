// Root layout — wraps the entire app with providers, global styles, header, and footer.
import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import { I18nProvider } from "@/context/I18nContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/config/site";
import "@/styles/globals.css";
import "@/styles/layout.css";
import "@/styles/sections.css";
import "@/styles/components.css";

/** SEO metadata for the root layout. */
export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
};

/**
 * Root layout component that provides theme/i18n context, renders the
 * sticky header, page content, and footer.
 *
 * @param props - Contains `children` rendered as the page body.
 * @returns The root HTML structure.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <I18nProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
