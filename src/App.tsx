import React from 'react';
import './App.scss';
import HomePage from "./components/homepage";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
    Aos.init({
        offset: 200,
        duration: 1500,
        easing: 'ease-in-sine',
        delay: 500,
      });
    return (
        <div className="App">
            <HomePage></HomePage>
        </div>
    );
}

export default App;
