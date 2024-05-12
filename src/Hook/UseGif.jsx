import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const UseGif = (tag) => {
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);

    async function fetchdata(tag) {
        setLoading(true);

        const { data } = await axios.get(tag ? `${Url}&tag=${tag}` : Url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }

    useEffect(() => {
        fetchdata('narendra modi');
    }, []);

    // Correct way to return values from a hook is using an object
    return { gif, loading, fetchdata };
}

export default UseGif;
