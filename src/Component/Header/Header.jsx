import React, { useState,useEffect } from 'react'
import './Header.css'
import {useTypewriter,cursor} from 'react-simple-typewriter'
import akash from '../../img/Akash.png'
import akashcpy from '../../img/photo_rbg_cpy.png'
import {Link} from 'react-scroll'
export const Header = () => {

  const[typeEffect]=useTypewriter({
    words:['Frontend Developer','Backend Developer','FullStack Developer'],
    loop:{},
    typeSpeed:100,
    delaySpeed:40
  })

  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 0) {
              setMenuVisible(false); // Hide menu if scrolled down
          }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const openMenu = () => {
      setMenuVisible(true);
  }

  const closeMenu = () => {
      setMenuVisible(false);
  }

  
  return (
    <>
      <div className="header">
        <div className="container">
            <nav>
                <h1 className='logo'><span className='letter'>A</span>kash.</h1>
                <ul className={menuVisible ? 'sidemenu open' : 'sidemenu'}>
                    <li><Link activeClass="active" to="/" spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li>
                    <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link></li>
                    <li><Link activeClass="active" to="services" spy={true} smooth={true} offset={-100} duration={500}>Services</Link></li>
                    <li><Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-100} duration={500}>Portfolio</Link></li>
                    <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link></li>
                    <i class="fa-solid fa-square-xmark" onClick={closeMenu}></i>
                </ul>
                <i class="fa-solid fa-bars" onClick={openMenu}></i>
            </nav>
            <div className="header-text">
                <h1>Hi, I'm <span className='letter'>Akash Kumar</span><br />Software Engineer</h1>
                <p>{typeEffect}</p>
            </div>
        </div>
      </div>
    </>
  )
}
