import Header from "components/layout/Header/Header";
import Program from "components/ui/Program/Program";
import Video from "components/ui/Video/Video";
import Number from "components/ui/Number/Number";
import News from "components/layout/Footer/Footer";
import Footer from "components/layout/Footer/Footer";

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
