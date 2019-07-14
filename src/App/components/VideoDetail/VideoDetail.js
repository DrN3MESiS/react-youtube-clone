import React from 'react';
import { ListGroup } from 'react-bootstrap';

const VideoDetail = ({ selectedVideo }) => {
  return (
    <React.Fragment>
      <ListGroup>
        <ListGroup.Item>Video Player</ListGroup.Item>
        <ListGroup.Item>
          <h4>{selectedVideo.snippet.title}</h4>
          <h6>{selectedVideo.snippet.description}</h6>
        </ListGroup.Item>
      </ListGroup>
    </React.Fragment>
  );
};

export default VideoDetail;
