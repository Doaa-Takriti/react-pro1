import React from 'react';
import { Col, Row, Container, Button } from "react-bootstrap";


function Part2() {
    return (
        <div className="part2">
            <Container>
                <Row>
                    <Col xs={4}>
                        <div className="img-part2">
                            <img src="https://th.bing.com/th/id/R.3d18b693f9cc0a98ebab731122da2dca?rik=zuCy2VqmqE3cPg&pid=ImgRaw&r=0" alt="" />
                        </div>
                    </Col>
                    <Col xs={8}>
                        <div className="part22">
                            <p>هل فكرت من قبل في تبادل الكتب مغ قراءآخرون</p>
                            <p>الفكرة نفسها ممتعة وخصوصا عندما يقع هذا الشحصالذب نصحته بأن يقرأ كتابا من اختيارك في حب الكتاب</p>
                            <p>اذن فلماذا لا تقم بمشاركة كل كتبك المفضلة تلك مع آخرين مهتمون بالقراءة مثلك</p>
                            <Button>نحن نعلم انك تحب ذلك</Button>
                        </div>

                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default Part2