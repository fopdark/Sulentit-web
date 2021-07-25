import React from 'react';
import Header from "../mediumComponents/header/header";
import Program from "../mediumComponents/program/program";
import Video from "../mediumComponents/video/video";
import Number from "../mediumComponents/number/number";
import News from "../mediumComponents/news/news";
import Footer from "../mediumComponents/footer/footer";
import Thought21 from '../mediumComponents/thought21/thought21';
import NecessarySkill from '../mediumComponents/necessarySkill/necessarySkill';

function Method() {
    return (
        <div>
            <Header title="phương pháp học tư duy thế kỷ 21"></Header>
            <Thought21></Thought21>
            <NecessarySkill></NecessarySkill>
            <News></News>
            <Number></Number>
            <Footer></Footer>
        </div>
    )
}

export default Method;