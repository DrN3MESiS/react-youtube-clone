import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import { Container, Row, Col } from 'react-bootstrap';

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
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
