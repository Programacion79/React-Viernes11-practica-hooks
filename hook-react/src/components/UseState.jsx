import React, { useEffect, useState, useContext } from 'react';
import { color } from './CambiarColor';

export default function UseState() {
  const [contador, setContador] = useState(0);
  const [mostrar, setMostrar] = useState(false);
  const colorFondo = useContext(color); // hook en nivel superior

  // Se ejecuta en cada render
  useEffect(() => {
    console.log("Componente renderizado");
  });

  // Se ejecuta solo una vez al montar
  useEffect(() => {
    console.log("Componente renderizado 1 vez");
  }, []);

  // Se ejecuta cuando cambia contador o mostrar
  useEffect(() => {
    console.log("Contador o mostrar actualizado");
    document.title = `Contador ${contador}`;
  }, [contador, mostrar]);

  return (
    <>
      {mostrar && (
        <>
          <div
            style={{
              backgroundColor: colorFondo === "color-oscuro" ? "gray" : "white",
              padding: "10px",
            }}
          >
            <div>Contador: {contador}</div>
            <button
              onClick={() => {
                setContador(contador + 1);
              }}
            >
              Aumentar
            </button>
          </div>
        </>
      )}

      <br />

      <button onClick={() => setMostrar(!mostrar)}>
        Mostrar / Aumentar
      </button>
    </>
  );
}
