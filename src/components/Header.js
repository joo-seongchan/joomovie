import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../styles/globalStyle";
import { useState } from "react";

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
  background-color: ${(props) => props.bgColor};
  transition: 0.5s;
  z-index: 9;
  @media screen and (max-width: 500px) {
    padding: ${mainStyle.moPadding};
  }
`;
const Logo = styled.h3`
  font-size: 28px;
  font-weight: 800;
  z-index: 10;
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
  @media screen and (max-width: 500px) {
    display: block;
  }
`;
const MoMenuWrap = styled.ul`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  position: absolute;
  top: 0;
  left: ${(props) => props.left};
  transition: 0.5s;
  /* display: none; */
`;
const MoMenu = styled.li`
  width: 100%;
  height: 50%;

  border: 1px solid gray;
  a {
    display: block;
    width: 100%;
    height: 100%;
    font-size: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CloseBtn = styled.li`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
`;

export const Header = () => {
  const [bg, setBg] = useState("");
  const [left, setLeft] = useState("100%");

  const scrollEvent = () => {
    const sct = window.pageYOffset;
    const a = document.querySelector(".header").offsetHeight;
    console.log(a);
    if (sct > 500) {
      setBg("#1d1d1d");
    } else {
      setBg("transparent");
    }
  };

  window.addEventListener("scroll", scrollEvent);

  const handleClose = () => setLeft("100%");

  return (
    <SHeader className="header" bgColor={bg}>
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
        <Icon onClick={() => setLeft("0")}>
          <FontAwesomeIcon icon={faBars} />
        </Icon>
      </MenuWrap>
      <MoMenuWrap left={left}>
        <CloseBtn onClick={handleClose}>
          <FontAwesomeIcon icon={faClose} />
        </CloseBtn>
        <MoMenu onClick={handleClose}>
          <Link to={"/"}>Home</Link>
        </MoMenu>
        <MoMenu onClick={handleClose}>
          <Link to={"search"}>Search</Link>
        </MoMenu>
      </MoMenuWrap>
    </SHeader>
  );
};
