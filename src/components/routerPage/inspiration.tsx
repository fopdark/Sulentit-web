import React from 'react';
import Header from "../mediumComponents/header/header";
// import Program from "../mediumComponents/program/program";
// import Video from "../mediumComponents/video/video";
import Number from "../mediumComponents/number/number";
import News from "../mediumComponents/news/news";
import Footer from "../mediumComponents/footer/footer";
// import Thought21 from '../mediumComponents/thought21/thought21';
// import NecessarySkill from '../mediumComponents/necessarySkill/necessarySkill';
// import ModernTechnology from '../mediumComponents/modernTechnology';
// import BYOD from '../mediumComponents/programBYOD';
import Movie from '../mediumComponents/movie';
import Address from '../smallComponents/address';
import DropDown from '../smallComponents/dropDown';

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
    )
}

export default Inspiration;