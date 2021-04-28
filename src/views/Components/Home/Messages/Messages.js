import React from 'react';
import { Card } from 'react-bootstrap';

function Messages({ message }) {
    const { date, message: msg } = message;
    console.log(message);
    return (
        <Card className="m-2">
            <Card.Header as="h5">{date}</Card.Header>
            <Card.Body>
                <Card.Title>{msg}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default Messages;
