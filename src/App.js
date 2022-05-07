import { Route, Routes, useLocation } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import CharactersPage from './pages/CharactersPage';
import AboutGamePage from './pages/AboutGamePage';
import ContactsPage from './pages/ContactsPage';
import BiographyPage from "./pages/BiographyPage";

import s from "./App.module.scss";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  
  return (
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
      </Routes>
    </div>
  );
}

export default App;
