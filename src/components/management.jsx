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
    <div className="max-w-full mx-auto p-6 bg-gray-50 rounded-xl px-5 sm:px-10 lg:px-20">

        <div>
                <div className="flex flex-col sm:flex-row gap-5 mb-4">
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
            </div>

            <div>
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200 text-left">
                            <th className="px-4 py-3">Miqdori</th>
                            <th className="px-4 py-3">Kategoriya</th>
                            <th className="px-4 py-3">Turi</th>
                            <th className="px-4 py-3">Sanasi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTransactions.length > 0 ? (
                            filteredTransactions.map((transaction, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="px-4 py-3">{transaction.amount}</td>
                                    <td className="px-4 py-3">{transaction.category}</td>
                                    <td className="px-4 py-3">{transaction.type}</td>
                                    <td className="px-4 py-3">{transaction.date}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="px-4 py-3 text-center">Ma'lumotlar mavjud emas</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
    </div>
  );
};

export default TransactionApp;

