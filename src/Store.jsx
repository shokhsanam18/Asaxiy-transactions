// import { useState } from 'react';
import { createRef } from 'react';
import  { create } from 'zustand';

// const Store = (set) => ({
//     transactions: [{amount: '100', category: 'Food', type: 'expense', date: ''}]
// })
// export const useStore = create(Store)
export const useStore = create((set) => ({
    transactions: [],
    addTransaction: (newTransaction) => 
      set((state) => ({ transactions: [...state.transactions, newTransaction] })),
  }));


export const useModalStore = create((set) =>({
    isOpen: false, 
    inputRef: createRef(),
    openfunc: () => set((state) => {
    console.log("Modal State:", !state.isOpen);
      console.log("Input Ref:", state.inputRef.current);
        if (!state.isOpen && state.inputRef.current) {
          state.inputRef.current.focus(); 
        }
        return { isOpen: !state.isOpen }
      })
}))

  export const useSidebarStore = create((set) => ({
    side:true,
    SideBarShow: () => set((state) => ({side: !state.side}))
  }))