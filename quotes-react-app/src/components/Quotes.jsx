import React, { useState, useEffect } from 'react';
import Button from './Button';

const Quotes = () => {
  const [quotes, setQuotes] = useState('');

  const getQuote = () => {
    fetch(`http://localhost:5000/quotes/random`)
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data);
      });
  };

  const handleClick = () => getQuote();

  useEffect(() => getQuote(), []);

  return (
    <div>
      <p>{quotes.quote}</p>
      <p>{quotes.author}</p>
      <Button onClick={handleClick} />
    </div>
  );
};

export default Quotes;
