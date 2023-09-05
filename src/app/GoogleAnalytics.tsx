//GoogleAnalytics.tsx

"use client";
import Script from "next/script";

const GoogleAnalytics = async ({ GA_TRACKING_ID }: { GA_TRACKING_ID: string }) => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-JSWRM0N14D`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-JSWRM0N14D');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;