import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import './styles.scss';
import { CartFill, Coin, WalletFill } from 'react-bootstrap-icons'

function Tokenomic(props) {
    return (
        <Container fluid className="token" id="token-section">
            <div className="d-flex flex-column align-items-center">
                <h2 className="token-heading-title">Tokenomics</h2>
            </div>
            <div className="token-box">
                <div className="token-box-item">
                    <CartFill className="token-icon" />
                    <h3 className="token-box-icon-title">
                    <span>Supply</span>
                    <p className="token-box-text">1,000,000,000,000,000 tokens</p>
                    </h3>
                </div>
                <div className="token-box-item">
                    <Coin className="token-icon" />
                    <h3 className="token-box-icon-title">
                    <span>Automatic Liquidity</span>
                    <p className="token-box-text">5%</p>
                    </h3>
                </div>
                <div className="token-box-item">
                    <WalletFill className="token-icon" />
                    <h3 className="token-box-icon-title">
                    <span>Redistribution</span>
                    <p className="token-box-text">5%</p>
                    </h3>    
                </div>
            </div>    
        </Container>
    )
}

Tokenomic.propTypes = {

}

export default Tokenomic