import React, { useState } from 'react';

const Card = ({ src, alt, title_name, overview, readingMore }) => {
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
        <p
          className="read-more"
          onClick={readMoreHandler}
          readingMore={readMore}
          style={paragraphStyle}
        >
          {readMore ? 'Read less' : 'Read more'}
        </p>
      </p>
    </div>
  );
};
export default Card;
