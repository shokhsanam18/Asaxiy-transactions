// import { useState } from 'react';
import  { create } from 'zustand';

const Store = (set) => ({
    transactions: [{amount: '100', category: 'Food', type: 'expense', date: ''}]
})
export const useStore = create(Store)
// const [isOpen, setIsOpen] = useState(false)
// const openfunc = () => setIsOpen(!isOpen);


export const useModalStore = create((set) =>({
    isOpen: false, 
    openfunc: () => set((state) => ({isOpen: !state.isOpen}))
}))

//   const [side, setSideBar] = useState(true);

//   const SideBarShow = () => setSideBar(!side);

  export const useSidebarStore = create((set) => ({
    side:true,
    SideBarShow: () => set((state) => ({side: !state.side}))
  }))