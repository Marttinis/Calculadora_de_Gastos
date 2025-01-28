import '../assets/css/Formulario.css'
function Formulario() {
    return (
        <div id='formulario'>
            <form>
                <h1>Calculadora</h1>
                <label htmlFor="Nome">Nome: </label>
                <input type="text" placeholder="Digite seu nome" required />

                <label htmlFor="Nome">Gastos: </label>
                <input type="text" placeholder="Quanto gastou nisto ?" required />

                <div id='botao'>
                    <button>Enviar</button>
                </div>

            </form>
        </div>
    );
}

export default Formulario;