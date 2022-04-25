import s from "./Header.module.scss";
import Container from "../Container";

import logoPng from "../../assets/logo.png";

const Header = () => {
  const menuList = ["Menu 1", "Menu 2", "Menu 3", "Menu 4"];

  return (
    <header className={s.root}>
      <div className={s.header}>
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
