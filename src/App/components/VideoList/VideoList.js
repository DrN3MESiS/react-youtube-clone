import React from 'react';
import VideoItem from '../VideoItem/VideoItem';
import './style.css';

const VideoList = props => {
  const vid_list = props.list.map(element => {
    return (
      <VideoItem
        key={element.id.videoId}
        title={element.snippet.title}
        description={element.snippet.publishedAt}
        img={element.snippet.thumbnails.default.url}
      />
    );
  });

  return (
    <React.Fragment>
      <div className="v1-div">{vid_list}</div>
    </React.Fragment>
  );
};

export default VideoList;
