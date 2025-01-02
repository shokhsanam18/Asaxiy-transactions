import React, { useState } from "react";

const TransactionApp = () => {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');
    const [date, setDate] = useState('');
    const [transactions, setTransactions] = useState([]);
    const [filterDate, setFilterDate] = useState('');
    const [filterCategory, setFilterCategory] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const buttonAddTransaction = () => {
        const newTransaction = {
            amount,
            type,
            date,
            category,
        };
        setTransactions([...transactions, newTransaction]);
        setAmount('');
        setCategory('');
        setType('');
        setDate('');
        setModalVisible(false);
    };

    const filteredTransactions = transactions.filter((transaction) => {
        const dataMatch = filterDate ? transaction.date === filterDate : true;
        const categoryMatch = filterCategory ? transaction.category === filterCategory : true;
        return dataMatch && categoryMatch;
    });

    return (
        <div className="max-w-full mx-auto p-6 bg-gray-100 rounded-xl px-5 sm:px-10 lg:px-20">
            <h1 className="text-center text-3xl font-semibold text-gray-800 mb-6">Tranzaksiya qo'shish</h1>
            <button 
                className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-600 float-right"
                onClick={() => setModalVisible(true)}
            >
                Tranzaksiya qo'shish
            </button>
            <br /><br />

            {modalVisible && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center`">
                    <div className="bg-white p-6 rounded-lg w-full sm:w-96 shadow-lg relative">
                        <span 
                            className="absolute top-4 right-4 text-2xl text-gray-500 cursor-pointer" 
                            onClick={() => setModalVisible(false)}
                        >
                            &times;
                        </span>
                        <h2 className="text-xl font-semibold mb-4">Tranzaksiya qo'shish</h2>
                        <input 
                            type="number" 
                            placeholder="Tranzaksiya miqdori" 
                            value={amount} 
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
                        />
                        <select 
                            value={category} 
                            onChange={(e) => setCategory(e.target.value)} 
                            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
                        >
                            <option value="">Kategoriya</option>
                            <option value="Food">Ovqat</option>
                            <option value="Transport">Transport</option>
                            <option value="Clothes">Kiyim</option>
                            <option value="Others">Boshqalar</option>
                        </select>
                        <select 
                            value={type} 
                            onChange={(e) => setType(e.target.value)} 
                            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
                        >
                            <option value="">Tranzaksiya turi</option>
                            <option value="Income">Income</option>
                            <option value="Expense">Expense</option>
                        </select>
                        <input 
                            type="date" 
                            value={date} 
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
                        />
                        <button 
                            onClick={buttonAddTransaction}
                            className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg w-full hover:bg-blue-600"
                        >
                            Qo'shish
                        </button>
                    </div>
                </div>
            )}

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


