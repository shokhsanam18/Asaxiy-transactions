import React, { useState } from "react";
import "./management.css";

const TransactionApp = () => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const buttonAddTransaction = () => {
    const newTransaction = {
      amount,
      type,
      date,
      category,
    };
    setTransactions([...transactions, newTransaction]);
    setAmount("");
    setCategory("");
    setType("");
    setDate("");
    setModalVisible(false);
  };

  const filteredTransactions = transactions.filter((transaction) => {
    const dataMatch = filterDate ? transaction.date === filterDate : true;
    const categoryMatch = filterCategory
      ? transaction.category === filterCategory
      : true;
    return dataMatch && categoryMatch;
  });

  return (
    <div className="app-container">
      <h1 className="dilfuza-h1">Tranzaksiya qo'shish</h1>
      <button className="open-modal-btn" onClick={() => setModalVisible(true)}>
        Tranzaksiya qo'shish
      </button>
      {modalVisible && (
        <div className="dilfuza-modal">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setModalVisible(false)}>
              &times;
            </span>
            <h2>Tranzaksiya qo'shish</h2>
            <input
              type="number"
              placeholder="Tranzaksiya miqdori"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Kategoriya</option>
              <option value="Food">Ovqat</option>
              <option value="Transport">Transport</option>
              <option value="Clothes">Kiyim</option>
              <option value="Others">Boshqalar</option>
            </select>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">Tranzaksiya turi</option>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <button onClick={buttonAddTransaction}>Qo'shish</button>
          </div>
        </div>
      )}

      <button onClick={buttonAddTransaction}>Qo'shish</button>
    </div>
  );
};

<div className="filters">
  <h2>Filtrlar</h2>
  <input
    type="date"
    value={filterDate}
    onChange={(e) => setFilterDate(e.target.value)}
    placeholder="Filtrlash uchun sana"
  />
  <select
    value={filterCategory}
    onChange={(e) => setFilterCategory(e.target.value)}
  >
    <option value="">Filtrlash uchun kategoriya</option>
    <option value="Food">Ovqat</option>
    <option value="Transport">Transport</option>
    <option value="Clothes">Kiyim</option>
    <option value="Others">Boshqalar</option>
  </select>
</div>;

{
  filteredTransactions.length > 0 && (
    <table className="transaction-table">
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
  );
}

export default TransactionApp;
