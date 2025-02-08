import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from '@/redux/provider';
import { Toaster } from "react-hot-toast";
import MuiThemeProvider from "@/components/MuiThemeProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Frontend Test",
  description: "Frontend Test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: poppins.style.fontFamily }}>
        <Toaster position="top-right" />
        <MuiThemeProvider>
          <ReduxProvider>
            {children}
          </ReduxProvider>
        </MuiThemeProvider>
      </body>
    </html>
  );
}
