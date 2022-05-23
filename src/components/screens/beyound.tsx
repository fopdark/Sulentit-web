import Footer from 'components/layout/Footer/Footer';
import Header from 'components/layout/Header/Header';
import News from 'components/ui/Thought21/Thought21';
import Thought21 from 'components/ui/Thought21/Thought21';
import Number from 'components/ui/Number/Number';

function Beyond() {
    return (
        <div>
            <Header title="beyound english"></Header>
            <Thought21></Thought21>
            <div className="container">
                <iframe width="100%" height="510px" src="https://www.youtube.com/embed/upRFiA5Ev7k"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            </div>
            <News></News>
            <Number></Number>
            <Footer></Footer>
        </div>
    )
}

export default Beyond;