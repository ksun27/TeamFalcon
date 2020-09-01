import React from 'react';
import { Container, Form, Col, Button, Card } from "../../node_modules/react-bootstrap";
import {Link} from "react-router-dom";
import { ROUTES } from "../routes";
import "bootstrap/dist/css/bootstrap.css";
import "../css/personal_info.css";

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  date: '',
  location: '',
  error: null,
};

class Personal_info extends React.Component{

  constructor(props){
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { ...INITIAL_STATE } = this.state;

    event.preventDefault();
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      date,
      location,
      error,
    } = this.state;

    const isInvalid =
    firstName === '' || lastName === '' ||
    email === '' || date === '' || location === '';

    return(

      <React.Fragment>
      
      <Container>
          <Card style={{padding: '20px'}}>
          <h1 class= "title">Let's get some information (?)</h1>
          <Form onSubmit={this.onSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label class="font-weight-bold">First Name</Form.Label>
              <Form.Control 
                  name="firstName"
                  value={firstName}
                  onChange={this.handleChange}
                  type="text" 
              />
            </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label class="font-weight-bold">Last Name</Form.Label>
              <Form.Control 
                  name="lastName"
                  value={lastName}
                  onChange={this.handleChange}
                  type="text"
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridEmailAddress">
            <Form.Label class="font-weight-bold">Email Address</Form.Label>
            <Form.Control
                name="email"
                value={email}
                onChange={this.handleChange}
                type="email"
            />
          </Form.Group>

          <Form.Group controlId="formGridDateOfBirth">
            <Form.Label class="font-weight-bold">Date of Birth</Form.Label>
            <Form.Control 
                name="date"
                value={date}
                onChange={this.handleChange}
                type="date" 
                placeholder= "YYYY-MM-DD" 
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridZipCode">
              <Form.Label class="font-weight-bold">Location</Form.Label>
              <Form.Control 
                name="location"
                value={location}
                onChange={this.handleChange}
                type="text"
                placeholder="Zip Code" 
                maxLength={6}
              />
          </Form.Group>
          </Form.Row>
          
          <div class="text-center">
            <Link to={ROUTES.SYMPTOMS}>
              <Button 
                      disabled={isInvalid}
                      class="text-center" 
                      onClick={() => {
                        console.log("The button has been clicked");
                        localStorage.setItem('age', this.state.date.substring(0, 3));
                      }}
                      variant="primary" 
                      type="submit">
                Next: Select Symptoms
              </Button>
              {error && <p>{error.message}</p>}
            </Link>
          </div>
        </Form>
        </Card>
      
      </Container>
    </React.Fragment>
    ); 
  }
}



export default Personal_info