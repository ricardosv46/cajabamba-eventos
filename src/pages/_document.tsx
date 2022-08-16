import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html>
      <Head>
        <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-P4TRZH0GH4"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-P4TRZH0GH4');
              `,
            }}
          />
      </Head>
      <body>
        <div id="portal" />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
