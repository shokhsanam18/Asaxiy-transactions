// import { useState } from 'react';
import  { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

// const Store = (set) => ({
//     transactions: [{amount: '100', category: 'Food', type: 'expense', date: ''}]
// })
// export const useStore = create(Store)
// export const useStore = create((set) => ({
//     transactions: [],
//     addTransaction: (newTransaction) => 
//       set((state) => ({ transactions: [...state.transactions, newTransaction] })),
//   }));
export const useStore = create(persist((set) => ({
        transactions: [],
        addTransaction: (newTransaction) => 
          set((state) => ({ transactions: [...state.transactions, newTransaction] })),
      }),
      {
        name: 'transactions-storage', 
        storage: createJSONStorage(() => localStorage)
      },
),
);


export const useModalStore = create((set) =>({
    isOpen: false, 
    openfunc: () => set((state) => ({isOpen: !state.isOpen}))
}))

  export const useSidebarStore = create((set) => ({
    side:true,
    SideBarShow: () => set((state) => ({side: !state.side}))
  }))