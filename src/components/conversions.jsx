import React, { useEffect, useState } from "react";
import CurrencyRow from "./currencyRow";

const BASE_URL = "https://api.exchangerate-api.com/v4/latest/USD";

function Conversions() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState(1);
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [result, setResult] = useState("");
  const [error, setError] = useState(null);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = (amount * exchangeRate).toFixed(2);
  } else {
    toAmount = amount;
    fromAmount = (amount / exchangeRate).toFixed(2);
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency]);
      })
      .catch((error) => {
        console.error("Error fetching initial data:", error);
        setError("Could not load data. Please try again later.");
      });
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}`)
        .then((res) => res.json())
        .then((data) => {
          const rate = data.rates[toCurrency] / data.rates[fromCurrency];
          setExchangeRate(rate);
          setResult(
            `${amount} ${fromCurrency} = ${(amount * rate).toFixed(
              2
            )} ${toCurrency}`
          );
        })
        .catch((error) => {
          console.error("Error fetching updated exchange rate:", error);
          setError("Failed to update exchange rates.");
        });
    }
  }, [fromCurrency, toCurrency, amount]);

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  return (
    <div className="flex justify-end items-center mt-20 mx-24">
      <div className="bg-white p-12 rounded-lg max-w-[900px] w-full h-full max-h-[500px] shadow-lg flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold ">Valyuta kursi</h2>
        {error && <div className="text-red-600 mt-2">{error}</div>}
        <div className="w-full max-w-[800px]">
          <CurrencyRow
            currencyOptions={currencyOptions}
            selectedCurrency={fromCurrency}
            onChangeCurrency={(e) => setFromCurrency(e.target.value)}
            onChangeAmount={handleFromAmountChange}
            amount={fromAmount}
          />
        </div>
        <div className="mt-4 text-xl">{result}</div>
        <div className="w-full max-w-[800px] mt-4">
          <CurrencyRow
            currencyOptions={currencyOptions}
            selectedCurrency={toCurrency}
            onChangeCurrency={(e) => setToCurrency(e.target.value)}
            onChangeAmount={handleToAmountChange}
            amount={toAmount}
          />
          <p className="text-center mt-2 text-xl">
            Konvertatsiya qilingan holati
          </p>
        </div>
    <div className="conversionMain">
      <h2 className="converter-title">Valyuta kursi</h2>
      {error && <div className="error-message">{error}</div>}
      <div>
        <CurrencyRow
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrency={(e) => setFromCurrency(e.target.value)}
          onChangeAmount={handleFromAmountChange}
          amount={fromAmount}
        />
      </div>
      <div className="equals">{result}</div>
      <div>
        <CurrencyRow
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onChangeCurrency={(e) => setToCurrency(e.target.value)}
          onChangeAmount={handleToAmountChange}
          amount={toAmount}
        />
        <p>Konvertatsiya qilingan holati</p>
      </div>
    </div>
    </div>
  ),
  }


export default Conversions;