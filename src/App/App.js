import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import { Container, Row, Col } from 'react-bootstrap';
import VideoFeed from './components/VideoFeed/VideoFeed';

class App extends React.Component {
  handleUserInput = term => {
    console.log(term);
  };

  render() {
    return (
      <React.Fragment>
        <Container fluid className="justify-content-md-center">
          <Row>
            <Col sm={true}>
              <SearchBar onUserSubmit={this.handleUserInput} />
            </Col>
          </Row>
          <Row>
            <Col md={8} sm>
              video feed
              <VideoFeed />
            </Col>
            <Col md={4} sm>
              video recommendations
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
