import React from "react";

export function TransferFund({ addMove, contact }) {
  let amount;

  const handleChange = ({ target }) => {
    
    amount = +target.value;
  };

  return (
    <div>
      <label htmlFor="amount"></label>
      <input
        onChange={handleChange}
        value={amount}
        type="number"
        name="amount"
        id="amount"
      />
      <button onClick={() => addMove(amount, contact)}>Transfer</button>
    </div>
  );
}
