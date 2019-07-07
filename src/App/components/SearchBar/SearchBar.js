import React from 'react';
import './style.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  handleInput = event => {
    this.setState({ text: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.onUserSubmit(this.state.text);
  };

  render() {
    return (
      <React.Fragment>
        <div align="CENTER" className="search-bar-div">
          <form onSubmit={this.handleFormSubmit}>
            <input
              type="text"
              placeholder="Search..."
              className="search-bar"
              value={this.state.text}
              onChange={this.handleInput}
            />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBar;
