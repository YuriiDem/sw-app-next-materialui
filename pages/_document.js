import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charset="utf-8" />
                    <link rel="icon" href="/favicon.svg" />
                    {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
                    <meta name="theme-color" content="#000000" />
                    <meta
                        name="description"
                        content="Star Wars App for QuartSoft by Yurii Dem"
                    />
                    <link rel="apple-touch-icon" href="/logo192.png" />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
