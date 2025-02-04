import "./ListarGastos.css";

function ListaDeGastos({ gastos = [], orcamento = 0 }) {
  function gastoTotal() {
    return gastos.reduce((total, gasto) => total + parseFloat(gasto.valor), 0);
  }

  const total = gastoTotal();

  return (
    <div className="container">
      <h2>Lista de Gastos 📋</h2>
      <ul>
        {gastos.map((gasto, index) => (
          <li key={index}>
            <strong>{gasto.nome}</strong> - R$ {parseFloat(gasto.valor).toFixed(2)} -{" "}
            {gasto.data} ({gasto.categoria})
          </li>
        ))}
      </ul>
      <h3>Orçamento do Mês: R$ {orcamento.toFixed(2)}</h3>
      <h3>Total gasto no Mês: R$ {total.toFixed(2)}</h3>
      {total > orcamento && <h3 style={{ color: "red" }}>⚠️ Você ultrapassou o orçamento!</h3>}
    </div>
  );
}

export default ListaDeGastos;
