// Drop down button

import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = ['Option 1', 'Option 2'];

  return (
    <div className="relative inline-block text-left mr-14 mt-4 rounded">
      <div>
        <button
          type="button"
          className="inline-flex bg-black justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 py-2 text-sm font-medium text-white focus:outline-none"
          onClick={toggleDropdown}
          style={{ width: isOpen ? 'calc(100% + 1px)' : '100%' }}
        >
          {selectedOption ? selectedOption : 'Select an option'}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-52 bg-black rounded-md shadow-lg ring-1 ring-black ring-opacity-5" style={{ width: 'calc(100% + 1px)' }}>
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option, index) => (
              <button
                key={index}
                className="block py-2 text-sm border-b-2 border-gray-800 text-white w-full text-center"
                onClick={() => handleOptionClick(option)}
                role="menuitem"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;




























