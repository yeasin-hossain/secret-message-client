/* eslint-disable react/void-dom-elements-no-children */
import { Button, Col, Row } from 'antd';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SecretContext } from '../../../context/SecretContext';
import Messages from './Messages/Messages';

function ReadMessage({ userName }) {
    const { setUser } = useContext(SecretContext);
    const history = useHistory();
    const Logout = () => {
        localStorage.removeItem('user');
        setUser({});
        history.push('/auth/join');
    };
    console.log(userName);
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const isExistUser = async () => {
            try {
                const messagesData = await axios.get(
                    `${process.env.REACT_APP_API_URL}/message/${userName}`
                );
                if (messagesData.data.length !== 0) {
                    setMessages(messagesData.data);
                } else {
                    const error = new Error(`Sorry ${userName} Is Not Found`);
                    throw error;
                }
            } catch (err) {
                toast.error(err.message);
            }
        };
        isExistUser();
    }, [userName]);
    return (
        <div>
            <Row>
                <Col span={20} offset={4}>
                    <Button type="danger" onClick={Logout}>
                        Logout
                    </Button>

                    <ul className="list-group">
                        {messages.map((message, index) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <Messages key={index} message={message} />
                        ))}
                    </ul>
                </Col>
            </Row>
        </div>
    );
}

export default ReadMessage;
