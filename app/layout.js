import { Manrope } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./_styles/global.css";
import { LazyMotion, domAnimation } from "motion/react";
import "react-toastify/dist/ReactToastify.css";
import Providers from "./_components/Providers";
import Container from "./_components/Container";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title: {
    template: "%s / Audiophile",
    default: " Welcome / Audiophile",
  },
  description:
    "Shop premium headphones, speakers, and earphones at unbeatable quality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className}  min-h-screen flex flex-col antialiased  `}
      >
        <SpeedInsights />
        <LazyMotion features={domAnimation} strict>
          <Providers>
            <Container>
              <main className="relative flex-grow lg:overflow-hidden">
                {children}
              </main>
            </Container>
          </Providers>
        </LazyMotion>
      </body>
    </html>
  );
}
