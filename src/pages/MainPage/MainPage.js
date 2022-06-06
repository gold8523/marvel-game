import { useState, useContext, useEffect } from "react";
import Slider from "../../components/Slider";
import Heading from "../../components/Heading";
import Container from "../../components/Container";
import CharacterCard from "../../components/CharacterCard";

import { LikeContext } from "../../components/Context/likeContext";
// import { CHARACTER } from "../../constants/characters";

import s from "./MainPage.module.scss";

const MainPage = () => {
  // const [likeChar, setLikeChar] = useState(CHARACTER);
  const {myLiked, onLikeChar} = useContext(LikeContext);

  useEffect(() => {
    // console.log('context', like)
  }, [])

  const handleClickLike = (id) => {

    onLikeChar(id);

    // setLikeChar((prevState) =>
    //   prevState.map((item) => {
    //     if (item.id === id) {
    //       item = {
    //         ...item,
    //         isLike: !item.isLike,
    //       };
    //     }
    //     return item;
    //   })
    // );
  };
  
  return (
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
            {myLiked.map((item) => {
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
    </>
  );
};

export default MainPage;
