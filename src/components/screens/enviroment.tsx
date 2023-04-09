import React from 'react'
import Header from "../layout/header/header";
import Number from "../ui/number/number";
import News from "../ui/news/news";
import Footer from "../layout/footer/footer";
import Thought21 from '../ui/thought21/thought21';
import NecessarySkill from '../ui/necessarySkill/necessarySkill';
import ModernTechnology from '../ui/modernTechnology';
import BYOD from '../ui/programBYOD';

function Environments() {
    return (
        <div className="enviroment">
            <Header title="môi trường học thế kỷ 21"></Header>
            {/* <Thought21></Thought21> */}
            <ModernTechnology></ModernTechnology>
            {/* <NecessarySkill></NecessarySkill> */}
            {/* <BYOD></BYOD> */}
            <News></News>
            <Number></Number>
            <Footer></Footer>
        </div>
    )
}

export default Environments