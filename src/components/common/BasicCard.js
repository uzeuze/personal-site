import React, { Component } from 'react';

class BasicCard extends Component {
  render() {
    return (
      <div className="BasicCard">
        {this.props.children}
      </div>
    );
  }
}

export { BasicCard };
