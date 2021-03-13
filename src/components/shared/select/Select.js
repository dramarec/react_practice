import React from 'react';

const Select = ({ handleChange, sets }) => {
    const { title, name, options } = sets;
    return (
        <label>
            {title}
            <select onChange={handleChange} name={name}>
                {options.map(({ value, title }) => (
                    <option key={value} value={value}>
                        {title}
                    </option>
                ))}
            </select>
        </label>
    );
};

export default Select;
