/* eslint-disable no-multi-assign */
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SecretContext } from '../../context/SecretContext';
import { yupLoginUser, yupUserName, yupUserSchema } from '../../yupValidation/yupValidation';
import LoginForm from './LoginForm';
import TestLogin from './TestLogin';

const Join = () => {
    console.log(process.env);
    const [loginToggle, setLoginToggle] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: '',
        userName: '',
        password: '',
    });

    const [loginUserData, setLoginUserData] = useState({
        userName: '',
        password: '',
    });
    const history = useHistory();
    const { setUser, setLoggedIn } = useContext(SecretContext);

    // Check User available or not
    const isExistUser = async (e) => {
        try {
            const userName = e.target.value.split(' ').join('').toLowerCase();
            await yupUserName.validate(
                { userName },
                {
                    abortEarly: false,
                }
            );
            const user = await axios.get(
                `${process.env.REACT_APP_API_URL}/user/userName/${userName}`
            );
            if (user.data.length === 0) {
                setUserInfo({ ...userInfo, userName });
            } else {
                const error = new Error(`${userName} Is Already Taken`);
                throw error;
            }
        } catch (err) {
            toast.error(err.message);
        }
    };

    // Sign Up System
    const newUser = async (e) => {
        e.preventDefault();
        try {
            const validate = await yupUserSchema.isValid(userInfo, {
                abortEarly: false,
            });
            if (!validate) {
                const error = new Error(`All felid Is Required`);
                throw error;
            }
            const savedUser = await axios.post(
                `${process.env.REACT_APP_API_URL}/user/newUser`,
                userInfo
            );

            // eslint-disable-next-line no-unused-expressions
            savedUser.status === 200 && toast.success('savedUser successfully');
        } catch (err) {
            toast.error(err.message);
        }
    };

    // eslint-disable-next-line consistent-return
    const loginUser = async (e) => {
        e.preventDefault();
        try {
            const validate = await yupLoginUser.isValid(loginUserData, {
                abortEarly: false,
            });
            if (!validate) {
                return toast.error('Invalid Credential');
            }
            const loggedUser = await axios.post(
                `${process.env.REACT_APP_API_URL}/user/loginUser`,
                loginUserData
            );
            if (loggedUser.data.user) {
                toast.dark(`Welcome ${loggedUser.data?.user.name}🦄`);
                localStorage.setItem('user', JSON.stringify(loggedUser.data.user));
                setUser(loggedUser.data.user);
                setLoggedIn(true);
                history.push(`/${loggedUser.data.user.userName}`);
            } else {
                return toast.error(loggedUser.data?.message);
            }
        } catch (err) {
            console.log(err);
            // toast.error(err.message);
        }
    };

    return (
        <div className="container mt-5">
            {loginToggle ? (
                <LoginForm
                    loginUser={loginUser}
                    setLoginUserData={setLoginUserData}
                    loginUserData={loginUserData}
                />
            ) : (
                <form onSubmit={newUser}>
                    <div className="mb-3 row">
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control-plaintext"
                                id="staticName"
                                placeholder="Enter Full Name"
                                value={userInfo.name}
                                onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                            />
                        </div>
                    </div>
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
                                onChange={(e) =>
                                    setUserInfo({ ...userInfo, password: e.target.value })
                                }
                            />
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit">
                        Join
                    </button>
                </form>
            )}
            {loginToggle ? (
                <button
                    className="btn btn-warning mt-3"
                    type="button"
                    onClick={() => setLoginToggle(!loginToggle)}
                >
                    Signup
                </button>
            ) : (
                <button
                    className="btn btn-warning mt-3"
                    type="button"
                    onClick={() => setLoginToggle(!loginToggle)}
                >
                    Login
                </button>
            )}
            <TestLogin
                loginUser={loginUser}
                setLoginUserData={setLoginUserData}
                loginUserData={loginUserData}
            />
        </div>
    );
};

export default Join;
