function ListaDeGastos({ gastos = [] }) {

    // Função para calcular o total dos gastos
    function gastoTotal() {
        return gastos.reduce((total, gasto) => total + parseFloat(gasto.valor), 0);
       
    }


    return (
        <div>
            <h2>Lista de Gastos</h2>
            <ul>
                {gastos.map((gasto, index) => (
                    <li key={index}>
                        <strong>{gasto.nome}</strong> - R$ {parseFloat(gasto.valor)} - {gasto.data} ({gasto.categoria})
                    </li>
                ))}
            </ul>
            <h3>Total gasto no Mês: R$ {gastoTotal().toFixed(2)}</h3>
        </div>
    );
}

export default ListaDeGastos;
