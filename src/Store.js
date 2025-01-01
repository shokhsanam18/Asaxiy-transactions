import  { create } from 'zustand';

const Store = (set) => ({
    transactions: [{amount: '100', category: 'Food', type: 'expense', date: ''}]
})

export const useStore = create(Store)