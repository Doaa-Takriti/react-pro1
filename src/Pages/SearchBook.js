import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Row, Col, Form } from "react-bootstrap";
import { BsFilter } from "react-icons/bs";
import { Books } from "../Data";
import Part4 from "../components/Part4";


function SearchBook() {
    return (
        <div className='searchbook'>
            <div>
            </div>
            <div className='books'>
                <Container>

                    <Row>
                        <Col md={5}>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <div className="input-search">
                                        <Form.Control type="email" placeholder=" ISBN ابحث عن كتابك باستخدام الاسم المؤلف او " />
                                        <i class="fa fa-search"></i>
                                    </div>

                                </Form.Group>
                            </Form>
                        </Col>
                        <Col md={7}>
                            <div style={{ textAlign: 'left' }}>
                                <Button variant="light">تصفية <BsFilter /></Button>
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <Row className="rowbook">

                        {Books.map((book) => <Col xs={6} md={2} key={book.id}>
                            <img src={book.img} alt="" />
                        </Col>

                        )},




                    </Row>
                </Container>
            </div>
            <Part4 />



        </div>
    )
}

export default SearchBook