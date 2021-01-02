import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import Bars from "../images/b.svg";
// import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  /* background: #000000ab; */
`;

const NavLink = css`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  color: #fff;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  /* font-style: italic; */
  font-family: "Charmonman", cursive;
`;

const MenuBars = styled.i`
  display: none;

  @media screen and (max-width: 768px) {
    background: url(${Bars});
    background-size: contain;
    height: 30px;
    width: 30px;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    transform: translate(-50%, 50%);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <Logo to="/">AG</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          Kontakt
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
