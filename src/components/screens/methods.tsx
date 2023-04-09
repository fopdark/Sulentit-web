import React from 'react';
import Header from "../layout/header/header";
import Number from "../ui/number/number";
import News from "../ui/news/news";
import Footer from "../layout/footer/footer";
import Thought21 from '../ui/thought21/thought21';
import NecessarySkill from '../ui/necessarySkill/necessarySkill';

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