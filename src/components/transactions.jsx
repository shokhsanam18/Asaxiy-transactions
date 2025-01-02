import React, { useState } from "react";
import Modal from "./Modal";
import TransactionApp from "./management";
import { useModalStore, useStore} from "../Store";
import State from "./state";

const Transactions = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const openfunc = () => setIsOpen(!isOpen);
  const {transactions} = useStore()

  return (
    <section className="w-full">
      <State/>
      <Modal/>
      <TransactionApp />
    </section>
  );
};

export default Transactions;
