import React from 'react';
import { useState } from 'react';
import Navbar1 from "../components/Navbar1";


import { Navbar, Modal, Container, Nav, NavDropdown, Button, Row, Col, Form } from "react-bootstrap";


function Login() {

    return (
        <div className="login">
            <div className='log-input'>
                <Container>
                    <Row>
                        <Col md={4}>
                            <div>
                                <p className='text-center'>بدل كتابك واحصل على اصدقاء جدد</p>
                                <Button variant="outline-secondary">سجل دخول باستخدام جوجل <img src="https://th.bing.com/th/id/OIP.Kar-WA2-6UJs1JE57nZv1wHaHa?pid=ImgDet&w=895&h=895&rs=1" alt="" /></Button>
                                <Button variant="outline-secondary">سجل دخول باستخدام فيسبوك</Button>
                                <div className="text-center before1">
                                    <span></span>
                                    <span>أو باستخدام الايميل</span>
                                    <span></span>
                                </div>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>ايميل</Form.Label>
                                        <Form.Control type="email" placeholder="doaa@gmail.com" />

                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>باسوورد</Form.Label>
                                        <Form.Control type="password" placeholder="doaa@gmail.com" />

                                    </Form.Group>
                                    <Button type="submit" id="submit" variant="outline-secondary"> سجل دخول</Button>
                                    <p style={{ textAlign: 'right', fontSize: '12px', color: 'grey' }}> ؟هل نسيت كلمة السر</p>
                                    <p style={{ fontSize: '12px', fontWeight: '500' }} className='text-center'>هل تمتلك حساب؟ <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>سجل الآن</span></p>

                                </Form>
                            </div>
                        </Col>
                        <Col md={8} style={{ display: 'flex', alignItems: 'center' }}>
                            <div >
                                <img src="https://th.bing.com/th/id/R.6dc0510dddb9379251da9bdc3729f694?rik=WZQbXAb4znFA9A&pid=ImgRaw&r=0"
                                    style={{ width: '100%', objectFit: 'cover', }} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Login