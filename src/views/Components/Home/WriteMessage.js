import axios from 'axios';
import React, { useState } from 'react';
import * as yup from 'yup';

function WriteMessage({ userName }) {
    const [message, setMessage] = useState({ message: '' });

    const submitMessage = async (e) => {
        e.preventDefault();
        const messageSchema = yup.object().shape({
            message: yup.string().max(400).required({ error: 'This Felid is required' }),
        });

        try {
            await messageSchema.validate(message, {
                abortEarly: false,
            });
            const savedMessage = await axios.post(
                `${process.env.REACT_APP_API_URL}/message/${userName}`,
                message
            );
            console.log(savedMessage);
            setMessage({ message: '' });
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <h1 className="my-2">Write A Message For Your Dear!</h1>
            <form onSubmit={submitMessage}>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        value={message.message}
                        onChange={(e) => setMessage({ message: e.target.value })}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    );
}

export default WriteMessage;
