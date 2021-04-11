import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { yupUserName, yupUserSchema } from '../../yupValidation/yupValidation';

const Join = () => {
    const [userInfo, setUserInfo] = useState({});
    const isExistUser = async (e) => {
        try {
            const userName = e.target.value.split(' ').join('').toLowerCase();
            await yupUserName.validate(
                { userName },
                {
                    abortEarly: false,
                }
            );
            const user = await axios.get(`http://localhost:5000/user/userName/${userName}`);
            if (user.data.length === 0) {
                setUserInfo({ ...userInfo, userName });
            } else {
                const error = new Error('This UserName Already Taken');
                throw error;
            }
        } catch (err) {
            toast.error(err.message);
        }
    };

    const newUser = async (e) => {
        e.preventDefault();
        try {
            await yupUserSchema.validate(userInfo, {
                abortEarly: false,
            });
            const savedUser = await axios.post(`http://localhost:5000/user/newUser`, userInfo);
            console.log(savedUser);
        } catch (err) {
            toast.error(err.message);
        }
    };
    return (
        <div className="container mt-5">
            <form onSubmit={newUser}>
                <div className="mb-3 row">
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control-plaintext"
                            id="staticUser"
                            placeholder="Enter User Name"
                            onBlur={isExistUser}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-sm-10">
                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword"
                            onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
                        />
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">
                    Join
                </button>
            </form>
        </div>
    );
};

export default Join;
