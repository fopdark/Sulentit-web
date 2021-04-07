import React from "react";
import Header from "./header/header";
import styled from "styled-components";
import Program from "./program/program";
import Video from "./video/video";
import Number from "./number/number";
import News from "./news/news";
import Footer from "./footer/footer";

const StyledHomePage = styled.div`
    font-size: 12px;
    overflow: hidden;
`

function HomePage() {
    return(
        <StyledHomePage>
            <Header></Header>
            <Program></Program>
            <Video></Video>
            <Number></Number>
            <News></News>
            <Footer></Footer>
        </StyledHomePage>
    )
}
export default HomePage;