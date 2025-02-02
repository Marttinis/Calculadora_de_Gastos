function ListaDeGastos({ gastos = [] }) {
    return (
        <div>
            <h2>Lista de Gastos</h2>
            <ul>
                {gastos.map((gasto, index) => (
                    <li key={index}>
                        <strong>{gasto.nome}</strong> - R$ {gasto.valor} - {gasto.data} ({gasto.categoria})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaDeGastos;