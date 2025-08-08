import React, { useEffect, useState } from 'react';
import { getQuotes } from '../utils/storage';

const Quote = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        fetchRandomQuote();
    }, []);

    const fetchRandomQuote = () => {
        fetch(`https://api.api-ninjas.com/v1/quotes`, {
            headers:{
                'X-Api-Key': process.env.REACT_APP_API_NINJAS_KEY
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data[0] && data[0].quote) {
                    setQuote(data[0].quote);
                    setAuthor(data[0].author || 'Unknown');
                }
            });
    };

    return (
        <div className="quote-container">
            <p className="quote-text">"{quote}"</p>
            <p className="quote-author">- {author}</p>
        </div>
    );
};

export default Quote;