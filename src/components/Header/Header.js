import cn from 'classnames'
import { NavLink, useNavigate } from 'react-router-dom';
import Container from "../Container";
import { useEffect, useState } from "react";

import s from "./Header.module.scss";

import logoPng from "../../assets/logo.png";

const Header = () => {
  const [isSmall, setSmall] = useState(false);
  const navigate = useNavigate();
  const menuList = [
    {
      title: 'Main',
      href: '/'
    },
    {
      title: 'Characters',
      href: '/characters'
    },
    {
      title: 'About game',
      href: '/about_game'
    },
    {
      title: 'Contacts',
      href: '/contacts'
    },
    
  ];
  
  useEffect(() => {

    window.addEventListener('scroll', (e) => {
      setSmall(window.scrollY >= 60)
    })
  }, [])

  window.removeEventListener('scroll', () => {
    setSmall(false);
  })

  const handleClickLogo = () => {
    navigate('/');
  }

  return (
    <header className={s.root}>
      <div className={cn(s.header, {
      [s.small]: isSmall
    })}>
        <Container className={s.headerWrap}>
          <div className={s.logo} onClick={handleClickLogo}>
            <img src={logoPng} alt="logo" />
          </div>
          <ul className={s.nav}>
            {menuList.map((item, index) => (
              <li key={index}>
                <NavLink 
                  to={item.href}
                  className={({isActive}) => {
                    return isActive ? s.active : null;
                  }}
                  >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </header>
  );
};

export default Header;
