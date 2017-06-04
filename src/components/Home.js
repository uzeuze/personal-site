import React, { Component } from 'react';
import {
  Glyphicon,
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';

import HomeNavbar from './HomeNavbar';
import AboutModal from './AboutModal';
import TypeWriter from './TypeWriter';
import { BasicCard } from './common';

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
          <div className="Home__hero_down_icon_container">
            <Glyphicon glyph="chevron-down" />
          </div>
        </section>
        <VisibilitySensor
          partialVisibility
          minTopValue={100}
          onChange={isVisible => console.log(`Visible ${isVisible}`)}
        >
          <section className="Home__services">
            <h2 className="Home__services_title">My Expertise</h2>
            <Grid>
              <Row className="show-grid">
                <Col xs={4}>
                  <Link to="/">
                    <BasicCard>
                      <i className="icon-mobile-phone Home__services_icon Home__services_icon--mobile"></i>
                      <h3 className="Home__services_item_title">MOBILE</h3>
                      <p className="Home__services_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                      <div className="Home__services_more">
                        <h6 className="Home__services_more_text">Learn More</h6>
                      </div>
                    </BasicCard>
                  </Link>
                </Col>
                <Col xs={4}>
                  <Link to="/">
                    <BasicCard>
                      <i className="icon-laptop Home__services_icon Home__services_icon--ui"></i>
                      <h3 className="Home__services_item_title">UI</h3>
                      <p className="Home__services_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                      <div className="Home__services_more">
                        <h6 className="Home__services_more_text">Learn More</h6>
                      </div>
                    </BasicCard>
                  </Link>
                </Col>
                <Col xs={4}>
                  <Link to="/">
                    <BasicCard>
                      <i className="icon-code Home__services_icon Home__services_icon--api"></i>
                      <h3 className="Home__services_item_title">API</h3>
                      <p className="Home__services_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                      <div className="Home__services_more">
                        <h6 className="Home__services_more_text">Learn More</h6>
                      </div>
                    </BasicCard>
                  </Link>
                </Col>
              </Row>
            </Grid>
          </section>
        </VisibilitySensor>
        <VisibilitySensor
          partialVisibility
          minTopValue={100}
          onChange={isVisible => console.log(`Visible ${isVisible}`)}
        >
          <section className="Home__native fullheight">
            <h2>React Native</h2>
          </section>
        </VisibilitySensor>
        <section className="Home__web fullheight">
          <h2>Web</h2>
        </section>
        <section className="Home__work_with_me fullheight">
          <h2>Do you have a project</h2>
        </section>
        <section className="Home__footer fullheight">
          <h2>Footer</h2>
        </section>
      </div>
    );
  }
}

export default Home;
