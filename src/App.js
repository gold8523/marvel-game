import { Route, Routes, useLocation } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import CharactersPage from './pages/CharactersPage';
import AboutGamePage from './pages/AboutGamePage';
import ContactsPage from './pages/ContactsPage';
import BiographyPage from "./pages/BiographyPage";
import LoginPage from './pages/LoginPage';

import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";

import { useEffect, useState } from "react";
import { LikeContext } from "./components/Context/likeContext";
import { CHARACTER } from "./constants/characters";

import s from "./App.module.scss";

function App() {
  const location = useLocation();
  const [myLike, setLike] = useState(CHARACTER);
  
  
  useEffect(() => {
    setLike(CHARACTER.map((item) => {
      if (item.id === Number(localStorage.getItem(item.name))) {
        item = {
          ...item,
          isLike: !item.isLike
        }

      }
      return item;
    }))
  }, [])

  
  useEffect(() => {
    const elem = location.hash !== "" && document.getElementById(location.hash.replace('%20', ' '));

    location.hash ? 
      elem.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
      }) : 
      window.scrollTo(0, 0);
  }, [location, location.pathname, location.hash])

  const handleLikeChar = (id) => {

    setLike(myLike.map((item) => {
        if (item.id === id) {
          item = {
            ...item,
            isLike: !item.isLike,
          };

          if(item.isLike) {
            localStorage.setItem(item.name.toString(), item.id)
          } else {
            localStorage.removeItem(item.name.toString());
          }
        }
        
        return item;
      })
    );
  }
  
  return (
    <LikeContext.Provider value={{
      myLiked: myLike,
      onLikeChar: handleLikeChar,
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
