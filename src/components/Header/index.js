import s from "./style.module.css";

const Header = () => {
  const menuList = ["Menu 1", "Menu 2", "Menu 3", "Menu 4"];

  return (
    <header className={s.root}>
      <div className={s.header}>
        <div className={s.container}>
          <div className={s.logo}></div>

          <ul className={s.nav}>
            {menuList.map((item) => (
              <li>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
