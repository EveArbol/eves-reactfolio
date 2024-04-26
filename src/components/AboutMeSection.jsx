/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import avatarImage from "../assets/avatar.jpeg";
import '../styles/components/AboutMeSection.css';

const AboutMeSection = () => {
  return (
    <section id="sobre-mi">
      
      <div className="content">
      <h2>About me</h2>
      <img className="avatar" src={avatarImage} alt="Avatar" />
      <p>¡Hi! I'm Eve, I'm full stack web developer Jr.</p>
      <>✨🤍🧚‍♀️✨</>
      <p> HTML | CSS | JavaScript | MySQL | Node JS | React</p>
      {/* Aquí puedo agregar más detalles sobre mi */}
      </div>
    </section>
  );
}

export default AboutMeSection;
