import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import { Container, Row, Col } from 'react-bootstrap';
import VideoDetail from './components/VideoDetail/VideoDetail';

class App extends React.Component {
  state = { gotResults: false };

  handleUserInput = term => {
    console.log(term);
    this.setState({ gotResults: true });
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
          {this.state.gotResults ? (
            <Row>
              <Col md={8} sm>
                video detail
                <VideoDetail />
              </Col>
              <Col md={4} sm>
                video recommendations
              </Col>
            </Row>
          ) : (
            <div />
          )}
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
