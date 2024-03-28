import React from 'react';
import axios from 'axios';
import { Container, Col } from 'react-bootstrap';
import Contact from './Contact';

export default class ContactList extends React.Component {
    state = {
        contacts: []
    }

    componentDidMount() {
        this.getCustomers();
    }

    getCustomers() {
        axios.get('http://localhost:3000/contact')
        .then(res => {
            const contacts = res.data;
            this.setState({contacts});
        })
    }

    render() {
        return (
            <Container>
                <h1>Contact List</h1>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                {
                    this.state.contacts.map(contact => 
                        <Col key={contact._id} className="mb-3">
                            <Contact
                                firstname={contact.firstname}
                                lastname={contact.lastname}
                                email={contact.email} 
                            />
                        </Col>
                    )
                }
                </div>
{/* 
                <table>

                </table> */}
            </Container>
        )
    }
}