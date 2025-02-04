import Formulario from "./Formulario";
import ListaDeGastos from "./ListaDeGastos";
import GraficoDeGastos from "./GraficoDeGastos";
import { useState } from "react";

function App() {
    const [gastos, setGastos] = useState([]);
    const [orcamento, setOrcamento] = useState(0);

    return (
        <>
            <Formulario setGastos={setGastos} setOrcamento={setOrcamento} />
            <ListaDeGastos gastos={gastos} orcamento={orcamento} />
            <GraficoDeGastos gastos={gastos} />
        </>
    );
}

export default App;
