import PropTypes from 'prop-types';
import cn from 'classnames';
import Heading from "../Heading";
import Text from "../Text";
import {ReactComponent as Heart} from './assets/heart.svg'

import s from "./CharacterCard.module.scss";

const CharacterCard = ({id, name, src, humanName, description, isLike, likeClick}) => {
  
  const handleLike = () => {
    likeClick(id);
  }
  return (
  <>
    <div className={s.root}>
      <img src={src} alt={name} className={s.cardImage} />
      <div className={s.cardDetails}>
        <Heading level={2} className={s.cardName}>
          {name}
        </Heading>
        <Heading level={4} className={s.cardHumanName}>
          {humanName}
        </Heading>
        <Text element="p" className={s.cardDescription}>
          {description}
        </Text>
        <div className={s.cardMeta}>
          <div className={cn(s.like, {
            [s.active]: isLike
          })} onClick={handleLike}>
            <Heart />
          </div>
          <div className={s.readBio}>
            <a href="#">Read bio</a>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

CharacterCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  src: PropTypes.string,
  humanName: PropTypes.string,
  description: PropTypes.string,
  isLike: PropTypes.bool,
  likeClick: PropTypes.func
}

export default CharacterCard;
