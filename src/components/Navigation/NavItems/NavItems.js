import React from "react";
import NavItem from "./NavItem/NavItem";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 32px;
  margin-top: 5px;
`;

const NavItems = () => {
  return (
    <Nav>
      <Ul>
        <NavItem>Home</NavItem>
        <NavItem>Services</NavItem>
        <NavItem>Products</NavItem>
      </Ul>
    </Nav>
  );
};
export default NavItems;
