import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import { Container, Form, Col, Row, Alert } from 'react-bootstrap'
import ButtonIcon from '../buttonIcon'
import { db } from '../../firebase'
function Contact(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [typeAlert, setTypeAlert] = useState('success')
    const [notiMessage, setNotiMessage] = useState('sent contact success')
    useEffect(() => {
        // db.collection('contacts').add({
        //     name: "dong",
        //     email: "nhdong",
        //     message: "messsss"
        // }).then(() => {
        //     console.log("add done")
        // }).catch((err) => {
        //     console.log("add error", err)
        // })
        console.log("test")
    }, [])

    const onChange = (e, type) => {
        const value = e.target.value
        switch (type) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            default:
                setMessage(value);
        }
    }

    const onSubmit = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false)
        }, 2000)
        if (name === '' || email === '' || message === '') {
            setTypeAlert('danger');
            setNotiMessage('please fill all input!')
            setShowAlert(true);
        } else {
            setTypeAlert('success');
            setNotiMessage('sent contact success!')
            setShowAlert(true);
            setName('');
            setEmail('');
            setMessage('');
        }
        console.log("form:", name, email, message)
    }
    return (
        <Container fluid className="contact-form">
            <Alert variant={typeAlert} className="form-alert" show={showAlert}  >
                {notiMessage}
            </Alert>
            <Row className="align-items-center">
                <Col sm={{ span: 3, offset: 2 }} className="title-form d-flex flex-column align-items-end" >
                    <div className="title-form--line1">Contact Sabaka</div>
                    <div>
                        If you have any suggestions or would like to join our team  , please send us a message!
                    </div>
                </Col>
                <Col lg="5" md="6">
                    <Form   >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter Name" value={name} onChange={(value) => { onChange(value, 'name') }} />
                            <Form.Text className="text-muted">
                                Please enter here
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email </Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(value) => { onChange(value, 'email') }} />
                            {/* <Form.Text className="text-muted">
                                don't empty here
                        </Form.Text> */}
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Messenger</Form.Label>
                            <Form.Control type="message" placeholder="Enter Messenger" value={message} onChange={(value) => { onChange(value, 'message') }} />
                            {/* <Form.Text className="text-muted">
                                don't empty here
                        </Form.Text> */}
                        </Form.Group>
                        <ButtonIcon label="Send" onClick={onSubmit} type="submit" />
                    </Form>
                </Col>
            </Row>
        </Container >
    )
}

Contact.propTypes = {

}

export default Contact

