import axios from 'axios';
import { useState } from 'react';

const useApi = (type, url, urlData = null) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    if (type === 'get') {
        const getRequest = async () => {
            try {
                const getData = await axios.get(url);
                setData(getData);
            } catch (err) {
                setError(err);
            }
        };
        getRequest();
    } else if (type === 'post') {
        const postRequest = async () => {
            try {
                const getData = await axios.post(url, urlData);
                setData(getData);
            } catch (err) {
                setError(err);
            }
        };
        postRequest();
    }

    return { data, error };
};
export default useApi;
