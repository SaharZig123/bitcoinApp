import React from "react";

export function MovesList({ moves }) {
if (!moves) return;
  return (
    <ul>

      {moves.map((move, index) => (
        <li key={index}>
          <p>To: {move.to.name}</p>
          <p>At: {move.at}</p>
          <p>Amount: {move.amount}</p>
        </li>
      ))}
    </ul>
  );
}
