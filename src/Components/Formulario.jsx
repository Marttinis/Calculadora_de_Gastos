import { useState } from 'react';
import './Formulario.css'
function Formulario() {

    const {nome, setnome} = useState()

    function armazenar(){
        

    }
    
    return (
        <div id='formulario'>
            <form>
                <h1>Calculadora de Gastos 🧮</h1>
                <label htmlFor="Nome"> </label>
                <input type="text" id='nome' value={nome} placeholder="Com o que você gastou?" required />

                <label htmlFor="Nome"> </label>
                <input type="number" id='valor' placeholder="Quanto gastou nisto ?" required />

                <label htmlFor="data"></label>
                <input type="data" name="data" id="data" placeholder='Data de Pagamento' />

                <label htmlFor="categorias"></label>


                <select name="" id="">
                    <option value="lazer">Escolha uma Categoria:</option>
                    <option value="lazer">Lazer</option>
                    <option value="streaming">Streaming</option>
                    <option value="cursos">Cursos</option>
                    <option value="games">Games</option>
                    <option value="Food">Fast Food</option>
                    <option value="mercado">Mercado</option>
                    <option value="outros">Outros</option>
                </select>

                <div id='botao'>
                    <button href="">Cadastrar</button>
                </div>

            </form>
        </div>
    );
}

export default Formulario;