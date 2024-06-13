

// ToggleButton.js button
import React, { useState } from 'react';

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="flex items-center justify-center mx-2">
      <button
        onClick={handleToggle}
        className={`relative w-20 h-6 sm:w-24 sm:h-7 lg:w-30 lg:h-8 py-2 flex items-center rounded-full px-2 cursor-pointer transition-colors ${
          isToggled ? ' bg-red-500' : 'bg-red-500'
        }`}
      >
        <div
          className={`absolute left-0 ml-2 text-sm font-bold ${
            isToggled ? 'text-white' : 'text-red-500'
          }`}
        >
          आ
        </div>
        <div
          className={`absolute right-0 mr-2 text-sm font-bold  ${
            isToggled ? 'text-red-500' : 'text-white'
          }`}
        >
          Aa
        </div>
        <div
          className={` bg-white  w-4 h-4 sm:w-4 sm:h-4 lg:w-6 lg:h-6 rounded-full shadow-md transform transition-transform ${
            isToggled ? 'translate-x-16 ' : 'translate-x-0 '
          }`}
        ></div>
      </button>
    </div>
  );
};

export default ToggleButton;
