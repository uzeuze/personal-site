import React, { Component } from 'react';
import HomeNavbar from './HomeNavbar';
import AboutModal from './AboutModal';
import TypeWriter from './TypeWriter';

const HERO_SUBTITLES = [
  'MOBILE',
  'UI/UX',
  'FULLSTACK'
]

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
          <div className="content">
            <h1 className="title">Home</h1>
            <h2 className="subtitle">
              <span className="typewriter">
                <TypeWriter data={HERO_SUBTITLES} />
              </span>
            </h2>
          </div>
        </section>
        <section className="Home__native fullheight">
          <h2>React Native</h2>
        </section>
      </div>
    );
  }
}

export default Home;
