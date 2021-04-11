import React, { useEffect, useState } from 'react';

function Rock() {
    const [data, setData] = useState({});
    useEffect(() => {
        const getData = async () => {
            try {
                const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
                const datas = await fetchData.json();
                setData(datas);
            } catch (err) {
                console.log(err);
            }
        };
        getData();
    }, []);
    return <div>{data.title}</div>;
}

export default Rock;
