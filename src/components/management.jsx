import React, { useState } from "react";
import './management.css';

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
    <div className="max-w-full mx-auto p-6 bg-gray-100 rounded-xl px-5 sm:px-10 lg:px-20">

<div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Filtrlar</h2>
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
                        <option value="Food">Ovqat</option>
                        <option value="Transport">Transport</option>
                        <option value="Clothes">Kiyim</option>
                        <option value="Others">Boshqalar</option>
                    </select>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse mt-6">
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

