import React from 'react'
import { useModalStore, useStore } from '../Store'

const State = () => {

  const {openfunc} = useModalStore()
  
  const {transactions} = useStore()
    
    const filtering = (typeName) => transactions
    .filter((transaction) => transaction.type === typeName)
    .reduce((sum, transaction) => sum + Number(transaction.amount), 0)

    const income = filtering('income')
    const expense = filtering('expense')
    const total = income - expense
  return (
    <div className="flex flex-col py-3 px-2 gap-4 w-full">
    <div className="flex w-full items-center justify-between mb-5">
      <h2 className="sm:text-3xl text-2xl text-black font-medium sm:font-normal">Tranzaksyalar</h2>
        <button
          className="bg-blue-600 py-2 outline-none uppercase font-medium transition ease-in-out duration-300 hover:shadow-xl sm:px-5  text-white rounded-lg px-4 sm:text-sm  text-[0.8rem]"
          onClick={openfunc}
        >
          Transaksya qo'shish
        </button>
    </div>
    <div>
      <h3 className="sm:text-2xl text-xl text-black font-medium sm:font-normal">Balans:</h3>
      <h3 className={`sm:text-3xl text-2xl ${total > 0 ? 'text-lime-600' : 'text-red-500' } font-bold`}>{total}</h3>
    </div>
    <div>
      <h3 className="sm:text-2xl text-xl text-black font-semibold sm:font-normal">Umumiy:</h3>
      <div className="flex gap-4">
        <h3 className="text-base text-lime-600 font-bold">+ {income} kirim</h3>
        <h3 className="text-base text-black font-bold">/</h3>
        <h3 className="text-base text-red-500 font-bold"> - {expense} chiqim</h3>
      </div>
    </div>
  </div>
  )
}

export default State