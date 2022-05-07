import { useState } from "react";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import CharacterCard from "../../components/CharacterCard";

import { Outlet, useParams } from "react-router-dom";

import s from "./CharactersPage.module.scss";

import { CHARACTER } from "../../constants/characters";

const CharactersPage = () => {
  const [likeChar, setLikeChar] = useState(CHARACTER);
  const {id} = useParams();
  
  const handleClickLike = (id) => {
    setLikeChar((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          item = {
            ...item,
            isLike: !item.isLike,
          };
        }
        return item;
      })
    );
  };

  return (
    <>
      {id ? (
        <Outlet />
      ) : (
        <div className={s.root}>
          <section className={s.cardSection}>
            <Container>
              <div className={s.cardTitle}>
                <Heading level={1} backLine>
                  Marvel Cards
                </Heading>
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
                      />
                    </div>
                  );
                })}
              </div>
            </Container>
          </section>
        </div>
      )}
    </>
  );
};

export default CharactersPage;
