import React, { useEffect, useState } from "react";
import "./Currency.css";
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
    <div className="rushana-conversionMain">
      <h2 className="converter-title">Valyuta kursi</h2>
      {error && <div className="rushana-error-message">{error}</div>}
      <div>
        <CurrencyRow
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrency={(e) => setFromCurrency(e.target.value)}
          onChangeAmount={handleFromAmountChange}
          amount={fromAmount}
        />
      </div>
      <div className="rushana-equals">{result}</div>
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
  );
}

export default Conversions;
