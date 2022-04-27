import PropTypes from 'prop-types';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import s from './BiographyPage.module.scss';

import { BIO } from '../../constants/Bio'

const BiographyPage = ({id, isBack}) => {

  const handleClickButton = () => {
    isBack(null);
  }

  return ( 
    <div className={s.root} > 
      <Container className={s.button}>
        <Button black isClick={handleClickButton}>
            Go Back
        </Button>
      </Container>
      <Container>
        {
          BIO[id].map((item, index) => {
            switch(item.type) {
              case 'h1': 
              case 'h2': 
                return (
                  <Heading key={index} level={Number(item.type.slice(1))} className={s.heading}>
                    {item.text}
                  </Heading>
                )
                  // return (
                  //   <Heading level={2} className={s.heading}>
                  //     {item.text}
                  //   </Heading>
                  // )
              case 'paragraph': 
                return (
                  <Text key={index} element='p' className={s.paragraph}>
                    {item.text}
                  </Text>
                )
              case 'img':
                return (
                  <img key={index} src={item.src} alt="biograpy image" className={s.img}/>
                )
              default: return
            }
          })
        }
      </Container>
      
    </div>
  );
}

BiographyPage.propTypes = {
  id: PropTypes.number,
  isBack: PropTypes.func
}

export default BiographyPage;