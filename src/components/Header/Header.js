import cn from 'classnames'
import Container from "../Container";
import { useEffect, useState } from "react";

import s from "./Header.module.scss";

import logoPng from "../../assets/logo.png";

const Header = () => {
  const [isSmall, setSmall] = useState(false);
  const menuList = ["Menu 1", "Menu 2", "Menu 3", "Menu 4"];
  
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
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </header>
  );
};

export default Header;
