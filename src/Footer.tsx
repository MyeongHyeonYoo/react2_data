import React from 'react'
import styled from 'styled-components'

type FooterpropsType = {
  theme : string;
};

const Footer = (p1 : FooterpropsType) => {
  const FooterBox = styled.div`
    position : absolute;
    right : 0;
    bottom : 0;
    left ; 0;
    padding : 1rem;
    background-color : ${(p2) => (p2.theme === "basic" ? "skyblue" : "yellow")};
    text-align : center;
  `;
  return <FooterBox theme={p1.theme}>React style-components Test</FooterBox>
};

export default Footer;