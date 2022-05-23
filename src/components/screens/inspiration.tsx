import Header from "components/layout/Header/Header";
import Number from "components/ui/Number/Number";
import News from "components/ui/News/News";
import Footer from "components/layout/Footer/Footer";
import Movie from "components/ui/Movie";

function Inspiration() {
  return (
    <div>
      <Header title="nguồn cảm hứng tư duy thế kỷ 21"></Header>
      <Movie></Movie>
      <News></News>
      <Number></Number>
      <Footer></Footer>
    </div>
  );
}

export default Inspiration;
