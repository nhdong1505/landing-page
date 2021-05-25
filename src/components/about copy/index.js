import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types'
import './styles.scss'
function About(props) {
    return (
        <Container fluid className="about">
            <Row class="elementor-shape" data-negative="true">
			    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
	                <path class="elementor-shape-fill" d="M806,94.7C619.5,90,500,20.3,500,1.7c-1,18.6-117.5,88.3-306,93C92,97.2,0,97.9,0,97.9v-0l0,0v2.3h1000v-2.3 C1000,97.7,920.3,97.6,806,94.7z M350,65.1L350,65.1L350,65.1L350,65.1z"></path>
                </svg>
		    </Row>
            <Row className="box">
                <div className="box-item">
                    <h2 class="elementor-heading-title">What is Sabaka Inu?</h2>
                </div>
                <div className="box-item">
                    <p class="text-data"><b>Sabaka Inu (Russian: </b>Собака Ину<b>) is one of the first charity tokens on the BSC. Every single transaction has a 5% automatic liquidity protocol and a 5% redistribution protocol to protect holders. This protocol pairing increases the value of each holder’s investment over time.</b></p>
                    <p class="text_2">All dogs deserve a home. Unfortunately, not all dogs have a home. Our token was created to help homeless dogs – each month we will donate a % of tokens to a charity chosen by the community.</p>
                </div>
            </Row>
            <Row className="contract-addr">
                <h2 class="addr">Contract address: 0xc30f12cd65f61ded24db6c415c84f999c9704ebc</h2>
            </Row>
        </Container>
    )
}

About.propTypes = {

}

export default About

