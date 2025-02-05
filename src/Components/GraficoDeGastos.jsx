import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "./GraficodeGastos.css"

// Registrando os componentes do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Grafico({ gastos }) {
  const [dadosGrafico, setDadosGrafico] = useState({
    labels: [],
    datasets: [],
  });


  const coresCategorias = {
    Lazer: "rgba(255, 99, 132, 0.6)", 
    Streaming: "rgba(54, 57, 235, 0.6)", 
    Cursos: "rgba(255, 206, 86, 0.6)", 
    Games: "rgba(75, 192, 192, 0.6)", 
    Alimentação: "rgba(153, 102, 255, 0.6)",
    Energia: "rgba(255, 159, 64, 0.6)", 
    Água: "rgba(0, 128, 255, 0.6)",
    Outros: "rgba(201, 203, 207, 0.6)", 
  };


  useEffect(() => {
    const categorias = {};
    gastos.forEach((gasto) => {
      if (categorias[gasto.categoria]) {
        categorias[gasto.categoria] += parseFloat(gasto.valor);
      } else {
        categorias[gasto.categoria] = parseFloat(gasto.valor);
      }
    });

    setDadosGrafico({
      labels: Object.keys(categorias),
      datasets: [
        {
          label: "Gastos por Categoria",
          data: Object.values(categorias),
          backgroundColor: Object.keys(categorias).map(
            (categoria) => coresCategorias[categoria] || "rgba(0, 0, 0, 0.6)"
          ), 
          borderColor: Object.keys(categorias).map(
            (categoria) => coresCategorias[categoria].replace("0.6", "1")
          ), 
          borderWidth: 1,
        },
      ],
    });
  }, [gastos]);

  return (
    <div id="divGrafico">
    <div
      style={{
        width: "100%",
        maxWidth: "418px",
        height: "330px",
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "#f8f9fa",
        borderRadius: "10px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        border: "5px solid  rgba(0, 0, 0, 0.8)",
      }}
    >
      <h2 style={{ textAlign: "center", fontSize: "24px" }}>
        Gráfico de Gastos 📊 
      </h2>
      <div style={{ width: "100%", height: "250px" }}>
        <Bar
          data={dadosGrafico}
          options={{
            responsive: true,
            maintainAspectRatio: false, 
            plugins: {
              legend: { display: false },
            },
            scales: {
              y: { beginAtZero: true },
            },
          }}
        />
      </div>
    </div>
    </div>
  );
}

export default Grafico;
