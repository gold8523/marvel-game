import Container from '../../components/Container';
import Text from '../../components/Text';
import Heading from '../../components/Heading';

import s from './ContactsPage.module.scss';

import mainImg from './assets/my-img.jpg'

const ContactsPage = () => {
  return (
    <div className={s.root}>
      <Container>
        <Heading level={1} className={s.header}>
          Contacts
        </Heading>
        <section className={s.contactSection}>
          <div className={s.imgWrapper}>
            <img src={mainImg} className={s.mainImg} alt='image'/>
          </div>
          <div className={s.conactsInfo}>
            <Heading level={3}>
              Денис Г.
            </Heading>
            <Heading level={5}>
              Возраст: 32
            </Heading>
            <Text element='p'>
              На пути в it. Проходил марафоны по js и react.
            </Text>
            <Text element='p'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo odio non lacus congue malesuada. Nulla pharetra justo in interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo odio non lacus congue malesuada. Nulla pharetra justo in interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu consectetur mi. Donec sed bibendum orci, ultrices aliquam mauris. Vestibulum consequat augue quis felis volutpat, et tempus diam mattis. Mauris pretium hendrerit lectus eget maximus. Ut eget vehicula erat, sed finibus arcu. Sed tincidunt nulla vitae elementum consequat. Praesent porttitor. 
            </Text>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default ContactsPage;