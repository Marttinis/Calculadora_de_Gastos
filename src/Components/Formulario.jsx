import '../assets/css/Formulario.css'
function Formulario() {
    
    return (
        <div id='formulario'>
            <form>
                <h1>Calculadora de Gastos 🧮</h1>
                <label htmlFor="Nome">Salario Total: </label>
                <input type="number" id='Salario' placeholder="Digite o valor do seu Salario" required />

                <label htmlFor="Nome">Com o que você gastou? </label>
                <input type="text" id='nome' placeholder="" required />

                <label htmlFor="Nome">Valor: </label>
                <input type="number" id='valor' placeholder="Quanto gastou nisto ?" required />

                <div id='botao'>
                    <button href="">Enviar</button>
                </div>

            </form>
        </div>
    );
}

export default Formulario;