import React from 'react';
import Header from "../Component/Header/Header.js";
import Hero from "../Component/Hero/Hero.js";
import Global from "../Component/Global/Global.js";
import Tour from "../Component/Tour/Tour.js";
import Team from "../Component/Team/Team.js";
import News from "../Component/News/News.js";
import Footer from "../Component/Footer/Footer.js";
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