import React from 'react';
import { withRouter } from 'react-router-dom';
// withRouter is a higher order component that allows us to take another component
// as an argument and returns another component. It prevents prop tunneling(or drilling),
// which in this case would be passing props from homepage to directory just to pass them down to 
// menu item, even though directory does not actually need them.

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div 
        className='background-image' 
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
    />  
    <div className="content">
      <h1 className="title">{ title.toUpperCase() }</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
//will now have access to location, match, and history props we want