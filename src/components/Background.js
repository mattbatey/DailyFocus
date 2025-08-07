import React, { useEffect, useState } from 'react';

const UNSPLASH_ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

const Background = () => {
    const [bgUrl, setBgUrl] = useState('');

    useEffect(() => {
        fetch(`https://api.unsplash.com/photos/random?orientation=landscape&client_id=${UNSPLASH_ACCESS_KEY}`)
            .then(res => res.json())
            .then(data => {
                if (data && data.urls && data.urls.full) {
                    setBgUrl(data.urls.full);
                }
            });
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundImage: `url(${bgUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: -1,
            }}
        />
    );
};

export default Background;