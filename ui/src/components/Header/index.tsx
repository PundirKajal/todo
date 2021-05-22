import { IoIosMenu } from "react-icons/io";
import * as S from "./styles";

const Header = () => {
    return (
        <S.Base>
            <S.Button>
                <IoIosMenu style={{
                    width: '2rem',
                    height: '2rem',
                }} />
            </S.Button>

            <S.Label style={{
                }}>
                    ToDo
                </S.Label >
        </S.Base>
    )
}

export default Header;