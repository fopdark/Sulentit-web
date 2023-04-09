import React from "react";
import Header from "../layout/header/header";
import Number from "../ui/number/number";
import News from "../ui/news/news";
import Footer from "../layout/footer/footer";
import Movie from "../ui/movie";

function Inspiration() {
  return (
    <div>
      <Header title="nguồn cảm hứng tư duy thế kỷ 21"></Header>
      {/* <Thought21></Thought21> */}
      {/* <ModernTechnology></ModernTechnology> */}
      {/* <NecessarySkill></NecessarySkill> */}
      {/* <BYOD></BYOD> */}
      {/* <Address></Address> */}
      {/* <DropDown title="chọn thành phố"
				lists={['Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng']}>
			</DropDown> */}
      <Movie></Movie>
      <News></News>
      <Number></Number>
      <Footer></Footer>
    </div>
  );
}

export default Inspiration;
