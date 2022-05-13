import cn from "classnames";

import Footer from "../../components/Footer";
import Heading from "../../components/Heading";
import { ReactComponent as Pen } from './assets/icon-pen.svg'
import s from "./LoginPage.module.scss";

import logo from "../../assets/logo.png";
import { useRef, useState } from "react";

const LoginPage = () => {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  const handleToggleForm = () => {
    setActive(prevState => !prevState);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('form submit');
  }

  return (
    <div className={s.root}>
      <div className={s.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={cn(s.container, {
        [s.active]: active
      })}>
        <div className={s.card}></div>
        <div className={s.card}>
          <Heading level={1} className={s.title}>
            Login
          </Heading>
          <form onSubmit={handleFormSubmit}>
            <div className={s.inputContainer}>
              <input type="email" id="#email" required="required" />
              <label htmlFor="#email">Email</label>
              <div className={s.bar}></div>
            </div>
            <div className={s.inputContainer}>
              <input type="password" id="#password" required="required" />
              <label htmlFor="#password">Password</label>
              <div className={s.bar}></div>
            </div>
            <div className={s.buttonContainer}>
              <button>
                <span>Go</span>
              </button>
            </div>
          </form>
        </div>
        <div className={cn(s.card, s.alt)}>
          <div className={cn(s.toggle, {
            [s.active]: active
          })} onClick={handleToggleForm}>
            <Pen />
          </div>
          <Heading level={1} className={s.title}>
            Register
            <div className={s.close} onClick={handleToggleForm}></div>
          </Heading>
          <form onSubmit={handleFormSubmit}>
            <div className={s.inputContainer}>
              <input type="email" id="#signup-email" required="required" />
              <label htmlFor="#signup-email">Email</label>
              <div className={s.bar}></div>
            </div>
            <div className={s.inputContainer}>
              <input
                type="password"
                id="#signup-password"
                required="required"
              />
              <label htmlFor="#signup-password">Password</label>
              <div className={s.bar}></div>
            </div>
            <div className={s.inputContainer}>
              <input
                type="password"
                id="#signup-repeat-password"
                required="required"
              />
              <label htmlFor="#signup-repeat-password">Repeat Password</label>
              <div className={s.bar}></div>
            </div>
            <div className={s.buttonContainer}>
              <button>
                <span>Register</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
