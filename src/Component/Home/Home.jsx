import React from 'react';
import Footer from '../pages/Footer/Footer';
import Global from '../pages/Global/Global';
import Header from '../pages/Header/Header';
import Hero from '../pages/Hero/Hero';
import News from '../pages/News/News';
import Team from '../pages/Team/Team';
import Tour from '../pages/Tour/Tour';

const Home = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Global/>
            <Tour/>
            <Team/>
            <News/>
            <Footer/>
        </div>
    );
};

export default Home;