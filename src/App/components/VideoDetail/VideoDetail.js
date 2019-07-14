import React from 'react';
import { ListGroup } from 'react-bootstrap';

const VideoDetail = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <ListGroup>
        <ListGroup.Item>
          <iframe
            title="video"
            src={'https://www.youtube.com/embed/' + selectedVideo.id.videoId}
            width={100 + '%'}
            height="600"
          />
        </ListGroup.Item>
        <ListGroup.Item>
          <h4>{selectedVideo.snippet.title}</h4>
          <h6>{selectedVideo.snippet.description}</h6>
        </ListGroup.Item>
      </ListGroup>
    </React.Fragment>
  );
};

export default VideoDetail;
