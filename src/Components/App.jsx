import Formulario from "./Formulario";
import ListaDeGastos from "./ListaDeGastos";
import GraficoDeGastos from "./GraficoDeGastos";
import { useState } from "react";
import Nav from "./Nav";
import './App.css'
import Footer from "./Footer";


function App() {
    const [gastos, setGastos] = useState([]);
    const [orcamento, setOrcamento] = useState(0);

    return (
        <div>
           
            <Nav />
            <div id="formGraf">
            <Formulario setGastos={setGastos} setOrcamento={setOrcamento} />
            <GraficoDeGastos gastos={gastos} />
            </div>
            <ListaDeGastos gastos={gastos} orcamento={orcamento} />
            <Footer />
        </div>
    );
}

export default App;
