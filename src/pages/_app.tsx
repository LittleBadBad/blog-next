import App from "next/app"
import Head from "next/head"
import "../assets/css/style.scss"
import {createContext} from "react"
import {getStrapiMedia} from "../lib/media"
import {single} from "strapi-common-api"
import {Global} from "../types/Global";

// Store Strapi Global object in context
export const GlobalContext = createContext<Global["attributes"]>({siteDescription: "", siteName: ""})

const MyApp = ({Component, pageProps}: { Component, pageProps: { global: Global } }) => {
    const {global} = pageProps

    return (
        <>
            <Head>
                <link rel="shortcut icon" href={getStrapiMedia(global.attributes.favicon?.data)}/>
                <title>next blog test</title>
            </Head>
            <GlobalContext.Provider value={global.attributes}>
                <Component {...pageProps} />
            </GlobalContext.Provider>
        </>
    )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
    // Calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(ctx)
    // Fetch global site settings from Strapi
    const global = await single.get<Global>("global", {populate: ["favicon", "defaultSeo"]}).then(r => r.data)
    // Pass the data to our page via props
    return {...appProps, pageProps: {global}}
}

export default MyApp
