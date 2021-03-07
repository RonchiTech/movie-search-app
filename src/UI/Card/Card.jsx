import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
const Card = ({ src, alt, title_name, overview, m_id }) => {
  const [readMore, setReadMore] = useState(false);

  const readMoreHandler = () => {
    setReadMore((currValue) => !currValue);
  };

  let truncateStyle = {
    display: 'inline-block',
    width: '95%',
    whiteSpace: 'pre',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };
  const paragraphStyle = {
    display: 'inline-block',
    verticalAlign: 'middle',
    margin: '-15px 0 0 10px',
  };
  let cardStyle = {};
  if (readMore) {
    truncateStyle = {
      ...truncateStyle,
      whiteSpace: 'normal',
      height: 'auto',
      textAlign: 'justify',
      // textJustify: 'auto'
    };
    cardStyle = {
      overflowY: 'scroll',
    };
  }
  return (
    <div className="Card" style={cardStyle}>
      <img src={src} alt={alt} />
      <h2 className="poster-name">{title_name}</h2>
      <p>
        <span className="truncate" style={truncateStyle}>
          {overview}
        </span>
        <span
          className="read-more"
          onClick={readMoreHandler}
          style={paragraphStyle}
        >
          {readMore ? 'Read less' : 'Read more'}
        </span>
      </p>

      <Link to={`/more-info/${m_id}`}>
        <div className="arrow-icon">
          <label>More info</label>
          <FontAwesomeIcon icon={faArrowAltCircleRight} size="lg" />
        </div>
      </Link>
    </div>
  );
};
export default Card;
