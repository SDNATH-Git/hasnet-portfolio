import React from 'react';
import Designation from '../Pages/Designation';
import Skills from '../Pages/Skills';
import ElectionSection from '../Pages/ElectionSection';
import Gallery1 from '../Pages/Gallery1';
import Gallery2 from '../Pages/Gallery2';
import Gallery3 from '../Pages/Gallery3';


const Home = () => {
    return (
        <div id="home">
            <Designation ></Designation>
            <ElectionSection></ElectionSection>
            <Skills></Skills>
            <Gallery1></Gallery1>
            <Gallery2></Gallery2>
            <Gallery3></Gallery3>

        </div>
    );
};

export default Home;