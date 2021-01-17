import React from 'react';

const CardTitle = ({ title }) => {
    return (
        <header>
            <button type="button">Go back</button>
            <h2>{title}</h2>
            <button type="submit">Ok</button>
        </header>
    );
};

export default CardTitle;
