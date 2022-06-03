import { Route, Routes, useLocation } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import CharactersPage from './pages/CharactersPage';
import AboutGamePage from './pages/AboutGamePage';
import ContactsPage from './pages/ContactsPage';
import BiographyPage from "./pages/BiographyPage";
import LoginPage from './pages/LoginPage';

import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";

import { useEffect } from "react";
import { LikeContext } from "./components/Context/likeContext";

import s from "./App.module.scss";

function App() {
  const location = useLocation();
  
  useEffect(() => {
    const elem = location.hash !== "" && document.getElementById(location.hash.replace('%20', ' '));

    location.hash ? 
      elem.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
      }) : 
      window.scrollTo(0, 0);
  }, [location, location.pathname, location.hash])
  
  return (
    <LikeContext.Provider value={{
      like: 'like'
    }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route index element={<MainPage />} />
            <Route path="characters" element={<CharactersPage />} />
            <Route path="characters/:id" element={<BiographyPage />} />
            <Route path="about_game" element={<AboutGamePage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="login" element={<LoginPage/>} />
        </Routes>
      </div>
    </LikeContext.Provider>
    );
}

export default App;
