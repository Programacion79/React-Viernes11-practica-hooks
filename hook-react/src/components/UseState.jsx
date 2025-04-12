import React, { useState } from 'react';

export default function UseState() {
  const [contador, setContador] = useState(0);

  return (
    <>
      <div>
        Contador: {contador}
      </div>
      <button
        onClick={() => setContador(contador + 1)}
      >
        Aumentar
      </button>
    </>
  );
}