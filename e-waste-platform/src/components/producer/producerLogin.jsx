import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
<<<<<<< HEAD
import './producer.css'
=======
import './producer.css';

>>>>>>> 0bccefa9fae6fa746fc8ff5c1575cb7f1e0ac575
const Login = () => {
    return (
        <div className="login-background">
            <Container>
                <Row className="justify-content-center">
                    <Col md={6} lg={4}>
                        <div className="login-form">
                            <h3 className="text-center">Sign In</h3>
                            <Form>
                                <Form.Group controlId="formEmail">
                                    <Form.Control type="email" placeholder="Email or mobile number" />
                                </Form.Group>

                                <Form.Group controlId="formPassword" className="mt-3">
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Button variant="danger" type="submit" className="mt-4 w-100">
                                    Sign In
                                </Button>

                                <div className="text-center mt-3">
                                    <Button variant="link" className="text-secondary">Use a sign-in code</Button>
                                </div>
                                <div className="text-center mt-3">
                                    <a href="#" className="text-secondary">Forgot password?</a>
                                </div>

                                <Form.Group controlId="formRememberMe" className="mt-3">
                                    <Form.Check type="checkbox" label="Remember me" />
                                </Form.Group>

                                <div className="text-center mt-3">
                                    <span>New to Netflix? <a href="#" className="text-light">Sign up now.</a></span>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
<<<<<<< HEAD
=======

>>>>>>> 0bccefa9fae6fa746fc8ff5c1575cb7f1e0ac575
