import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SecretContext } from '../../../context/SecretContext';

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
                // await yupUserName.validate(
                //     { userName },
                //     {
                //         abortEarly: false,
                //     }
                // );
                const messagesData = await axios.get(
                    `https://shanto-message.herokuapp.com/message/${userName}`
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
            <button className="btn btn-danger" type="button" onClick={Logout}>
                Logout
            </button>
            <ul className="list-group">
                {messages.map((message, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={index}>{message.message}</li>
                ))}
            </ul>
        </div>
    );
}

export default ReadMessage;
