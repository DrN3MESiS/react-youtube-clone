import React from 'react';
import VideoItem from '../VideoItem/VideoItem';
import './style.css';

const VideoList = props => {
  const vid_list = props.list;

  //const title = item.snippet.title;
  //const desc = item.snippet.description;
  //const img  = item.snippet.thumbnails.default.url;

  return (
    <React.Fragment>
      <div className="v1-div">
        <VideoItem title="test item" description="test description" img="img" />
      </div>
    </React.Fragment>
  );
};

export default VideoList;
