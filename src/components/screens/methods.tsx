import Header from "components/layout/Header/Header";
import Number from "components/ui/Number/Number";
import News from "components/ui/News/News";
import Footer from "components/layout/Footer/Footer";
import Thought21 from 'components/ui/Thought21/Thought21';
import NecessarySkill from 'components/ui/NecessarySkill/NecessarySkill';

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