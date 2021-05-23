import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import './styles.scss'
import logoIcon from '../../common/imgs/sabakainu.png'
import { InfoCircleFill, App, SignpostSplit, PersonLinesFill } from 'react-bootstrap-icons';

function Header(props) {
    return (
        <Container fluid className="header" >
            <Row className="align-items-center">
                <Col sm={{ span: 3 }}>
                    <Row className="align-items-center">
                        <Col className="col-3 col-sm-4"  >
                            <img src={logoIcon} alt="logo" width={"70%"} />
                        </Col>
                        <Col sm={8}><h1 className="title">Sabaka</h1></Col>
                    </Row>

                </Col>
                <Col sm={{ offset: 3 }} className="menu">
                    <Row className="align-items-center" >
                        <Col className="col-sm-auto menu--item">
                            <Row className="align-items-center" >
                                <InfoCircleFill className="menu--icon" />
                                <span>About</span>
                            </Row>
                        </Col>
                        <Col className="col-sm-auto menu--item">
                            <Row className="align-items-center">
                                <App className="menu--icon" />
                                <span>TokenNomic</span>
                            </Row>
                        </Col>
                        <Col className="col-sm-auto menu--item">
                            <Row className="align-items-center">
                                <SignpostSplit className="menu--icon" />
                                <span>RoadMap</span>
                            </Row>
                        </Col>
                        <Col className="col-sm-auto menu--item">
                            <Row className="align-items-center">
                                <PersonLinesFill className="menu--icon" />
                                <span>Contact</span>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Header

