import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono, Archivo } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LenisProvider } from "@/components/providers/LenisProvider";
import PageTransition from "@/components/layout/Pagetransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const jetbrainsMonoJetbrainsMono = JetBrains_Mono({
  subsets: [
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "latin",
    "latin-ext",
    "vietnamese",
  ],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
});

const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
});
const plusJakartaSansPlusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["cyrillic-ext", "latin", "latin-ext", "vietnamese"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Mnmlst — Full-Stack Developer",
  description: "Full-stack developer building clean, fast digital products.",
  openGraph: {
    title: "Mnmlst",
    description: "Full-stack developer building clean, fast digital products.",
    url: "https://mnmlst.dev", //TBD
    siteName: "Mnmlst",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        plusJakartaSansPlusJakartaSans.variable,
        archivo.variable,
        jetbrainsMonoJetbrainsMono.variable,
      )}
    >
      <body className="bg-dark-bg text-dark-text min-h-screen">
        <ThemeProvider>
          <LenisProvider>
            <Navbar />
            <PageTransition>{children}</PageTransition>
            <Footer />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
