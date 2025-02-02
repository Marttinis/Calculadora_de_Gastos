import { useState } from 'react';
import './Formulario.css'
import ListaDeGastos from './ListaDeGastos';
function Formulario() {

    const valorIncial = {
        nome: '',
        valor: '',
        data:'',
        categoria: ''

    }

    const [value, setValue] = useState(valorIncial)
    const [gastos, setGastos] = useState([]);

    function armazenar(ev){
        const {name, value} = ev.target;
        setValue((prevValue) => ({
            ...prevValue,
            [name]: value
        }));

    }


    function cadastrar(ev) {
        ev.preventDefault();
        // console.log("Gasto cadastrado:", value); // Simula o envio dos dados
        setGastos((prevGastos) => [...prevGastos, value]); 
        setValue(valorIncial); // Limpa o formulário
    }
    
    return (
        <div id='formulario'>
            <form onSubmit={cadastrar}>
                <h1>Calculadora de Gastos 🧮</h1>
                <label htmlFor="Nome"> </label>
                <input type="text" id='nome' name='nome' value={value.nome} onChange={armazenar} placeholder="Com o que você gastou?" required />

                <label htmlFor="Nome"> </label>
                <input type="number" id='valor' name='valor' value={value.valor} onChange={armazenar} placeholder="Quanto gastou nisto ?" required />

                <label htmlFor="data"></label>
                <input type="data" name="data" id="data" value={value.data} onChange={armazenar} placeholder='Data de Pagamento' required />

                <label htmlFor="categorias"></label>

                <select name="categoria" id="categoria" value={value.categoria} onChange={armazenar} required>
                    <option value="">Escolha uma Categoria:</option>
                    <option value="Lazer">Lazer</option>
                    <option value="Streaming">Streaming</option>
                    <option value="Cursos">Cursos</option>
                    <option value="Games">Games</option>
                    <option value="Fast Food">Fast Food</option>
                    <option value="Mercado">Mercado</option>
                    <option value="Outros">Outros</option>
                </select>

                <div id='botao'>
                    <button type='submit'>Cadastrar</button>
                </div>

            </form>
            <ListaDeGastos gastos={gastos} />
        </div>
    );
}

export default Formulario;