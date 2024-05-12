import React, { useState } from 'react';
import UseGif from '../Hook/UseGif';
import Spinner from './Spinner';

const Tags = () => {
    const [tag, setTag] = useState('Narendra Modi');
    const { gif, loading, fetchdata } = UseGif(tag);

    return (
        <div className='w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
            <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>A Random {tag} Gif</h1>
            {
                loading ? (<Spinner />) : (<img src={gif} width={450} />)
            }
            <input
                className='w-10/12 text-xl py-2 rounded-lg mb-[3px] text-center'
                onChange={(event) => setTag(event.target.value)}
                value={tag}
            />
            <button onClick={() => fetchdata()} className='w-10/12 bg-yellow-500 text-xl py-2 rounded-lg mb-[20px]'>Generate</button>
        </div>
    );
}

export default Tags;
