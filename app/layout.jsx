import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetBrainsmono = JetBrains_Mono({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsmono"
});

export const metadata = {
  title: "Jutur Abhishake",
  description: "It's my own personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrainsmono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        </body>
    </html>
  );
}

