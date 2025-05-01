import React from 'react';
import About from './homeComponent/About';
import Projects from './homeComponent/projects/Projects';
import MySkills from './homeComponent/MySkills';
import SendMail from './homeComponent/SendMail/SendMail';
import Gallery from './homeComponent/gallery/Gallery';
import Contact from './homeComponent/contact/Contact';
import AboutMe from './AboutMe';
import Education from './homeComponent/Education';

const Home = () => {
    return (
        <div>
           
            <About></About>
            <AboutMe></AboutMe>
            <Education></Education>
            <Projects></Projects>
            <MySkills></MySkills>
            {/* <Gallery></Gallery> */}
            <Contact></Contact>
            {/* <SendMail></SendMail> */}
        </div>
    );
};

export default Home;