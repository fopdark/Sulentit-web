import React, { useEffect } from "react";
import "styles/App.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import NavTab from "components/layout/NavTab";

function App() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 800,
    });
  });

  return (
    <div className="position-relative App">
      <NavTab></NavTab>
      {/* <HomePage></HomePage>
            <Beyond></Beyond>
            <Method></Method>
            <Environments></Environments>
            <Inspiration></Inspiration>
            <CenterAddresses></CenterAddresses>
            <Schedule></Schedule>
            <Career></Career>
            <LoginParent></LoginParent>
            <LoginStudent></LoginStudent> */}
    </div>
  );
}

export default App;
