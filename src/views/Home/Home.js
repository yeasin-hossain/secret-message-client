import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SecretContext } from '../../context/SecretContext';
import ReadMessage from '../Components/Home/ReadMessage';
import WriteMessage from '../Components/Home/WriteMessage';

function Home() {
    // const user = false;
    const { isLoggedIn } = useContext(SecretContext);
    const { userName } = useParams();
    const [existUser, setExistUser] = useState(false);
    useEffect(() => {
        const isExistUser = async () => {
            try {
                // await yupUserName.validate(
                //     { userName },
                //     {
                //         abortEarly: false,
                //     }
                // );
                const user = await axios.get(
                    `https://shanto-message.herokuapp.com/user/userName/${userName}`
                );
                if (user.data.length !== 0) {
                    setExistUser(true);
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
    console.log(isLoggedIn);
    return (
        <div>
            <Link to="/auth/join" className="btn btn-info">
                Join
            </Link>
            {existUser ? (
                <div>
                    {isLoggedIn ? (
                        <ReadMessage userName={userName} />
                    ) : (
                        <WriteMessage userName={userName} />
                    )}
                </div>
            ) : (
                <h1>Sorry</h1>
            )}
        </div>
    );
}

export default Home;
