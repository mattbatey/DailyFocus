import React, { useEffect, useState } from 'react';
import { getQuotes, saveFavoriteQuote } from '../utils/storage';

const Quote = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        fetchRandomQuote();
        loadFavorites();
    }, []);

    const fetchRandomQuote = () => {
        const quotes = getQuotes();
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        setQuote(randomQuote.text);
        setAuthor(randomQuote.author);
    };

    const loadFavorites = () => {
        const savedFavorites = JSON.parse(localStorage.getItem('favoriteQuotes')) || [];
        setFavorites(savedFavorites);
    };

    const handleSaveFavorite = () => {
        const newFavorites = [...favorites, { text: quote, author }];
        setFavorites(newFavorites);
        localStorage.setItem('favoriteQuotes', JSON.stringify(newFavorites));
    };

    return (
        <div className="quote-container">
            <p className="quote-text">"{quote}"</p>
            <p className="quote-author">- {author}</p>
            <button onClick={fetchRandomQuote}>New Quote</button>
            <button onClick={handleSaveFavorite}>Save Favorite</button>
        </div>
    );
};

export default Quote;