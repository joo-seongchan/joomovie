import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../styles/globalStyle";

const SHeader = styled.div`
  width: 100%;
  /* max-width: 80%; */
  padding: ${mainStyle.padding};
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  @media screen and (max-width: 500px) {
    padding: ${mainStyle.moPadding};
  }
`;
const Logo = styled.h3`
  font-size: 28px;
  font-weight: 800;
  a {
    color: ${mainStyle.mainColor};
  }
  @media screen and (max-width: 500px) {
    font-size: 24px;
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
  @media screen and (max-width: 500px) {
    margin-left: 20px;
    display: none;
  }
`;
const Icon = styled.div`
  font-size: 28px;
  display: none;
`;
const MoMenuWrap = styled.ul`
  width: 100vw;
  height: 100vh;
  background-color: black;
  position: absolute;
  top: 0;
  right: 0;
  display: none;
`;
const MoMenu = styled.li`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  a {
    font-size: 70px;
  }
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
        <Icon>
          <FontAwesomeIcon icon={faBars} />
        </Icon>
      </MenuWrap>
      <MoMenuWrap>
        <MoMenu>
          <Link to={"/"}>Home</Link>
        </MoMenu>
        <MoMenu>
          <Link to={"search"}>Search</Link>
        </MoMenu>
      </MoMenuWrap>
    </SHeader>
  );
};
