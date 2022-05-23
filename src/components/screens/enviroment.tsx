import Header from "components/layout/Header/Header";
import Number from "components/ui/Number/Number";
import News from "components/ui/News/News";
import Footer from "components/layout/Footer/Footer";
import ModernTechnology from 'components/ui/ModernTechnology';

function Environments() {
    return (
        <div className="enviroment">
            <Header title="môi trường học thế kỷ 21"></Header>
            <ModernTechnology></ModernTechnology>
            <News></News>
            <Number></Number>
            <Footer></Footer>
        </div>
    )
}

export default Environments