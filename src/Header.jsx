import React from 'react';

const Header = ({count = 0, onClear}) => {
  return (
    <header className="bg-black text-white flex font-bold p-5 text-3x1 items-center">
      <div className="flex-grow">Header</div>
      <i className="fa-solid fa-cart-shopping"></i>
      <div className="py-2 px-4">{count}</div>
      <button
        onClick={onClear}
        className="bg-indigo-800 font-bold text-white rounded py-2 px-4">
        Clear Cart
      </button>
    </header>
  );
};

export default Header;
