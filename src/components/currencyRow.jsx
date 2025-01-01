import React, { useState } from "react";

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount,
  } = props;
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleOptionClick = (option) => {
    onChangeCurrency({ target: { value: option } });
    setModalOpen(false);
  };

  const filterOptions = currencyOptions.filter((option) =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex justify-center w-full">
      <div className="bg-blue-600 p-3 rounded-lg w-full max-w-[500px] mb-5">
        <input
          type="text"
          className="border-none text-white w-full p-2 rounded-lg bg-blue-600 outline-none"
          inputMode="numeric"
          value={amount}
          onChange={(e) => {
            const value = e.target.value;
            if (/^\d*\.?\d*$/.test(value)) {
              onChangeAmount(e);
            }
          }}
        />
        <p className="text-white">Miqdorni kiriting</p>
      </div>

      <button
        className="font-bold text-blue-600 bg-white py-2 px-4 rounded-lg w-full max-w-[100px] hover:border-blue-700"
        onClick={toggleModal}
      >
        {selectedCurrency || "Select Currency"}
      </button>

      {isModalOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={toggleModal}
        >
          <div
            className="bg-white p-5 rounded-lg w-full max-w-[550px] max-h-[400px] h-[250px] text-center relative shadow-lg flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-left">
              <label>Search</label>
              <input
                placeholder="Search"
                value={searchQuery}
                type="search"
                name="search-form"
                id="search-form"
                className="w-full p-2 border-2 border-black rounded-lg mb-3"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <h3 className="text-gray-600">Valyutalar</h3>
            </div>
            <div className="grid grid-cols-2 gap-2 overflow-y-auto pr-2 max-h-[200px]">
              {filterOptions.map((option) => (
                <button
                  key={option}
                  className="bg-white border border-gray-300 rounded-lg p-2 text-black font-bold text-xs cursor-pointer shadow-md hover:bg-gray-200"
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
