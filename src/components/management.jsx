import React, { useState } from "react";
import "./management.css";
import { useStore } from "../Store";

const TransactionApp = () => {
const {transactions} = useStore()
//   const [filter, setFilter] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const filteredTransactions = transactions.filter((transaction) => {
    const dataMatch = filterDate ? transaction.date === filterDate : true;
    const categoryMatch = filterCategory
      ? transaction.category === filterCategory
      : true;
    return dataMatch && categoryMatch;
  });

  return (
    <div className="dilfuza-app-container">

      <div className="dilfuza-filters">
        <h2>Filtrlar</h2>
        <input
          className="dilfuza-input-date dilfuza-input"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          placeholder="Filtrlash uchun sana"
        />
        <select
            className="dilfuza-select"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">Filtrlash uchun kategoriya</option>
          <option value="Food">Ovqat</option>
          <option value="Transport">Transport</option>
          <option value="Clothes">Kiyim</option>
          <option value="Others">Boshqalar</option>
        </select>
      </div>

      {filteredTransactions.length > 0 && (
        <table className="transaction-table-dilfuza">
          <thead>
            <tr>
              <th>Miqdori</th>
              <th>Kategoriya</th>
              <th>Turi</th>
              <th>Sanasi</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.amount}</td>
                <td>{transaction.category}</td>
                <td>{transaction.type}</td>
                <td>{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransactionApp;
