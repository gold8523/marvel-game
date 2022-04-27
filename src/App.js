import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import CharactersPage from './pages/CharactersPage';
import AboutGamePage from './pages/AboutGamePage';
import ContactsPage from './pages/ContactsPage';

import s from "./App.module.scss";



function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/about_game" element={<AboutGamePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </div>
  );
}

export default App;
