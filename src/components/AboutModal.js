import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

export default class AboutModal extends Component {
  render() {
    return (
      <div className="AboutModal">
        <Grid fluid>
          <Row>
            <Col md={6} className="AboutModal__info">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste repellendus quae et, consequatur non neque dolor, perspiciatis excepturi molestiae laboriosam soluta sed, harum nulla illum quos nisi repudiandae similique delectus.</p>
            </Col>
            <Col md={6} className="AboutModal__message">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis dolor cupiditate repellendus veritatis ipsam labore dolorum voluptates. Deserunt amet praesentium excepturi, facilis tenetur magnam doloremque, harum numquam, hic eius optio.</p>
            </Col>
          </Row>
        </Grid>
        <span
          onClick={() => this.props.onClose()}
          className="AboutModal__close"
        >
          Close
        </span>
      </div>
    );
  }
}
