import Script from "next/script"

export default function Analytics() {
    return (
        <>
            {/* Google tag (gtag.js) */}
            <Script strategy="afterInteractive" 
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRAKING}`} />
            <Script id="google-analytics"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('consent', 'default',{
                'analytics_storage': 'denied'
            })
  
            gtag('config', '${process.env.NEXT_PUBLIC_GA_TRAKING}', {
                page_path: window.location.pathname,
            });
            `
                }}
            />
        </>
    )
}