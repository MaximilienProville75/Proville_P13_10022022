import React from "react";
import "../Transaction/Transaction.css";

const Transaction = () => {
  return (
    <section className="account">
      <div className="accContentWrapper">
        <h3 className="accTitle">Argent Bank Checking (x8349)</h3>
        <p className="accAmount">$2,082.79</p>
        <p className="accAmountDescription">Available Balance</p>
      </div>
      <div className="accContentWrapper cta">
        <button className="transactionButton">View transactions</button>
      </div>
    </section>
  );
};

export default Transaction;
