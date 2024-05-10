import { AppNavHeader } from "@/components/ui/AppNavHeader";
import { APP_METADATA } from "@/constants";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./global.scss";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  ...APP_METADATA,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <AppNavHeader />
        {children}
      </body>
    </html>
  );
}
