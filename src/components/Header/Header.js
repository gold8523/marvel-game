import cn from 'classnames'
import { Link } from 'react-router-dom';
import Container from "../Container";
import { useEffect, useState } from "react";

import s from "./Header.module.scss";

import logoPng from "../../assets/logo.png";

const Header = () => {
  const [isSmall, setSmall] = useState(false);
  const menuList = [
    {
      link: `Main`,
      url: `/`
    },
    {
      link: `Characters`,
      url: `/characters`
    },
    {
      link: `About Game`,
      url: `/about_game`
    },
    {
      link: `Contacts`,
      url: `/contacts`
    },
    
  ];
  
  useEffect(() => {
    window.addEventListener('scroll', (e)=> {
      let scY = window.scrollY 
      scY >= 60 ? setSmall(true) : setSmall(false)
    })
  }, [])

  return (
    <header className={s.root}>
      <div className={cn(s.header, {
      [s.small]: isSmall
    })}>
        <Container className={s.headerWrap}>
          <div className={s.logo}>
            <img src={logoPng} alt="logo" />
          </div>
          <ul className={s.nav}>
            {menuList.map((item, index) => (
              <li key={index}>
                <Link to={item.url}>{item.link}</Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </header>
  );
};

export default Header;
