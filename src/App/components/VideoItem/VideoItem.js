import React from 'react';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';

const VideoItem = props => {
  const element = props.video;
  const title = element.snippet.title;
  const img = element.snippet.thumbnails.default.url;
  return (
    <React.Fragment>
      <div
        className="item-div"
        onClick={() => {
          props.onVideoSelect(element);
        }}
      >
        <Container>
          <Row>
            <Col sm={4}>
              <img className="mini-thumb" src={img} alt="thumbnail" />
            </Col>
            <Col sm={8}>
              <h5>{title}</h5>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default VideoItem;
