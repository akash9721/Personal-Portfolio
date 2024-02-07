import React, { useState } from 'react';
import './About.css';
import photo from '../../img/photo.png';
import akinsta from '../../img/akinsta.jpg'
import about1 from '../../img/about1.jpg'
import about2 from '../../img/about2.jpg'

export const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="about" id='about'>
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src={about1} alt="" />
            </div>
            <div className="about-col-2">
              <h1 className='sub-title'>About Me</h1>
              <p>Hii, my name is akash kumar. Currently, I am a software developer with 2.5 years of experience in the industry. I specialize in developing frontend and backend applications and have worked with several programming languages such as C++,Java and Javascript.<br/>
              Prior to my current role, I worked as a software engineer at a startup where I gained valuable experience in building backend applications using Core Java, Spring, Spring boot, Microservices, spring security and Mysql.<br/>
              Looking ahead, I am eager to continue developing my skills in Full stack development and exploring new technologies that can help me create innovative solutions for clients. I am also interested in networking domain. I am also interested in taking on leadership roles
              in the future and mentoring junior developers to help them grow in their careers.”
              </p>
              <div className="tab-titles">
                <div className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} onClick={() => handleTabClick('skills')}>
                  Skills
                </div>
                <div className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} onClick={() => handleTabClick('experience')}>
                  Experience
                </div>
                <div className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={() => handleTabClick('education')}>
                  Education
                </div>
              </div>
              <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id='skills'>
                {
                  <ul>
                    <li><span>Coding Practise</span><br />C, C++, Java</li>
                    <li><span>Frontend Development</span><br />HTML, CSS, Java-Script, React</li>
                    <li><span>Backend Development</span><br />Core Java, Spring boot, microservices, Spring security</li>
                  </ul>
                }
              </div>
              <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id='experience'>
                {
                  <ul>
                    <li><span>Mar. 2023 - Present</span><br />Project Engineer at Centre for Development of Telematics.</li>
                    <li><span>Sep. 2022 - Feb. 2023</span><br />Software developer at Wiley Edge.</li>
                    <li><span>Sep. 2021 - May. 2022</span><br />Software Engineer Intern at NovoInvent Softwere Pvt. Ltd.</li>
                  </ul>
                }
              </div>
              <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id='education'>
                {
                  <ul>
                    <li><span>2018 - 2022</span><br />B-Tech(CSE) from Chandigarh University.</li>
                    <li><span>2016</span><br />Class XII from Maa Gyatri Inter College.</li>
                    <li><span>2014</span><br />Class X from Maa Gyatri Inter College.</li>
                  </ul>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
