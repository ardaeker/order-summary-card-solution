import "@/styles/tailwind.css";
import type { Metadata } from "next";
import { redHatDisplay } from "@/assets/fonts/red-hat-display";
import openGraphImage from "@/public/previews/desktop-preview.png";

export const metadata: Metadata = {
  title: "Arda Eker - Order Summary Card Solution",
  description:
    "Hello, I'm Arda Eker. This website showcases my solution to the order summary card challenge on frontend mentor.",
  metadataBase: new URL(
    "https://ardaeker-order-summary-card-solution.vercel.app",
  ),
  openGraph: {
    type: "website",
    url: "/",
    title: "Arda Eker - 3 Column Preview Card Component Solution",
    description:
      "Hello, I'm Arda Eker. This website showcases my solution to the order summary card challenge on frontend mentor.",
    images: [
      {
        url: openGraphImage.src,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={redHatDisplay.className}>{children}</body>
    </html>
  );
}
