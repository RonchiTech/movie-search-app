import React from 'react'
import {Link} from 'react-router-dom'
const card = ({src,alt,title_name,overview}) => {
    return (
      <div className="Card">
        <img src={src} alt={alt} />
        <h2 className="poster-name">{title_name}</h2>
        <p>
          <span className="truncate">{overview}</span>
          <Link>Read more</Link>
        </p>
      </div>
    );
}
export default card;