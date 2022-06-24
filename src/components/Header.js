import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../styles/globalStyle";

const SHeader = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 80px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;
const Logo = styled.h3`
  font-size: 28px;
  font-weight: 800;
  a {
    color: ${mainStyle.mainColor};
  }
`;
const MenuWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Menu = styled.li`
  margin-left: 100px;
  font-size: 18px;
  font-weight: 500;
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to={"/"}>JooMovie</Link>
      </Logo>

      <MenuWrap>
        <Menu>
          <Link to={"/"}>Home</Link>
        </Menu>
        <Menu>
          <Link to={"search"}>Search</Link>
        </Menu>
      </MenuWrap>
    </SHeader>
  );
};
