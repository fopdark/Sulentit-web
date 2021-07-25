import React, { useEffect } from 'react';
import './App.scss';
import Aos from "aos";
import "aos/dist/aos.css";
import Beyond from './components/routerPage/beyound';
import HomePage from './components/routerPage/homepage';
import Method from './components/routerPage/methods';
import Environments from './components/routerPage/enviroment';
import Inspiration from './components/routerPage/inspiration';
import CenterAddresses from './components/routerPage/centerAddress';
import Schedule from './components/routerPage/schedule';
import Career from './components/routerPage/career';
import LoginParent from './components/routerPage/login-parent';
import LoginStudent from './components/routerPage/login-student';
import NavTab from './components/mediumComponents/NavTab';

function App() {
    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 1000,
            easing: 'ease-in-sine',
            delay: 800,
        });
    })

    return (
        <div className="position-relative App">
            <NavTab></NavTab>
            {/* <HomePage></HomePage> */}
            {/* <Beyond></Beyond> */}
            {/* <Method></Method> */}
            {/* <Environments></Environments> */}
            {/* <Inspiration></Inspiration> */}
            {/* <CenterAddresses></CenterAddresses> */}
            {/* <Schedule></Schedule> */}
            {/* <Career></Career> */}
            {/* <LoginParent></LoginParent> */}
            {/* <LoginStudent></LoginStudent> */}
        </div>
    );
}

export default App;
