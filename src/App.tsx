import React, { useEffect } from 'react';
import './App.scss';
import Aos from "aos";
import "aos/dist/aos.css";
import NavTab from './components/layout/NavTab';
import HomePage from './components/screens/homepage';
import Beyond from './components/screens/beyound';
import Method from './components/screens/methods';
import Environments from './components/screens/enviroment';
import Inspiration from './components/screens/inspiration';
import CenterAddresses from './components/screens/centerAddress';
import Schedule from './components/screens/schedule';
import Career from './components/screens/career';
import LoginParent from './components/screens/loginParent';
import LoginStudent from './components/screens/loginStudent';

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
