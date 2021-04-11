import React from 'react';
import ReadMessage from '../Components/Home/ReadMessage';
import WriteMessage from '../Components/Home/WriteMessage';

function Home() {
    const user = false;
    return (
        <div>
            <div>{user ? <ReadMessage /> : <WriteMessage />}</div>
        </div>
    );
}

export default Home;
