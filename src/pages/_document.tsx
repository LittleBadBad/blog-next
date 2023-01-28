import Document, {Head, Html, Main, NextScript} from "next/document"

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Staatliches"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
                    />
                    <script
                        async
                        src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js"
                    />
                    <script
                        async
                        src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js"
                    />
                    <script
                        async
                        src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js"
                    />
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
