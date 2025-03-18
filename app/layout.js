import { Inter } from "next/font/google";
import "./globals.css";
import ClientWalletProvider from "./providers/WalletProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Solana Wallet App",
  description: "A simple Solana wallet integration app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientWalletProvider>{children}</ClientWalletProvider>
      </body>
    </html>
  );
}
