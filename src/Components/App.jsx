import Formulario from "./Formulario";
import ListaDeGastos from "./ListaDeGastos";
import GraficoDeGastos from "./GraficoDeGastos";
import { useState } from "react";

function App() {
    const [gastos, setGastos] = useState([]);

    return (
        <>
            <Formulario setGastos={setGastos} />
            <ListaDeGastos gastos={gastos} />
            <GraficoDeGastos gastos={gastos} />
        </>
    );
}

export default App;
