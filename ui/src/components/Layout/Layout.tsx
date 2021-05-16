import Head from 'next/head'
import Header from "../Header";
import Menu from "../Menu";
import * as S from "./style";

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>To Do</title>
            </Head>
            <S.HeaderContainer>
                <Header />
            </S.HeaderContainer>
            <S.Main>
                <Menu />
                <S.Container>
                    {children}
                </S.Container>
            </S.Main>
        </div>
    )
}

export default Layout;