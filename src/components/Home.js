import React, { Component } from 'react';
import HomeNavbar from './HomeNavbar';
import AboutModal from './AboutModal';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      isAbout: false
    }
  }
  render() {
    if (this.state.isAbout) {
      return <AboutModal onClose={() => this.setState({ isAbout: false })}/>
    }

    return (
      <div className="Home">
        <HomeNavbar onAboutClick={() => this.setState({ isAbout: true })} />
        <section className="Home__hero fullheight">
          <h1 className="Home__hero_title">Home</h1>
        </section>
        <section className="Home__native fullheight">
          <h2>React Native</h2>
        </section>
      </div>
    );
  }
}

export default Home;
