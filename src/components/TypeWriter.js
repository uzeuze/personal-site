import React, { Component } from 'react';

export default class TypeWriter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      currentText: props.data[0]
    }
    this.deleteText = this.deleteText.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.deleteText();
    }, 1000);
  }

  deleteText() {
    const { data } = this.props;
    const { currentIndex } = this.state;
    let index = data[currentIndex].length;
    for (let i = 0; i <= index; i++) {
      setTimeout(() => {
        this.setState((state, props) => {
          return {
            currentText: data[state.currentIndex].slice(0, index - i)
          }
        });
        if (i === index) {
          this.renderText();
        }
      }, (i + 1) * 200);
    }
  }

  renderText() {
    const { data } = this.props;
    const { currentIndex } = this.state;
    if (data.length > currentIndex + 1) {
      let index = data[currentIndex + 1].length;
      this.setState({ currentIndex: currentIndex + 1 });
      for (let i = 0; i <= index; i++) {
        setTimeout(() => {
          this.setState((state, props) => {
            return {
              currentText: data[currentIndex + 1].slice(0, i)
            }
          });
          if (i === index) {
            this.deleteText();
          }
        }, (i + 1) * 200);
      }
    } else {
      this.setState({ currentIndex: 0 });
      let index = data[0].length;
      for (let i = 0; i <= index; i++) {
        setTimeout(() => {
          this.setState((state, props) => {
            return {
              currentText: data[0].slice(0, i)
            }
          });
          if (i === index) {
            this.deleteText();
          }
        }, (i + 1) * 200);
      }
    }
  }

  render() {
    const { currentText } = this.state;
    return (
      <span className="TypeWriter">
        {currentText}
        <span>{' '}|</span>
      </span>
    );
  }
}
