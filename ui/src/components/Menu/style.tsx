import styled from "styled-components";

export const Base = styled.div`
    width: 20vw;
    background: cadetblue;
    color: white;
    height: 90vh;
    margin: 5px 5px 0px 0;
`;

export const Navbar = styled.nav`
    font-size: 24px;
`;

export const NavbarList = styled.ul`
    padding: 10px;
`;

export const NavbarItem = styled.li`
    padding: 10px;

    &:hover {
        background: #38999c;
        font-weight: 500;
    }
`;

export const LinkItem = styled.span`
    display: flex;
    align-items: center;
`;

export const Icon = styled.span`
    margin: 10px;
    font-size: 20px;
    display: flex;
`;