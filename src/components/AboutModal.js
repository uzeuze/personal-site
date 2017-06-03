import React, { Component } from 'react';

export default class AboutModal extends Component {
  render() {
    return (
      <div className="AboutModal">
        <h2>AboutModal</h2>
        <span onClick={() => this.props.onClose()}>Close</span>
      </div>
    );
  }
}
