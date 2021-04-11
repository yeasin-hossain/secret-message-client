import React from 'react';

const Join = () => {
    const newUser = async (e) => {
        e.preventDefault();
        console.log(e);
    };
    return (
        <div className="container mt-5">
            <form onSubmit={newUser}>
                <div className="mb-3 row">
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control-plaintext"
                            id="staticEmail"
                            placeholder="email@example.com"
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
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword" />
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
