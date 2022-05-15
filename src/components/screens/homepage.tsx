import React from "react";
import Header from "../layout/header/header";
import Program from "../ui/program/program";
import Video from "../ui/video/video";
import Number from "../ui/number/number";
import News from "../ui/news/news";
import Footer from "../layout/footer/footer";




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