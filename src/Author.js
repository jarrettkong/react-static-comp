import React from 'react';
import './Author.css';

function Author(props) {

  return (
    <div className='author-info' >
      <img src={props.authImg} className='author-image' />
      <div class="author-text">
        <h4 className='author-info-text'>{props.authName}</h4>
        <h4 className='author-info-text'>{props.estTime}</h4>
      </div>
    </div>
  )

}

export default Author;