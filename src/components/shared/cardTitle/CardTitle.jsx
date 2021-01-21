import React from 'react';

const CardTitle = ({ children, title, onToggle, onHandlerSubmit }) => {
    return (
        <header>
            <button type="button" onClick={onToggle}>
                Go back
            </button>
            <h2>{title}</h2>
            {children}
            <button type="submit">Ok</button>
        </header>
    );
};

export default CardTitle;
