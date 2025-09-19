// app/layout.tsx
import "./globals.css";
import { Kulim_Park } from "next/font/google";

const kulim = Kulim_Park({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={kulim.className}>
        
        {children}
<div id="portal-root"></div>
      </body>
    </html>
  );
}
