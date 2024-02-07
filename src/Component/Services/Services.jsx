import React from 'react'
import './Services.css'
export const Services = () => {
  return (
    <>
      <div className="services" id='services'>
         <div className="container">
            <h1 className="sub-title">My services</h1>
              <div className="services-list">
                  <div>
                  <i class="fa-solid fa-laptop"></i>
                    <h2>Frontend Developer</h2>
                    <p>Frontend Developer
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>React js</li>
                    </p>
                  </div>
                  <div>
                  <i class="fa-solid fa-snowflake"></i>
                    <h2>Backend Developer</h2>
                    <p>Backend Developer
                      <li>Java</li>
                      <li>JDBC</li>
                      <li>Spring & Spring boot</li>
                      <li>Microservices</li>
                      <li>Spring security & JWT</li>
                      <p>For Database</p>
                      <li>Mysql</li>
                      <li>MongoDB</li>
                    </p>
                  </div>
                  <div>
                  <i class="fa-solid fa-code"></i>
                    <h2>Networking & others</h2>
                    <p>In Networking
                      <li>Linux-(RHEL,Ubuntu)</li>
                      <li>Git</li>
                      <li>Jenkin</li>
                      <li>Docker</li>
                    </p>
                  </div>
              </div>
         </div>
      </div>
    </>
  )
}
