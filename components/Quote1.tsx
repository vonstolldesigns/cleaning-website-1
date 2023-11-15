import React from "react";

const QuoteComponent = () => {
  return (
    <div className="flex flex-col items-center mt-12 p-8 text-center">
      <div className="max-w-3xl">
        <h3 className="heading2 mb-4 ">"Nice Quote"</h3>

        <p className="sm:text-lg font-medium text-gray-700">– Author</p>

        <p className="mt-6 text-gray-600/80  paragraph-regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default QuoteComponent;
