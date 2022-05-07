// import PropTypes from 'prop-types';
// import cn from 'classnames';

import Button from '../../components/Button';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Text from '../../components/Text';

import { Navigate, useNavigate, useParams, useLocation, Link } from 'react-router-dom';

import s from './BiographyPage.module.scss';

import { BIO } from '../../constants/Bio'

import { ReactComponent as AnchorImg } from './assets/link_icon.svg';

const BiographyPage = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBackClick = () => {
    navigate(-1);
  }

  if(!BIO[id]) {
    return <Navigate to="/characters" replace />
  }

  return ( 
    <div className={s.root} > 
      
      <Container>
        <div className={s.button}>
          <Button black 
          onClick={handleGoBackClick}>
            Go back!
          </Button>
        </div>
        {
          BIO[id].map((item, index) => {
            switch(item.type) {
              case 'h1': 
              return (
                  <Heading key={index} level={Number(item.type.slice(1))} className={s.heading}>
                    {item.text}
                  </Heading>
                )
                case 'h2': 
                  return (
                    <div key={index} id={`#${item.text}`} className={s.anchor}>
                      <Heading level={2} className={s.heading} >
                        {item.text}
                      </Heading>
                      <Link to={`#${item.text}`} >
                        <AnchorImg />
                      </Link>
                    </div>
                  )
              case 'paragraph': 
                return (
                  <Text key={index} element='p' className={s.paragraph}>
                    {item.text}
                  </Text>
                )
              case 'img':
                return (
                  // eslint-disable-next-line jsx-a11y/img-redundant-alt
                  <img key={index} src={item.src} alt="biograpy image" className={s.img}/>
                )
              default: 
                return (
                  <Text key={index} element='p' className={s.paragraph}>
                    Bio not found
                  </Text>
                )
            }
          })
        }
      </Container>
      
    </div>
  );
}

BiographyPage.propTypes = {}

export default BiographyPage;