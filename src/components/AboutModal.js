import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  Glyphicon,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

export default class AboutModal extends Component {
  render() {
    return (
      <div className="AboutModal">
        <Grid fluid>
          <Row>
            <Col md={6} className="AboutModal__info">
              <h2>EGEMEN CAN UZE</h2>
              <p>Software Engineer</p>
              <h3>ABOUT ME</h3>
              <p>
                Hello, I'm a fullstack JavaScript developer living in Aachen, Germany.
                My field of expertise is the development of complex applications with JavaScript.
                I love creating beautiful and usable digital products.
              </p>
              <p>Feel free to contact me.</p>
              <div className="AboutModal__contact_links_container">
                <FontAwesome
                  className='AboutModal__contact_icon'
                  name='github'
                  size='4x'
                />
                <FontAwesome
                  className='AboutModal__contact_icon'
                  name='linkedin'
                  size='4x'
                />
                <FontAwesome
                  className='AboutModal__contact_icon'
                  name='envelope-o'
                  size='4x'
                />
              </div>
            </Col>
            <Col md={6} className="AboutModal__message">
              <h2>Want to work together?</h2>
              <Form>
                <FormControl type="text" placeholder="Name" />
                <FormControl type="email" placeholder="Email" />
                <FormControl componentClass="textarea" placeholder="Write your message..." />
                <Button>
                  SEND MESSAGE
                </Button>
              </Form>
            </Col>
          </Row>
        </Grid>
        <Glyphicon
          glyph="remove"
          className="AboutModal__close"
          onClick={() => this.props.onClose()}
        />
      </div>
    );
  }
}
