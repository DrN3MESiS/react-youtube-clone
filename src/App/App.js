import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import { Container, Row, Col } from 'react-bootstrap';
import VideoDetail from './components/VideoDetail/VideoDetail';
import yAPI from './apis/youtube-api';
import VideoList from './components/VideoList/VideoList';

class App extends React.Component {
  state = { gotResults: false, data: [] };

  handleUserInput = async term => {
    console.log(term);
    try {
      const KEY = 'AIzaSyDOLFHgilmIENKqppCkd-YJNiIIdm6MOd4';

      const res = await yAPI.get(`/search`, {
        params: {
          q: term,
          maxResults: 5,
          part: 'snippet',
          key: KEY,
        },
      });

      console.log(res.data.items);
      this.setState({ gotResults: true, data: res.data.items });
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
              <hr />
            </Col>
          </Row>
          {this.state.gotResults ? (
            <Row>
              <Col md={8} sm>
                <VideoDetail />
              </Col>
              <Col md={4} sm>
                <VideoList list={this.state.data} />
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
