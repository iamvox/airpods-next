import "../public/globals.css";
import localFont from "@next/font/local";

const SF_Pro_Display = localFont({
  variable: "--sfprodisplay",

  src: [
    {
      path: "../public/fonts/display/SF-Pro-Display-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/display/SF-Pro-Display-Ultralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/display/SF-Pro-Display-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/display/SF-Pro-Display-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/display/SF-Pro-Display-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/display/SF-Pro-Display-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/display/SF-Pro-Display-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/display/SF-Pro-Display-Heavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/display/SF-Pro-Display-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
});

const SF_Pro_Text = localFont({
  variable: "--sfprotext",
  src: [
    {
      path: "../public/fonts/text/SF-Pro-Text-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/text/SF-Pro-Text-Ultralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/text/SF-Pro-Text-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/text/SF-Pro-Text-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/text/SF-Pro-Text-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/text/SF-Pro-Text-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/text/SF-Pro-Text-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/text/SF-Pro-Text-Heavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/text/SF-Pro-Text-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${SF_Pro_Text.variable} ${SF_Pro_Display.variable}`}
    >
      <head />
      <body>{children}</body>
    </html>
  );
}
