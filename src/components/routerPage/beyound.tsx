import React from 'react';
import Footer from '../mediumComponents/footer/footer';
import Header from '../mediumComponents/header/header';
import News from '../mediumComponents/news/news';
import Number from '../mediumComponents/number/number';
import Thought21 from '../mediumComponents/thought21/thought21';

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