import * as S from "./style";
import { NavbarOptions } from "../../constants";
import Link from 'next/link';



const Menu = () => {
    return (
        <S.Base>
            <S.Navbar>
                <S.NavbarList>
                    {NavbarOptions.map(item => <S.NavbarItem key={item.id}>
                        <Link href={item.path}>
                            <S.LinkItem>
                            <S.Icon>{item.icon}</S.Icon>
                            {item.title}
                            </S.LinkItem>
                            </Link>
                    </S.NavbarItem>)}
                </S.NavbarList>
            </S.Navbar>
        </S.Base>
    )
}

export default Menu;