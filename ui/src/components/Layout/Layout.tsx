import Head from 'next/head'
import Header from "../Header";

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>To Do</title>
            </Head>
            <header style={{
                background: 'cadetblue',
                height: "4rem",
                width: "100vw"
            }}>
                <Header/>
            </header>
            <main>{children}</main>
        </div>
    )
}

export default Layout;