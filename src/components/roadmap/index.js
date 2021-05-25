import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import './styles.scss';
import ButtonIcon from '../../components/buttonIcon'

function Roadmap(props) {
    return (
        <Container className="roadmap" id= "roadmap-section" >
            <div className="d-flex flex-column align-items-center" >
                <h2 className="roadmap-heading-title">Roadmap</h2>
            </div>
            <ul className="timeline">
                <li>
                    <div className="timeline-badge"></div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4 className="timeline-title">Marketing & Operations</h4>
                        </div>
                    <div className="timeline-body">
                        <li>Presale & Initial Marketing</li>
                        <li>Sabaka release (18th of May)</li>
                        <li>Coin Market Cap & Coin Gecko listings</li>
                        <li>Promotions with influencers</li>
                        <li>Whitepaper & Audit</li>
                        <li>Token Airdrops</li>
                    </div>
                </div>
                </li>
                <li className="timeline-inverted">
                    <div className="timeline-badge"></div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4 className="timeline-title">Listings & Additional Releases</h4>
                         </div>
                        <div className="timeline-body">
                            <li>Centralized Exchange listings</li>
                            <li>Website Redesign</li>
                            <li>Additional Token releases</li>
                            <li>Ecosystem development</li>
                            <li>Official Sabaka Merch Store</li>                        
                        </div>
                    </div>
                </li>
                <li>
                    <div className="timeline-badge"></div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4 className="timeline-title">Charity & Endgame</h4>
                        </div>
                        <div className="timeline-body">
                            <li>Charity donations (Community chosen & Dev funded)</li>
                            <li>Token Airdrops</li>
                            <li>Marketing and Social Campaigns</li>
                            <li>NFT Marketplace</li>                        
                        </div>
                    </div>
                </li>
            </ul>
        </Container>
    )
}

Roadmap.propTypes = {

}

export default Roadmap