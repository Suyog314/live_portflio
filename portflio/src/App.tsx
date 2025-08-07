

import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Footer from './components/Footer';
import profileImg from './assets/image.jpg';
import SkillTimeline from './components/SkillTimeline';


function App() {
  return (
    <div className="portfolio-container">
      <Header />
      <Navbar />
      <Section
        id="about"
        title="About Me"
        imageSrc={profileImg}
        content={
          <p>
            Hello Stranger! I am Suyog....Suyog Latake. I am currently pursuing my Btech majors in Chemical Engineering and Minors in Computer Science and Engineering.
            <br></br>
            <br></br>
            I like both Chemical and Computer; blame it on my inability to pick between heat transfer and memory transfer. When AI started making decisions faster than me, I made one for myself; if AI takes over, I have got Chemical and if I its take over AI, I have got Computer.
            <br></br>
            <br></br>
            So instead of choosing a side, I chose to stay curious. I dive into thermodynamics and formulations with the same excitement as debugging a stubborn piece of code. I explore AI not just to follow trends, but to make it actually usable. DSA keeps my logic sharp, CTFs keep things spicy, and web dev? Let’s just say I break and fix enough things to call it a skill.
            <br></br>
            <br></br>
            That’s a brief from my side! I did love to hear about you too! Feel free to drop a message in the contact section!
          </p>
        }
      />
      <Section
        id="projects"
        title="Projects"
        content={
          <ul>
            <li><strong>3D Printed Heat Exchanger</strong> – Designed and analyzed a functional double-pipe heat exchanger.</li>
            <li><strong>Tablut AI Game</strong> – Developed a multiplayer strategy game with 3 difficulty levels using Socket.IO.</li>
          </ul>
        }
      />
      <Section
        id="skills"
        title="Skills"
        content={<SkillTimeline />}
      />
      <Section
        id="contact"
        title="Contact"
        content={
          <>
            <p>Email: suyog@example.com</p>
            <p>LinkedIn: <a href="#">linkedin.com/in/suyog</a></p>
          </>
        }
      />
      <Footer />
    </div>
  );
}

export default App;
