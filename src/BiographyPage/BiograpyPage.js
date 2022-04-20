import PropTypes from 'prop-types';
import Button from '../components/Button';
import Container from '../components/Container';
import Heading from '../components/Heading';
import s from './BiographyPage.module.scss'

const BiographyPage = ({id, isBack}) => {
  const handleClick = () => {
    isBack();
  }

  return ( 
    <div className={s.root} > 
      <Container>
        <Button black isClick={handleClick}>
            Go Back
        </Button>
      </Container>
      <Heading level={1} >
        Biograpy Page
      </Heading>
    </div>
  );
}

BiographyPage.propTypes = {
  id: PropTypes.number,
  isBack: PropTypes.func
}

export default BiographyPage;