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
    <div className="flex justify-center w-full ">
      <div className="bg-blue-600 p-4 rounded-lg w-full max-w-[500px] mb-5">
        <input
          type="text"
          className="text-white w-full p-3 rounded-lg focus:outline-none bg-blue-600 text-lg"
          inputMode="numeric"
          value={amount}
          onChange={(e) => {
            const value = e.target.value;
            if (/^\d*\.?\d*$/.test(value)) {
              onChangeAmount(e);
            }
          }}
        />
        <p className="text-white font-semibold">Miqdorni kiriting</p>
      </div>

      <button
        className="font-semibold bg-white text-blue-600 px-5 py-3 rounded-lg cursor-pointer hover:border-2 border-gray-300 "
        onClick={toggleModal}
      >
        {selectedCurrency || "Select Currency"}
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={toggleModal}
        >
          <div
            className="bg-white p-5 rounded-lg w-full max-w-[550px] max-h-[400px] h-[250px] flex flex-col text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col text-left">
              <label className="font-semibold">Search</label>
              <input
                placeholder="Search"
                value={searchQuery}
                type="search"
                name="search-form"
                id="search-form"
                className="border-2 border-black h-[30px] rounded-lg p-2"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <h3 className="text-gray-500 font-semibold">Valyutalar</h3>
            </div>
            <div className="grid grid-cols-2 gap-2 overflow-y-auto max-h-[200px] pr-2">
              {filterOptions.map((option) => (
                <button
                  key={option}
                  className="bg-white border border-gray-300 rounded-lg p-3 text-sm font-semibold text-black cursor-pointer shadow-md hover:bg-gray-200"
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
