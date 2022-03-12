// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                {/* Font */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                {/* eslint-disable-next-line @next/next/no-page-custom-font */}
                <link
                    href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&family=Inconsolata:wght@300&display=swap"
                    rel="stylesheet"
                />
                {/* Google Tag Manager */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-LLG31H2P56"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-LLG31H2P56');
                `,
                    }}
                />
                {/* End Google Tag Manager */}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}