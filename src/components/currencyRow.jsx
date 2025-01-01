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
    <div className="component">
      <div className="currencyInput">
        <input
          type="text"
          className="input"
          inputMode="numeric"
          value={amount}
          onChange={(e) => {
            const value = e.target.value;
            if (/^\d*\.?\d*$/.test(value)) {
              onChangeAmount(e);
            }
          }}
        />
        <p>Miqdorni kiriting</p>
      </div>

      <button className="select-button" onClick={toggleModal}>
        {selectedCurrency || "Select Currency"}
      </button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="search-bar">
              <labe>Search</labe>
              <input
                placeholder="Search"
                value={searchQuery}
                type="search"
                name="search-form"
                id="search-form"
                className="search-input"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <h3>Valyutalar</h3>
            </div>
            <div className="modal-options">
              {}
              {filterOptions.map((option) => (
                <button
                  key={option}
                  className="currency-option"
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
