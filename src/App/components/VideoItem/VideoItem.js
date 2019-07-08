import React from 'react';
import './style.css';

const VideoItem = props => {
  const title = props.title;
  const description = props.desc;
  const img = props.img;
  return (
    <React.Fragment>
      <div className="item-div">
        <h2>{title}</h2>
        <h5>{description}</h5>
      </div>
    </React.Fragment>
  );
};

export default VideoItem;
