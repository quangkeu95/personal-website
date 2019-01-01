import React, { Component } from "react";
import styled from "styled-components";
import headerBackground from "./quang_sapa.jpg";

import NavBar from "./NavBar";

const StyledHeader = styled.header`
  height: 100vh;
  width: 100%;
  background-image: url(${headerBackground});
  background-color: #161415;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  text-align: center;
  overflow: hidden;
`;

const StyledBannerText = styled.div`
  color: #000;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  display: inline-block;
  width: 85%;
  height: 60%;
  margin-top: 50px;
`;

export default class Header extends Component {
  render() {
    return (
      <StyledHeader id="home">
        <NavBar />
        <StyledBannerText />
      </StyledHeader>
    );
  }
}
