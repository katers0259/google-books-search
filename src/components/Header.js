import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Header() {
    return (
        <div>
            <Container>
                <Row>
                    <Col > <header>
                        <h1> Books</h1>
                    </header>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header
