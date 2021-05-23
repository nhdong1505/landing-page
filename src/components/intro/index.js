import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import bodyImage from '../../common/imgs/sabakainu-full.png'
import './styles.scss';
import ButtonIcon from '../../components/buttonIcon'
import { CashCoin, GraphUp, FileEarmarkBarGraph } from 'react-bootstrap-icons'

function Intro(props) {
    return (
        <Container fluid className="intro">
            <div className="d-flex flex-column align-items-center">
                <img src={bodyImage} className="intro-img" />
                <h1 className="my-5">Earning money and helping dogs at the same time.</h1>
                <span className="my-3 intro-text2"> If you thought Shiba Inu had potential, wait till you see Sabaka Inu!</span>
                <Row>
                    <ButtonIcon rightIcon={CashCoin} classCustom="mr-5" label="Buy Token" />
                    <ButtonIcon rightIcon={GraphUp} classCustom="mr-5" label="Chart" />
                    <ButtonIcon rightIcon={FileEarmarkBarGraph} classCustom="mr-5" label="CscScan" />
                </Row>
            </div>
        </Container>
    )
}


export default Intro

