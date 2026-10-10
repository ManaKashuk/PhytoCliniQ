import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PhytoCliniq | Botanical Evidence & Claims-Risk Reviews",
  description: "Expert-led scientific evidence and preliminary claims-risk reviews for botanical food, wellness, and supplement brands. Explore the 7-day Claim-Risk Snapshot.",
  alternates: { canonical: "https://www.phytocliniq.com/" },
  openGraph: {
    title: "PhytoCliniq | Botanical Evidence & Claims-Risk Reviews",
    description: "Scientific evidence assessment and claims-risk review for botanical brands.",
    url: "https://www.phytocliniq.com/",
    siteName: "PhytoCliniq",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
