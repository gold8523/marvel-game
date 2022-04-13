import Container from "../Container";
import Heading from "../Heading";

import s from "./Slyder.module.css";

const Slider = () => {
  return (
    <section className={s.section}>
      <div className={s.slider}>
        <Container className={s.sliderContent}>
          <Heading level={1}>
            This is header!
          </Heading>
          <Heading 
            level={2} 
            className={s.subheader} 
            black
          >
            Wow.Wow.Wow
          </Heading>

          <div className={s.call}>
            <button className={s.button}>Wow</button>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Slider;
