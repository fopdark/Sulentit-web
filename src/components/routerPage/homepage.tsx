import React from "react";
import Header from "../mediumComponents/header/header";
import Program from "../mediumComponents/program/program";
import Video from "../mediumComponents/video/video";
import Number from "../mediumComponents/number/number";
import News from "../mediumComponents/news/news";
import Footer from "../mediumComponents/footer/footer";




function HomePage() {
    return (
        <div>
            <Header isCarousel ></Header>

            <Program></Program>
            <Video></Video>
            <Number></Number>
            <News></News>
            <Footer></Footer>
        </div>
    )
}
export default HomePage;