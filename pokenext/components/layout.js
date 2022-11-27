import Header from "./header";
import Footer from "./footer";

import Head from "next/head";

export default function Layout ({children}) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/images/favicon.ico" />
                <title>PokeNext</title>
            </Head>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    )
}