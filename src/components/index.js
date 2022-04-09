import s from "style.module.css";

const Header = () => {
    const menuList = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4']
  return (
    <header class="root">
      <div class="header">
        <div class="container">
          <div class="logo"></div>

          <ul class="nav">
            <li>
              <a href="#">Menu 1</a>
            </li>

            <li>
              <a href="#">Menu 2</a>
            </li>

            <li>
              <a href="#">Menu 3</a>
            </li>

            <li>
              <a href="#">Menu 4</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
