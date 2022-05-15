import React from 'react';
import Footer from '../layout/footer/footer';
import Header from '../layout/header/header';
import News from '../ui/news/news';
import Thought21 from '../ui/thought21/thought21';
import Number from '../ui/number/number';

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