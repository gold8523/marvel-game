import { useState } from 'react';
import Header from '../../components/Header';
import Slider from '../../components/Slider';
import Footer from '../../components/Footer';
import Heading from '../../components/Heading';
import Container from '../../components/Container';
import BiographyPage from '../BiographyPage';
import CharacterCard from '../../components/CharacterCard';

import { CHARACTER } from '../../constants/characters';

import s from './MainPage.module.scss';

const MainPage = () => {
  const [likeChar, setLikeChar] = useState(CHARACTER);
  const [charId, setCharId] = useState(null);

  const handleClickLike = (id) => {
    setLikeChar(prevState => prevState.map((item, key) => {
        if (item.id === id) {
          item = {
            ...item,
            isLike : !item.isLike
          }
        }
        return item;
      })
    )}

  const handelShowBio = (id) => {
    setCharId(id);
  }

  return (
    <>
      <Header />
      {
          charId? <BiographyPage id={charId} isBack={handelShowBio}/> : 
          <>
            <Slider />
            <section className={s.cardSection}>
              <Container>
                <div className={s.cardTitle}>
                  <Heading level={1} backLine>
                    Marvel Cards
                  </Heading>
                  <Heading level={2}>Collect your best five</Heading>
                </div>
                <div className={s.cardWrap}>
                  {likeChar.map((item) => {
                    return (
                      <div key={item.id}>
                        <CharacterCard
                          id={item.id}
                          name={item.name}
                          src={item.thumbnail.path}
                          humanName={item.humanName}
                          description={item.description}
                          isLike={item.isLike}
                          likeClick={handleClickLike}
                          isShowBio={handelShowBio}
                        />
                      </div>
                    );
                  })}
                </div>
              </Container>
            </section>
          </>
        }
      <Footer />
    </>
  );
}

export default MainPage;