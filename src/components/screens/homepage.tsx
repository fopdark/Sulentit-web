import React from "react";
import Header from "components/layout/header/header";
import Program from "components/ui/program/program";
import Video from "components/ui/video/video";
import Number from "components/ui/number/number";
import News from "components/layout/footer/footer";
import Footer from "components/layout/footer/footer";

function HomePage() {
  return (
    <div>
      <Header isCarousel></Header>
      <Program></Program>
      <Video></Video>
      <Number></Number>
      <News></News>
      <Footer></Footer>
    </div>
  );
}
export default HomePage;
