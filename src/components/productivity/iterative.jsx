import React, { useState } from 'react';

function Iterative({ remaining, setRemaining }) {

  const subtractNumber = () => {
    setRemaining(remaining - 1);
  };

  return (
    <div>
      <p>{remaining}</p>
      <button onClick={subtractNumber}>Subtract 1</button>
    </div>
  );
}

export default Iterative;
