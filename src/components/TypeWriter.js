import React, { Component } from 'react';

export default class TypeWriter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      currentText: props.data[0],
      timeouts: []
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
      this.setState((s, p) => {
        timeouts: s.timeouts.push(
          setTimeout(() => {
            this.setState((state, props) => {
              return {
                currentText: data[state.currentIndex].slice(0, index - i)
              }
            });
            if (i === index) {
              this.renderText();
            }
          }, (i + 1) * 200)
        )
      });
    }
  }

  renderText() {
    const { data } = this.props;
    const { currentIndex } = this.state;
    if (data.length > currentIndex + 1) {
      let index = data[currentIndex + 1].length;
      this.setState({ currentIndex: currentIndex + 1 });
      this.animateText(index, data[currentIndex + 1]);
    } else {
      this.setState({ currentIndex: 0 });
      let index = data[0].length;
      this.animateText(index, data[0]);
    }
  }

  animateText(index, text) {
    for (let i = 0; i <= index; i++) {
      this.setState((s, p) => {
        timeouts: s.timeouts.push(
          setTimeout(() => {
            this.setState((state, props) => {
              return {
                currentText: text.slice(0, i)
              }
            });
            if (i === index) {
              this.deleteText();
            }
          }, (i + 1) * 200)
        )
      });
    }
  }

  componentWillUnmount() {
    this.state.timeouts.forEach(t => {
      clearTimeout(t);
    });
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
