import React from 'react'

const Transactions = () => {
  return (
    
    <section className='w-[100%]'>
        <div className='flex flex-col py-3 px-2 gap-4 w-[100%]'>
            <div className='flex w-[100%] justify-between mb-5'>
            <h2 className='text-3xl text-black font-normal'>Tranzaksyalar</h2>
            <button className='bg-blue-600 py-2 outline-none uppercase font-semibold transition ease-in-out duration-300 hover:shadow-xl text-sm px-5 text-white rounded-lg'>Transaksya qo'shish</button>
            </div>
            <div>
            <h3 className='text-2xl text-black font-normal'>Balans:</h3>
            <h3 className='text-3xl text-red-500 font-bold'>2000</h3>
            </div>
            <div>
            <h3 className='text-2xl text-black font-normal'>Umumiy:</h3>
            <div className='flex gap-4'>

            <h3 className='text-base text-lime-600 font-bold'>+ 2000 kirim</h3>
            <h3 className='text-base text-black font-bold'>/</h3>
            <h3 className='text-base text-red-500 font-bold'>- 2000 chiqim</h3>
            </div>
            </div>
        </div>
        <div className='absolute flex items-center justify-center top-0 left-0 w-[100vw] drop-shadow-2xl h-[100%] backdrop-blur-sm'>
        <form className='w-[50vw] text-slate-700 p-5 rounded-md bg-white drop-shadow-2xl z-10'>
            <h1 className=''>hello</h1>
        </form>
        </div>

    </section>
  )
}

export default Transactions