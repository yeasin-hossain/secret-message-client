import React from 'react';

function LoginForm({ loginUser, setLoginUserData, loginUserData }) {
    return (
        <div>
            <form onSubmit={loginUser}>
                <div className="mb-3 row">
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control-plaintext"
                            id="staticUser"
                            placeholder="Enter User Name"
                            name="userName"
                            value={loginUserData?.userName || ''}
                            onChange={(e) =>
                                setLoginUserData({ ...loginUserData, userName: e.target.value })
                            }
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-sm-10">
                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword"
                            value={loginUserData?.password}
                            onChange={(e) =>
                                setLoginUserData({ ...loginUserData, password: e.target.value })
                            }
                        />
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">
                    Join
                </button>
            </form>
        </div>
    );
}

export default LoginForm;
