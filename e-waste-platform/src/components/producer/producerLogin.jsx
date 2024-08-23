import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


import './producerLogin.css';

const ProducerLogin = () => {
    const navigate = useNavigate(); // Update here
    const handleProducerReg = () => {
        navigate('/reg-producer');
    };


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
                                
                                
                                

                            </Form>
                            <div className='icons'>   
                        
                                         <img src='google.svg' alt='google' className='image'/>
                                         <img src='apple.svg' alt='google' className='image'/>
                                         <img src='facebook.svg' alt='google' className='image'/>
                                </div>

                                <div className="text-center mt-3">
                                    <Button variant="link" className="text-secondary">Use a sign-in code</Button>
                                </div>
                                <div className="text-center mt-3">
                                    <a href="#" className="text-secondary">Forgot password?</a>
                                </div>

                                

                                <div className="text-center mt-3">
                                    <span>New to E-Waste <a href="#" className="text-light" onClick={handleProducerReg}>  Sign up now.</a></span>
                                </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProducerLogin;
