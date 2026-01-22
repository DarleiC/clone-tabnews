// function Home() {
//     return <h1>Gata, se me ama da uma risadinha! 😎</h1>
// }

// export default Home

import React, { useState } from "react";

function Titulo(props) {
  return <h1>{props.texto}</h1>;
}

function Contador() {
  const [numero, setNumero] = useState(0);

  return (
    <div>
      <p>Valor atual: {numero}</p>
      <button onClick={() => setNumero(numero + 1)}>Incrementar</button>
      <button onClick={() => setNumero(numero - 1)}>Decrementar</button>
    </div>
  );
}

function Painel() {
  return (
    <div>
      <Titulo texto="Meu Painel de Controle" />
      <Contador />
    </div>
  );
}

function App() {
  return (
    <div>
      <Painel />
    </div>
  );
}

export default App;