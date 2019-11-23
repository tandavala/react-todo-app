import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.div`
  padding: 1rem;
  color: var(--color-white);
  font-size: 1.2rem;
  height: 100%;
  align-items: center;
  padding: 1rem;
  font-weight: 700;
`;
const Logo = () => {
  return (
    <LogoWrapper>
      <h3>Productivity</h3>
    </LogoWrapper>
  );
};

export default Logo;
