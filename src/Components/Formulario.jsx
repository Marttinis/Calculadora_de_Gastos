import { useState } from "react";

import "./Formulario.css";
function Formulario({ setGastos }) {
  const valorInicial = {
    nome: "",
    valor: "",
    data: "",
    categoria: "",
  };

  const [value, setValue] = useState(valorInicial);

  function armazenar(ev) {
    const { name, value } = ev.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  function cadastrar(ev) {
    ev.preventDefault();
    setGastos((prevGastos) => [...prevGastos, value]);
    setValue(valorInicial);
  }

  return (
    <div id="formulario">
      <form onSubmit={cadastrar}>
        <h1>Calculadora de Gastos 🧮</h1>

        <input
          type="number"
          name="orcamento"
          onChange={armazenar}
          placeholder="Qual o orçamento deste mês"
          required
        />



        <input
          type="text"
          name="nome"
          value={value.nome}
          onChange={armazenar}
          placeholder="Com o que você gastou?"
          required
        />
        
        <input
          type="number"
          name="valor"
          value={value.valor}
          onChange={armazenar}
          placeholder="Quanto gastou nisto?"
          required
        />
        <input
          type="date"
          name="data"
          value={value.data}
          onChange={armazenar}
          required
        />
        <select
          name="categoria"
          value={value.categoria}
          onChange={armazenar}
          required
        >
          <option value="">Escolha uma Categoria:</option>
          <option value="Lazer">Lazer</option>
          <option value="Streaming">Streaming</option>
          <option value="Cursos">Cursos</option>
          <option value="Games">Games</option>
          <option value="Alimentação">Alimentação</option>
          <option value="Energia">Energia</option>
          <option value="Água">Água</option>
          <option value="Outros">Outros</option>
        </select>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Formulario;
