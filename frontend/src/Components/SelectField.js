import React, { useEffect, useState } from 'react'
import Select from 'react-select'

const SelectField = ({ options = [], placeholder = "Select...", onSelectChange, defaultValue = null }) => {
    const [selectedOption, setSelectedOption] = useState(defaultValue);

    useEffect(() => {
        if (defaultValue) {
            setSelectedOption(defaultValue);
        }
    }, [defaultValue]);

    const handleChange = (option) => {
        setSelectedOption(option);
        onSelectChange(option);
    };

    return (
        <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
            placeholder={placeholder}
            styles={{
                control: (base) => ({
                    ...base,
                    borderColor: 'gray',
                    boxShadow: 'none',
                    '&:hover': {
                        borderColor: 'gray',
                    },
                }),
                placeholder: (base) => ({
                    ...base,
                    color: 'gray',
                }),
            }}
        />
    );
};

export default SelectField