import React from "react";
import styled from "styled-components";
import Logo from "../../Logo/Logo";
import Container from "../../../hoc/layouts/elements/Container";
import NavItems from "../NavItems/NavItems";

const Navbar = () => {
  return (
    <FixedWrapper>
      <Container>
        <Wrapper>
          <Logo />
          <NavItems />
        </Wrapper>
      </Container>
    </FixedWrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FixedWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%
    height: 6rem;
   
    background-color: var(--color-main);
    padding: 0rem 2rem;
`;

export default Navbar;
