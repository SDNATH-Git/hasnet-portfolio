import React from 'react';
import Designation from '../Pages/Designation';
import About from '../Pages/About';
import Skills from '../Pages/Skills';
import Education from '../Pages/Education';
import Projects from '../Pages/Projects';
import Contacts from '../Pages/Contacts';
import ElectionSection from '../Pages/ElectionSection';
import Gallery1 from '../Pages/Gallery1';
import Gallery2 from '../Pages/Gallery2';
import Gallery3 from '../Pages/Gallery3';


const Home = () => {
    return (
        <div id="home">
            <Designation ></Designation>
            {/* <About></About> */}
            <ElectionSection></ElectionSection>
            <Skills></Skills>
            <Gallery1></Gallery1>
            <Gallery2></Gallery2>
            <Gallery3></Gallery3>
            {/* <Education></Education> */}
            {/* <Projects></Projects> */}
            {/* <Contacts></Contacts> */}

        </div>
    );
};

export default Home;