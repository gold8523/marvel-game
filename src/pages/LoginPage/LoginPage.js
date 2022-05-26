import cn from "classnames";

import Footer from "../../components/Footer";
import Heading from "../../components/Heading";
import { ReactComponent as Pen } from './assets/icon-pen.svg'
import s from "./LoginPage.module.scss";

import logo from "../../assets/logo.png";
import { useRef, useState, useEffect} from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const LoginPage = () => {
  const [active, setActive] = useState(false);
  const [form, setForm] = useState(
    {
      email: '',
      password: '',
      repeat: ''
    })
  
  useEffect(() => {
    return () => {
      console.log('### submit data', form);
    }
  }, [])
  
  const ref = useRef(null);

  const handleToggleForm = () => {
    setActive(prevState => !prevState);
  }

  const handleChange = () => {
    setForm(prevState => ({
      ...prevState,
      email: localStorage.getItem('email'),
      password: localStorage.getItem('password'),
      repeat: localStorage.getItem('repeat')
    }))
  }

  const handleFormSubmit = (e) => {
    // e.preventDefault();
    console.log('send');

    if (e.target.name === 'registerForm') {
      if (form.password !== form.repeat) {
        return console.log('error пароли не совпадают')
      }
    }

    console.log('### page:', form);

    localStorage.removeItem('email');
    localStorage.removeItem('password')
    localStorage.removeItem('repeat')

    // setForm(prevState => ({
    //   ...prevState,
    //   email: '',
    //   password: '',
    //   repeat: ''
    // }))


    setActive(false);
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
          <form 
            ref={ref}
            name="loginForm"
            onSubmit={handleFormSubmit}
          >
            <div className={s.inputContainer}>
              <Input type="email" name="email" required value={form.email} onChange={handleChange} />
              <label htmlFor="#email">Email</label>
              <div className={s.bar}></div>
            </div>
            <div className={s.inputContainer}>
              <Input type="password" name="password" required value={form.password} onChange={handleChange} />
              <label htmlFor="#password">Password</label>
              <div className={s.bar}></div>
            </div>
            <div className={s.buttonContainer}>
              <Button type="submit">  
                Go
              </Button>
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
          <form 
            ref={ref}
            name="registerForm"
            onSubmit={handleFormSubmit}
          >
            <div className={s.inputContainer}>
              <Input type="email" name="email" required value={form.email} />
              <label htmlFor="#signup-email">Email</label>
              <div className={s.bar}></div>
            </div>
            <div className={s.inputContainer}>
              <Input type="password" name="password" required value={form.email} />
              <label htmlFor="#signup-password">Password</label>
              <div className={s.bar}></div>
            </div>
            <div className={s.inputContainer}>
              <Input type="password" name="repeat" required value={form.email} />
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
