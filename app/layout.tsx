import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getCurrentLocale } from "@/lib/server-locale";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pitchside-press.example"),
  title: {
    default: "Pitchside Press",
    template: "%s | Pitchside Press",
  },
  description: "Blog bóng đá về chiến thuật, chuyển nhượng, tuyển trạch và phân tích trận đấu.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getCurrentLocale();

  return (
    <html lang={locale}>
      <body>
        <div className="relative">
          <SiteHeader locale={locale} />
          <main className="page-shell py-6 sm:py-8">{children}</main>
          <SiteFooter locale={locale} />
        </div>
      </body>
    </html>
  );
}
