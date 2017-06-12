import React, { Component } from 'react';
import {
  Glyphicon,
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';
import scrollToElement from 'scroll-to-element';
import { CSSTransitionGroup } from 'react-transition-group';
import FontAwesome from 'react-fontawesome';

import HomeNavbar from './HomeNavbar';
import AboutModal from './AboutModal';
import TypeWriter from './TypeWriter';
import { BasicCard } from './common';

const HERO_SUBTITLES = [
  'websites',
  'mobile applications',
  'web applications',
]

class Home extends Component {
  constructor() {
    super();
    this.state = {
      isAbout: false,
      isServicesDisplayed: false
    }
  }
  render() {
    if (this.state.isAbout) {
      return (
        <CSSTransitionGroup
          transitionName="Home__about_modal"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}
        >
          <AboutModal onClose={() => this.setState({ isAbout: false })}/>
        </CSSTransitionGroup>
      )
    }

    return (
      <div className="Home">
        <HomeNavbar onAboutClick={() => this.setState({ isAbout: true })} />
        <section className="Home__hero fullheight">
          <div className="content">
            <h1 className="title">Hi, I'm Egemen Can Uze. I build</h1>
            <p className="subtitle">
              <span className="typewriter">
                <TypeWriter data={HERO_SUBTITLES} />
              </span>
            </p>
          </div>
          <div className="Home__hero_down_icon_container">
            <Glyphicon
              glyph="chevron-down"
              onClick={() => scrollToElement('.Home__services')}
            />
          </div>
        </section>
        <VisibilitySensor
          partialVisibility
          minTopValue={200}
          onChange={isVisible => {
            if (isVisible) {
              this.setState({ isServicesDisplayed: true });
            }
          }}
        >
          <section className="Home__services">
            <h2 className="Home__services_title">My Expertise</h2>
            <div className={this.state.isServicesDisplayed ? 'Home__services_container displayed' : 'Home__services_container'}>
              <Grid>
                <Row className="show-grid">
                  <Col md={4}>
                    <div className="Home__services_item" onClick={() => scrollToElement('.Home__mobile')}>
                      <BasicCard>
                        <FontAwesome
                          className='Home__services_icon Home__services_icon--mobile'
                          name='mobile-phone'
                        />
                        <h3 className="Home__services_item_title">MOBILE</h3>
                        <p className="Home__services_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                        <div className="Home__services_more">
                          <h6 className="Home__services_more_text">Learn More</h6>
                        </div>
                      </BasicCard>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="Home__services_item" onClick={() => scrollToElement('.Home__ui')}>
                      <BasicCard>
                        <FontAwesome
                          className='Home__services_icon Home__services_icon--ui'
                          name='laptop'
                        />
                        <h3 className="Home__services_item_title">WEB</h3>
                        <p className="Home__services_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                        <div className="Home__services_more">
                          <h6 className="Home__services_more_text">Learn More</h6>
                        </div>
                      </BasicCard>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="Home__services_item" onClick={() => scrollToElement('.Home__api')}>
                      <BasicCard>
                        <FontAwesome
                          className='Home__services_icon Home__services_icon--api'
                          name='code'
                        />
                        <h3 className="Home__services_item_title">API</h3>
                        <p className="Home__services_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                        <div className="Home__services_more">
                          <h6 className="Home__services_more_text">Learn More</h6>
                        </div>
                      </BasicCard>
                    </div>
                  </Col>
                </Row>
              </Grid>
            </div>
          </section>
        </VisibilitySensor>
        <VisibilitySensor
          partialVisibility
          minTopValue={100}
          onChange={isVisible => {}}
        >
          <section className="Home__mobile fullheight">
            <h2>Mobile</h2>
          </section>
        </VisibilitySensor>
        <section className="Home__ui fullheight">
          <h2>UI</h2>
        </section>
        <section className="Home__api fullheight">
          <h2>API</h2>
        </section>
        <section className="Home__work_with_me">
          <div className="Home__work_with_me_content">
            <h3>Let's work together</h3>
            <button>CONTACT</button>
            <div className="Home__work_with_me_social_container">
              abc
            </div>
          </div>

        </section>
      </div>
    );
  }
}

export default Home;
