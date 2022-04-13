import Container from "../Container";
import Heading from "../Heading";
import s from "./style.module.css";

const Slider = () => {
  return (
    <section className={s.section}>
      <div className={s.slider}>
        <Container className={s.sliderContent}>
          {/* <div className={`${s.container} ${s.sliderContent}`}> */}
            {/* <h1 className={s.header}>Wow</h1> */}
            <Heading title="This is header!" />

            <h2 className={s.subheader}>Wow.Wow.Wow</h2>

            <div className={s.call}>
              <button className={s.button}>Wow</button>
            </div>
          {/* </div> */}
        </Container>
      </div>
    </section>
  );
};

export default Slider;
