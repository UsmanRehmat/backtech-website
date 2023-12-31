import React from "react";
import { Metadata } from "next";

import "@styles/fonts.css";
import "@styles/bootstrap.css";
import "@styles/normalize.css";
import "@styles/global.css";

import { CLOUDFLARE_BEACON } from "@utils/constant";
import { Header } from "@components/Header/Header";
import { Footer } from "@components/Footer/Footer";
import { QuoteProvider } from "@context/QuoteContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://kesency.com"),
  title: "BackTech Solutions",
  description:
    "A skilled team dedicated to bringing your vision and projects to life. Do you have a concept or a project in mind? We can turn it into reality for you: websites, applications, games—using custom technologies tailored to your specific needs",
  keywords: ["kesency", "digital-agency", "website", "development", "application"],
  openGraph: {
    type: "website",
    url: "https://BackTechSolutions.com/",
    title: "BackTech Solutions",
    description:
      "A skilled team dedicated to bringing your vision and projects to life. Do you have a concept or a project in mind? We can turn it into reality for you: websites, applications, games—using custom technologies tailored to your specific needs",
    siteName: "BackTech Solutions",
    images: [
      {
        url: "https://cdn.kesency.com/images/brand-logo.svg", //logo of website
      },
    ],
  },
  themeColor: "#0066ff",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body id="__next">
        <QuoteProvider>
          <Header />
          {children}
        </QuoteProvider>
        <Footer />
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={{ token: CLOUDFLARE_BEACON }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
