import React, { useState } from "react";
// import './management.css';
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
    <div className="max-w-full p-3 sm:p-6 bg-gray-50 rounded-xl px-5 sm:px-10 lg:px-20">

        <div className="flex gap-5 mb-4">
                    <input 
                        type="date" 
                        value={filterDate} 
                        onChange={(e) => setFilterDate(e.target.value)} 
                        placeholder="Filtrlash uchun sana"
                        className="w-full sm:w-1/2 p-3 border border-gray-300 rounded-md"
                    />
                    <select 
                        value={filterCategory} 
                        onChange={(e) => setFilterCategory(e.target.value)} 
                        className="w-full sm:w-1/2 p-3 border border-gray-300 rounded-md"
                    >
                        <option value="">Filtrlash uchun kategoriya</option>
                        <option value="Food">Oziq-ovqat</option>
                        <option value="Entertainment">Ko'ngilochar</option>
                        <option value="transport">Transport</option>
                        <option value="bills">Hisoblar</option>
                        <option value="other">Boshqa</option>
                    </select>
        </div>

        <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200 text-left">
                            <th className="sm:px-4 py-3 px-1">Miqdori</th>
                            <th className="sm:px-4 py-3 px-1">Kategoriya</th>
                            <th className="sm:px-4 py-3 px-1">Turi</th>
                            <th className="sm:px-4 py-3 px-1">Sanasi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTransactions.length > 0 ? (
                            filteredTransactions.map((transaction, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="sm:px-4 py-3 px-1">{transaction.amount}</td>
                                    <td className="sm:px-4 py-3 px-1">{transaction.category}</td>
                                    <td className="sm:px-4 py-3 px-1">{transaction.type}</td>
                                    <td className="sm:px-4 py-3 px-1">{transaction.date}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="sm:px-4 py-3 px-1 text-center">Ma'lumotlar mavjud emas</td>
                            </tr>
                        )}
                    </tbody>
        </table>
    </div>
  );
};

export default TransactionApp;

