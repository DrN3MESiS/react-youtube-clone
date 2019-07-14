import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import { Container, Row, Col } from 'react-bootstrap';
import VideoDetail from './components/VideoDetail/VideoDetail';
import yAPI from './apis/youtube-api';
import VideoList from './components/VideoList/VideoList';

class App extends React.Component {
  state = { gotResults: false, data: [], selectedVideo: null };

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

      this.setState({ gotResults: true, data: res.data.items });
    } catch (error) {
      console.log(error);
      console.log('Error.');
    }
  };

  handleVideoSelect = async item => {
    console.log(item);
    this.setState({ selectedVideo: item });
  };

  render() {
    return (
      <React.Fragment>
        <Container fluid className="justify-content-md-center">
          <Row>
            <Col sm={true}>
              <div align="CENTER">
                <h1>YouTube API Search</h1>
                <SearchBar onUserSubmit={this.handleUserInput} />
                <hr />
              </div>
            </Col>
          </Row>
          {this.state.gotResults ? (
            <Row>
              <Col md={8} sm>
                {this.state.selectedVideo != null && (
                  <VideoDetail selectedVideo={this.state.selectedVideo} />
                )}
              </Col>
              <Col md={4} sm>
                <VideoList
                  list={this.state.data}
                  onVideoSelect={this.handleVideoSelect}
                />
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
