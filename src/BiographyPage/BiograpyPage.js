import PropTypes from 'prop-types';
import Button from '../components/Button';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Text from '../components/Text';
import s from './BiographyPage.module.scss';

import BIO from './Bio';

const BiographyPage = ({id, isBack}) => {
  const handleClickButton = () => {
    isBack();
  }

  return ( 
    <div className={s.root} > 
      <Container>
        <Button black isClick={handleClickButton}>
            Go Back
        </Button>
      </Container>
      <Heading level={1} >
        Biograpy Page
      </Heading>
      {
        console.log(BIO)
      }
    </div>
  );
}

BiographyPage.propTypes = {
  id: PropTypes.number,
  isBack: PropTypes.func
}

export default BiographyPage;