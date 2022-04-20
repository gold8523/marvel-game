import Container from "../Container";
import Heading from "../Heading";
import Button from '../Button';

import s from "./Slider.module.scss";

const Slider = () => {
  const handleClickButton = () => {
    console.log('>>>> click')
  }
  
  return (
    <section className={s.section}>
      <div className={s.slider}>
        <Container className={s.sliderContent}>
          <Heading 
            level={1} 
            white
            backLine
          >
            This is header!
          </Heading>
          <Heading 
            level={2} 
            className={s.subheader} 
            white
          >
            Wow.Wow.Wow
          </Heading>

          <div className={s.call}>
            <Button isClick={handleClickButton}>
              Wow
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Slider;
