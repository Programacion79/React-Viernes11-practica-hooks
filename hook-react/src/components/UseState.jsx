import React, { useEffect, useState } from 'react';

export default function UseState() {
  const [contador, setContador] = useState(0);
  const [mostrar, setMostrar] = useState(false);
  useEffect(()=>{
        console.log("componente renderizado");
  });
  useEffect(()=>{
    console.log("componente renderizado 1 vez");
},[]);
useEffect(()=>{
    console.log("contador  o contenido actualizado");
    console.log("contenido actualizado");
    document.title =`Contador ${contador}`;

},[contador, mostrar]);

  return (
    <>
      {mostrar ? (
        <>
          <div>Contador: {contador}</div>

          <button
            onClick={() => {
              setContador(contador + 1);
              console.log(contador); // Nota: este valor se ve "atrasado" por cómo funciona React
            }}
          >
            Aumentar
          </button>
        </>
      ) : (
        ""
      )}
      
      <br />
      
      <button onClick={() => setMostrar(!mostrar)}>
        Mostrar / Aumentar
      </button>
    </>
  );
}
