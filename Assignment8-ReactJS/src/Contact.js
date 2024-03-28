import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { ReactComponent as EnvelopeFill } from 'bootstrap-icons/icons/envelope-fill.svg';

export default class Contact extends React.Component {
    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{this.props.firstname} {this.props.lastname}</Card.Title>
                    <a href={'mailto:' + this.props.email}>
                        <Button variant="primary"><EnvelopeFill /> Email</Button>
                    </a>
                </Card.Body>
            </Card>
        )
    }
}