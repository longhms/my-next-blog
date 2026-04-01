import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pitchside-press.example"),
  title: {
    default: "Pitchside Press",
    template: "%s | Pitchside Press",
  },
  description:
    "A soccer editorial blog covering tactics, transfers, scouting, and matchday analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="relative">
          <SiteHeader />
          <main className="page-shell py-6 sm:py-8">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
