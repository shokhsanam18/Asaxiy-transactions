import React, { useState, useEffect, useMemo } from "react";
// import { useStore } from "../Store";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import DecreaseGif from "../assets/decrease.gif";
import IncreaseGif from "../assets/increase.gif";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

//dynamic transactions array
//const transactions= useStore((state)=> state.transactions);

//static transaction array
const transactions = [
  { amount: "100", category: "Entertainment", type: "expense", date: "" },
  { amount: "100", category: "Other", type: "expense", date: "" },
  { amount: "100", category: "Food", type: "expense", date: "" },
  { amount: "100", category: "Transport", type: "expense", date: "" },
  { amount: "100", category: "Bills", type: "expense", date: "" },
  { amount: "100", category: "Entertainment", type: "income", date: "" },
  { amount: "100", category: "Other", type: "income", date: "" },
  { amount: "100", category: "Food", type: "income", date: "" },
  { amount: "100", category: "Transport", type: "income", date: "" },
  { amount: "100", category: "Bills", type: "income", date: "" },
  { amount: "100", category: "Bills", type: "income", date: "" },
];

const categories = ["Food", "Entertainment", "Transport", "Bills", "Other"];
const categoryColors = {
  Food: "rgb(0, 96, 230)",
  Entertainment: "rgb(0, 75, 180)",
  Transport: "rgb(32, 56, 80)",
  Bills: "rgb(32, 50, 60)",
  Other: "rgb(47, 76, 105)",
};

function Analytics() {
  const [balance, setBalance] = useState(0);
  const [categoryIncome, setCategoryIncome] = useState({
    Food: 0,
    Entertainment: 0,
    Transport: 0,
    Bills: 0,
    Other: 0,
  });
  const [categoryExpense, setCategoryExpense] = useState({
    Food: 0,
    Entertainment: 0,
    Transport: 0,
    Bills: 0,
    Other: 0,
  });

  useEffect(() => {
    const calculateTotals = () => {
      const categoryIncome = {
        Food: 0,
        Entertainment: 0,
        Transport: 0,
        Bills: 0,
        Other: 0,
      };
      const categoryExpense = {
        Food: 0,
        Entertainment: 0,
        Transport: 0,
        Bills: 0,
        Other: 0,
      };

      let totalIncome = 0;
      let totalExpense = 0;

      transactions.forEach(({ amount, category, type }) => {
        const amountFloat = parseFloat(amount);
        if (type === "income") {
          totalIncome += amountFloat;
          categoryIncome[category] += amountFloat;
        } else if (type === "expense") {
          totalExpense += amountFloat;
          categoryExpense[category] += amountFloat;
        }
      });

      // total balance
      setBalance(totalIncome - totalExpense);
      setCategoryIncome(categoryIncome);
      setCategoryExpense(categoryExpense);
    };

    calculateTotals();
  }, []);

  const lastTransaction = transactions[transactions.length - 1];
  const gif = lastTransaction.type === "income" ? IncreaseGif : DecreaseGif;

  // pie charts
  const incomeData = useMemo(
    () => ({
      datasets: [
        {
          data: categories.map((category) => categoryIncome[category] || 0),
          backgroundColor: categories.map(
            (category) => categoryColors[category]
          ),
        },
      ],
    }),
    [categoryIncome]
  );

  const expenseData = useMemo(
    () => ({
      datasets: [
        {
          data: categories.map((category) => categoryExpense[category] || 0),
          backgroundColor: categories.map(
            (category) => categoryColors[category]
          ),
        },
      ],
    }),
    [categoryExpense]
  );

  // category details
  const renderCategoryDetails = (category, categoryData) => (
    <div key={category} className="flex items-center mb-2">
      <div
        className="w-4 h-4 mr-2"
        style={{ backgroundColor: categoryColors[category] }}
      ></div>
      <p className="text-lg">
        {category}: {categoryData[category] > 0 ? categoryData[category] : "0"}
      </p>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center gap-10 px-4 py-8 bg-white">
      <p className="text-5xl md:text-6xl">
        {balance}
        <img
          src={gif}
          alt="gif"
          className="w-16 sm:w-20 h-16 sm:h-20 ml-3 mb-3 inline-block"
        />
      </p>

      <div className="w-full flex flex-col md:flex-row justify-between gap-2">
        {/* Kirimlar*/}
        <div className="w-full sm:w-full md:w-[45%] bg-white shadow-lg p-4 rounded-lg">
          <h2 className="text-xl sm:text-2xl mb-4">Kirimlar</h2>
          <div className="flex gap-5 md:flex-row">
            <div className="w-1/2 mb-4 md:mb-0">
              <Pie data={incomeData} options={{ cutout: "50%" }} />
              <p className="text-lg text-center mt-2">
                {Object.values(categoryIncome).reduce((a, b) => a + b, 0)}
              </p>
            </div>
            <div className="w-1/2">
              {categories.map((category) =>
                renderCategoryDetails(category, categoryIncome)
              )}
            </div>
          </div>
        </div>

        {/* Chiqimlar */}
        <div className="w-full sm:w-full md:w-[45%] bg-white shadow-lg p-4 rounded-lg">
          <h2 className="text-xl sm:text-2xl mb-4">Chiqimlar</h2>
          <div className="flex gap-5 md:flex-row">
            <div className="w-1/2 mb-4 md:mb-0">
              <Pie data={expenseData} options={{ cutout: "50%" }} />
              <p className="text-lg text-center mt-2">
                {Object.values(categoryExpense).reduce((a, b) => a + b, 0)}
              </p>
            </div>
            <div className="w-1/2">
              {categories.map((category) =>
                renderCategoryDetails(category, categoryExpense)
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
