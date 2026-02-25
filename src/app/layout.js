import { Poppins } from "next/font/google";
import "./globals.css";
import ScrollAnimationProvider from "@/components/ScrollAnimationProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "BlendWise Solutions | Web Design & Development Agency",
  description:
    "BlendWise Solutions offers professional web design, development, and branding services. Transform your online presence with custom websites, SEO, and digital solutions tailored to your business.",
  keywords: [
    "web design",
    "web development",
    "branding",
    "digital agency",
    "SEO",
    "custom websites",
    "BlendWise Solutions",
  ],
  authors: [{ name: "BlendWise Solutions" }],
  creator: "BlendWise Solutions",
  metadataBase: new URL("https://blendwisesolutions.com"),
  icons: {
    icon: "/logo/blend wise fav.png",
    shortcut: "/logo/blend wise fav.png",
    apple: "/logo/blend wise fav.png",
  },
  openGraph: {
    title: "BlendWise Solutions | Web Design & Development Agency",
    description:
      "Professional web design, development, and branding services. Transform your online presence with BlendWise Solutions.",
    url: "https://blendwisesolutions.com",
    siteName: "BlendWise Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlendWise Solutions | Web Design & Development Agency",
    description:
      "Professional web design, development, and branding services. Transform your online presence with BlendWise Solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <ScrollAnimationProvider>
          {children}
        </ScrollAnimationProvider>
      </body>
    </html>
  );
}
