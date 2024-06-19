// dropdown for subscription




import React, { useState } from 'react';

const Dropdown = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  const options = ['Monthly', 'Yearly'];

  return (
    <div className="relative inline-block text-left w-full sm:w-auto">
      <div>
        <button
          type="button"
          className="inline-flex bg-black justify-between w-full sm:w-auto rounded-md border border-gray-300 shadow-sm px-2 py-2 text-sm font-medium text-white focus:outline-none"
          onClick={toggleDropdown}
        >
          {selectedOption ? selectedOption : 'subscription'}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-bottom-right absolute right-0 mb-2 w-68 sm:w-32 bg-black rounded-md shadow-lg ring-1 ring-black ring-opacity-10 transform -translate-y-full">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                className="block bg-black w-full text-left px-12 py-2 text-sm text-gray-300 "
                onClick={() => handleOptionClick(option)}
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
