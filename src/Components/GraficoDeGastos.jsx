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
          backgroundColor: "rgba(54, 162, 235, 0.6)", // Azul
          borderColor: "rgba(54, 162, 235, 1)", // Borda azul
          borderWidth: 1,
        },
      ],
    });
  }, [gastos]);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "418px",
        height: "300px",
        margin: "20px auto",
        padding: "10px",
        backgroundColor: "#f8f9fa",
        borderRadius: "10px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        border: "5px solid  rgba(0, 0, 0, 0.8)",
      }}
    >
      <h2 style={{ textAlign: "center", fontSize: "24px" }}>
        Gráfico de Gastos
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
  );
}

export default Grafico;
