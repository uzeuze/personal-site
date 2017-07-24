import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  Glyphicon,
  Form,
  FormControl,
  FormGroup,
  Button
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

export default class AboutModal extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  }

  handleChange(key, e) {
    console.log(key, e);
    this.setState({ [key]: e.target.value });
  }

  isFormValid() {
    const { name, email, message } = this.state;
    if ( name && email && message) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="AboutModal">
        <Grid fluid>
          <Row>
            <Col md={6} className="AboutModal__info">
              <div className="AboutModal__info_content">
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
                  <a href="https://github.com/uzeuze" target="_blank">
                    <FontAwesome
                      className='AboutModal__contact_icon'
                      name='github'
                      size='4x'
                    />
                  </a>
                  <a href="https://www.linkedin.com/in/egemen-can-üze-44512847" target="_blank">
                    <FontAwesome
                      className='AboutModal__contact_icon'
                      name='linkedin'
                      size='4x'
                    />
                  </a>
                  <a href="mailto:egemencanuze@gmail.com?Subject=Hello" target="_top">
                    <FontAwesome
                      className='AboutModal__contact_icon'
                      name='envelope-o'
                      size='4x'
                    />
                  </a>
                </div>
              </div>
            </Col>
            <Col md={6} className="AboutModal__message">
              <div className="AboutModal__message_content">
                <h2 className="AboutModal__message_header">Want to work together?</h2>
                <Form action="https://formspree.io/egemencanuze@gmail.com" method="POST">
                  <FormControl
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={e => this.handleChange('name', e)}
                  />
                  <FormControl
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={e => this.handleChange('email', e)}
                  />
                  <FormControl
                    componentClass="textarea"
                    name="message"
                    placeholder="Write your message..."
                    value={this.state.message}
                    onChange={e => this.handleChange('message', e)}
                  />
                  <Button
                    className="AboutModal__message_button"
                    type="submit"
                    value="send"
                    disabled={!this.isFormValid()}
                  >
                    SEND MESSAGE
                  </Button>
                </Form>
              </div>
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
