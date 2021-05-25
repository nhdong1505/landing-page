import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import './styles.scss';
import { Reddit, Instagram, Telegram, Twitter, Discord, Facebook } from 'react-bootstrap-icons'

function Contact(props) {
    return (
        <Container fluid className="contact">
            <div className="d-flex flex-column align-items-center">
                <h2 class="contact-heading-title">Join our Community</h2>
                <p class="contact-box-text">Join our community to get the latest news and stay up to date. Also, we have the best memes!</p>
            </div>
            <div class="social-network">
                <div class="social-box">
                    <Telegram className="token-icon" />
                    <span>Telegram</span>
                </div>
                <div class="social-box">
                    <Twitter className="token-icon" />
                    <span>Twitter</span>
                </div>
                <div class="social-box">
                    <Reddit className="token-icon" />
                    <span>Reddit</span>
                </div>
                <div class="social-box">
                    <Discord className="token-icon" />
                    <span>Discord</span>
                </div>
                <div class="social-box">
                    <Instagram className="token-icon" />
                    <span>Instagram</span>
                </div>
                <div class="social-box">
                    <Facebook className="token-icon" />
                    <span>Facebook</span>
                </div>
            </div>
        </Container>
    )
}

Contact.propTypes = {

}

export default Contact