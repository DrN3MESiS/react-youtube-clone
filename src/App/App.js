import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import { Container, Row, Col } from 'react-bootstrap';
import VideoDetail from './components/VideoDetail/VideoDetail';
import yAPI from './apis/youtube-api';

class App extends React.Component {
  state = { gotResults: false };

  handleUserInput = async term => {
    console.log(term);
    try {
      const data = await yAPI.get(`/search`, {
        params: {
          q: term,
        },
      });
      console.log(data);
      this.setState({ gotResults: true });
    } catch (error) {
      console.log(error);
      console.log('Error.');
    }
  };

  render() {
    return (
      <React.Fragment>
        <Container fluid className="justify-content-md-center">
          <Row>
            <Col sm={true}>
              <h1>YouTube Search Clone</h1>
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
