import React from 'react'
import { useModalStore, useStore} from '../Store'
import { useForm } from 'react-hook-form'

const Modal = () => {
  //  const transactions = useStore(Store => Store.transactions)
  const {isOpen, openfunc} = useModalStore()
  // const {transactions, addTransaction} = useStore()
  const {handleSubmit, register, reset} = useForm()
  const submitted = (data) => {
    // event.preventDefault();
    // Form content 
    // addTransaction(newTransaction); 
    console.log(data);
    reset()
    // openfunc()
  };

  return (
    <div className={`absolute flex items-center z-40 justify-center top-0 left-0 w-screen drop-shadow-2xl h-screen backdrop-blur-sm ${isOpen? '': 'hidden'}`}>
        <form className="w-[90vw] sm:w-[75vw] md:w-[60vw]  flex flex-col text-slate-500 p-7 rounded-md gap-4 bg-white drop-shadow-2xl z-20" onSubmit={handleSubmit(submitted)}>
          <h2 className="text-xl capitalize font-bold">Transaksya qo'shish</h2>
          <div className="relative">
            <input
              type="number"
              {...register("amount")}
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
            {...register("category")}
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
                {...register("type")}
                id="income"
                value="income"
                checked
              />
              <label htmlFor="income">Daromat</label>
              <input type="radio" {...register("type")} id="expense" value="expense" />
              <label htmlFor="expense">Xarajat</label>
            </div>
          </div>
          <div className="relative">
            <input
              type="date"
              {...register("date")}
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
        <div className={`absolute top-0 w-screen left-0 h-screen`} onClick={openfunc}></div>
    </div>
  )
}

export default Modal