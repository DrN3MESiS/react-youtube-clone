import React from 'react';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';

const VideoItem = props => {
  const title = props.title;
  const description = props.description;
  const img = props.img;
  return (
    <React.Fragment>
      <div className="item-div">
        <Container>
          <Row>
            <Col sm={4}>
              <img className="mini-thumb" src={img} alt="thumbnail" />
            </Col>
            <Col sm={8}>
              <h5>{title}</h5>
              <label>{description}</label>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default VideoItem;
