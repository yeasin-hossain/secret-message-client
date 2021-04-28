import React from 'react';
import { Card } from 'react-bootstrap';

function Messages({ message }) {
    const { date, message: msg } = message;
    const newDate = new Date(date);
    return (
        <Card className="m-2">
            <Card.Header as="h5">{newDate.toString().slice(0, 10)}</Card.Header>
            <Card.Body>
                <Card.Title>{msg}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default Messages;
