import React from "react";
import Modal from "./Modal";
import TransactionApp from "./management";
import State from "./state";

const Transactions = () => {
  return (
    <section className="w-full">
      <State/>
      <Modal/>
      <TransactionApp />
    </section>
  );
};

export default Transactions;