import React, { useState } from "react";

const Transactions = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)
    
    const openfunc = () => setIsOpen(!isOpen)
    const formSubmission = (e) => {
        e.preventDefault()
        openfunc()
        setIsSubmit(true)
    }


  return (
    <section className="w-full">
      <div className="flex flex-col py-3 px-2 gap-4 w-full">
        <div className="flex w-full justify-between mb-5">
          <h2 className="text-3xl text-black font-normal">Tranzaksyalar</h2>
          <button 
          className="bg-blue-600 py-2 outline-none uppercase font-semibold transition ease-in-out duration-300 hover:shadow-xl text-sm px-5 text-white rounded-lg"
          onClick={openfunc}
          >
            Transaksya qo'shish
          </button>
        </div>
        <div>
          <h3 className="text-2xl text-black font-normal">Balans:</h3>
          <h3 className="text-3xl text-red-500 font-bold">2000</h3>
        </div>
        <div>
          <h3 className="text-2xl text-black font-normal">Umumiy:</h3>
          <div className="flex gap-4">
            <h3 className="text-base text-lime-600 font-bold">+ 2000 kirim</h3>
            <h3 className="text-base text-black font-bold">/</h3>
            <h3 className="text-base text-red-500 font-bold">- 2000 chiqim</h3>
          </div>
        </div>
      </div>
      <div className={`absolute flex items-center justify-center top-0 left-0 w-screen drop-shadow-2xl h-screen backdrop-blur-sm ${isOpen? '': 'hidden'}`}>
        <form className="w-[50vw] flex flex-col text-slate-500 p-7 rounded-md gap-4 bg-white drop-shadow-2xl z-10" onSubmit={formSubmission}>
          <h2 className="text-xl capitalize font-bold">Transaksya qo'shish</h2>
          <div className="relative">
            <input
              type="number"
              name="amount"
              id="number"
              required
              className="peer border-slate-400 border-[1px] w-full rounded py-2 px-3 focus:border-2"
            />
            <label
              htmlFor="number"
              className="absolute left-2 top-2 transition-all peer-focus:-top-2 peer-focus:text-black bg-white border-slate-400 peer-focus:text-xs px-1"
            >
              Tranzaksiya Miqdori
            </label>
          </div>
          <select
            name="category"
            className=" border-2 rounded py-2 px-3"
            id="category"
          >
            <option value="food">Oziq-ovqat</option>
            <option value="entertainment">Qo'ngilochlar</option>
            <option value="transport">Transport</option>
            <option value="bills">Hisoblar</option>
            <option value="other">Boshqa</option>
          </select>
          <div className="flex gap-3 items-center">
            <h4 className="text-lg font-normal">Tranzaksiya turi:</h4>
            <div className="flex gap-1">
              <input
                type="radio"
                name="type"
                id="income"
                value="income"
                checked
              />
              <label htmlFor="income">Daromat</label>
              <input type="radio" name="type" id="expense" value="expense" />
              <label htmlFor="expense">Xarajat</label>
            </div>
          </div>
          <div className="relative">
            <input
              type="date"
              name="date"
              id="date"
              className="peer border-slate-400 border-[1px] w-full rounded py-2 px-3 focus:border-2"
            />
            <label
              htmlFor="number"
              className="absolute left-2 transition-all -top-2 peer-focus:text-black bg-white border-slate-400 text-xs px-1"
            >
              Sana
            </label>
          </div>
          <button className="bg-blue-600 py-2 outline-none uppercase font-semibold transition ease-in-out duration-300 hover:shadow-xl text-sm px-5 text-white rounded-lg">
            Transaksya qo'shish
          </button>
        </form>
      </div>
    </section>
  );
};

export default Transactions;
