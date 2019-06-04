import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      liked: !state.liked
    }));
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <button onClick={this.handleClick}> {this.props.whateveriwant}
      </button>
    );
  }
}

LikeButton.propTypes = {
 whateveriwant: PropTypes.string
}

LikeButton.defaultProps = {
  whateveriwant: 'Like'
};

export default LikeButton;
