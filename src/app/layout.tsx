import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";

export const metadata = {
  title: "Phytocliniq",
  description: "Evidence Made Clear",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
