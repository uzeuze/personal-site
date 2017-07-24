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
import responsiveWebImage from '../assets/web-responsive.png';
import apiStackWebImage from '../assets/api-stack.png';
import reactNativeImage from '../assets/react-native.png';

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
                <Row>
                  <Col md={4}>
                    <div className="Home__services_item" onClick={() => scrollToElement('.Home__mobile')}>
                      <BasicCard>
                        <FontAwesome
                          className='Home__services_icon Home__services_icon--mobile'
                          name='mobile-phone'
                        />
                        <h3 className="Home__services_item_title">MOBILE</h3>
                        <p className="Home__services_description">I build native mobile applications for iOS and Android using React Native.</p>
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
                        <p className="Home__services_description">I create interactive user interfaces using HTML, CSS, JavaScript and React.</p>
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
                        <p className="Home__services_description">I develop database-backed APIs that can be consumed by web applicaions or other native applications.</p>
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
            <Grid>
              <Row>
                <Col md={6} className="Home__col">
                  <div className="Home__mobile_text_container">
                    <h3>MOBILE APPLICATIONS</h3>
                    <p>I build native mobile applications for iOS and Android using React Native.</p>
                  </div>
                </Col>
                <Col xsHidden smHidden md={6} className="Home__col">
                  <img height={300} src={reactNativeImage} alt="react native"/>
                </Col>
              </Row>
            </Grid>
          </section>
        </VisibilitySensor>
        <section className="Home__ui fullheight">
          <Grid>
            <Row>
              <Col md={6} className="Home__col">
                <div>
                  <h3>WEB APPLICATIONS</h3>
                  <p>I create interactive user interfaces using HTML, CSS, JavaScript and React.</p>
                </div>
              </Col>
              <Col xsHidden smHidden md={6} className="Home__col">
                <img src={responsiveWebImage} alt="responsive design"/>
              </Col>
            </Row>
          </Grid>
        </section>
        <section className="Home__api fullheight">
          <Grid>
            <Row>
              <Col xsHidden smHidden md={6} className="Home__col">
                <img src={apiStackWebImage} alt="nodejs express mongodb"/>
              </Col>
              <Col md={6} className="Home__col">
                <div>
                  <h3>API DEVELOPMENT</h3>
                  <p>I develop database-backed APIs that can be consumed by web applicaions or other native applications.</p>
                </div>
              </Col>
            </Row>
          </Grid>
        </section>
        <section className="Home__work_with_me">
          <div className="Home__work_with_me_content">
            <h3 className="Home__work_with_me_header">Let's work together</h3>
            <a
              className="Home__work_with_me_button"
              onClick={() => this.setState({ isAbout: true })}
            >
              CONTACT
            </a>
          </div>

        </section>
      </div>
    );
  }
}

export default Home;
