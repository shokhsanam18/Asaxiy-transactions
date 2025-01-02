import React from 'react'
import { useModalStore } from '../Store'

const State = () => {

const {openfunc} = useModalStore()
// console.log(localStorage);

  return (
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
  )
}

export default State