import React from 'react'
import './Portfolio.css'
import enmeyshoot from '../../img/enmy.jpg'
import hotelMgnt1 from '../../img/hotel.jpg'
import studentMgnt from '../../img/hrm.jpg'
import studentMgnt2 from '../../img/sms.png'
export const Portfolio = () => {
  return (
    <>
      <div className="portfolio" id='portfolio'>
        <div className="container">
            <h1 className="sub-title">My Work</h1>
              <div className="work-list">
                 <div className="work">
                    <img src={studentMgnt}/>
                     <div className="layer">
                        <h3>Student Management App</h3>
                        <p>a simple student management CRUD application with Spring boot, JWT authentication, MySQL and React<br/>
                           In this application we add some users with their roles (ADMIN, USER) and when we authenticate JWT create a token with that
                           token you can access application based on role
                        </p>
                        <a href="" target='_blank'><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                     </div>
                 </div>
                 <div className="work">
                    <img src={enmeyshoot}/>
                    <div className="layer">
                        <h3>Enemy Shoot Game</h3>
                        <p>In the enemy shoot game, there is one shooter who stood in the center and the enemies are randomly coming from all the directions towards
                           Shooter, for protecting itself shooter start shooting enemies when it shoots enemies it collects points and if any enemy touches the shooter
                           The game is finished, the final score will display, and we can start the game again
                        </p>
                        <a href="https://akash9721.github.io/AkashPortfolio/EnemyShootBubble.html" target='_blank'><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                     </div>
                 </div>
                 <div className="work">
                    <img src={hotelMgnt1}/>
                    <div className="layer">
                        <h3>Hotel Rating System</h3>
                        <p>In this app i used microservices,api gateway,service registry concept, here i create three microservices user, rating, hotel. where a user can give
                          rating to the hotel and with the help of rating user can find the hotel. 
                        </p>
                        <a href="" target='_blank'><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                     </div>
                 </div>
              </div>
        </div>
      </div>
    </>
  )
}
