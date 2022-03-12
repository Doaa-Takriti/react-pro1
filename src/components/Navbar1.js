import React from 'react';
import { Navbar, Modal, Container, Nav, NavDropdown, Button, Row, Col, Form } from "react-bootstrap";
import { useState } from 'react';
import { Link } from "react-router-dom"



function Navbar1() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (


        <div>
            <Modal className="modal1 log-input" show={show} onHide={handleClose}>

                <Modal.Body>
                    <div>
                        <p className='text-center text-white'>قم بانشاء حساب جديد بسرعة وسهولة</p>
                        <Button variant="outline-secondary">سجل دخول باستخدام جوجل <img src="https://th.bing.com/th/id/OIP.Kar-WA2-6UJs1JE57nZv1wHaHa?pid=ImgDet&w=895&h=895&rs=1" alt="" /></Button>
                        <Button variant="outline-secondary">سجل دخول باستخدام فيسبوك</Button>
                        <div className="text-center before1">
                            <span></span>
                            <span className="text-white">أو باستخدام الايميل</span>
                            <span></span>
                        </div>
                        <Form>
                            <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="ألاسم" />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="البريد الالكتروني" />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="password" placeholder="كلمة السر" />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="password" placeholder="اعد كتابة كلمة السر" />

                            </Form.Group>
                            {['checkbox'].map((type) => (
                                <div key={type} className="mb-3">
                                    <Form.Check type={type} id={`check-api-${type}`}>
                                        <Form.Check.Input type={type} isValid />
                                        <Form.Check.Label className='text-white' style={{ fontSize: '12px' }}>{`بالنقر على انشاء حساب منك  توافق على الشروط وسياسات الموقع`}</Form.Check.Label>
                                    </Form.Check>
                                </div>
                            ))}
                            <Button type="submit" id="submit" variant="danger"> <i className="fa fa-sign-out ml-4"></i>انشاء حساب </Button>


                        </Form>
                    </div>
                </Modal.Body>

            </Modal>

            <div>
                <Navbar collapseOnSelect expand="lg" fixed="top" >
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">

                            <Nav>
                                <Nav.Link ><Link to="/" className="active"> الصفحة الرئيسية</Link></Nav.Link>
                                <Nav.Link to="/search"><Link to="/search">ابحث عن الكتب</Link></Nav.Link>

                                <Nav.Link to="/login"><Link to="/login">سجل دخول</Link></Nav.Link>

                                <Nav.Link eventKey={2} href="#memes">
                                    <Button variant="light" onClick={handleShow}>انشئ حساب</Button>              </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>


        </div>


    )
}

export default Navbar1