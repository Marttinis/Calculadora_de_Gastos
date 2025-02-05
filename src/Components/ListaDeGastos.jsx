import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import "./ListarGastos.css";

function ListaDeGastos({ gastos = [], orcamento = 0 }) {
  function gastoTotal() {
    return gastos.reduce((total, gasto) => total + parseFloat(gasto.valor), 0);
  }

  const total = gastoTotal();

  function gerarPDF() {
    const input = document.getElementById("lista-gastos");

    html2canvas(input, { scale: 3 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 10, imgWidth, imgHeight);
      pdf.save("Lista_de_Gastos.pdf");
    });
  }

  return (
    <div className="container">
      <div id="lista-gastos">
        <h2>Lista de Gastos 📋</h2>
        <ul>
          {gastos.map((gasto, index) => (
            <li key={index}>
              <strong>{gasto.nome}</strong> - R${" "}
              {parseFloat(gasto.valor).toFixed(2)} - {gasto.data} (
              {gasto.categoria})
            </li>
          ))}
        </ul>
        <h3>Orçamento do Mês: R$ {orcamento.toFixed(2)}</h3>
        <h3>Total gasto no Mês: R$ {total.toFixed(2)}</h3>
        {total > orcamento && (
          <h3 style={{ color: "red" }}>⚠️ Você ultrapassou o orçamento!</h3>
        )}
      </div>

      <button onClick={gerarPDF} className="btn-download">
        📄 Baixar em PDF
      </button>
    </div>
  );
}

export default ListaDeGastos;
