import { useTheme } from "next-themes"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"
import { Bar } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const Chart = () => {
  const { theme } = useTheme()

  const getChartColors = () => {
    switch (theme) {
      case "security-red":
        return ["#dc2626", "#ff7800", "#ff4d4d"]
      case "futuristic-purple":
        return ["#6366f1", "#3490fc", "#a377ff"]
      default:
        return ["#15803d", "#00b4d8", "#0077b6"]
    }
  }

  const chartColors = getChartColors()

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  }

  const data = {
    labels: ["January", "February", "March"],
    datasets: [
      {
        label: "Dataset 1",
        data: [12, 19, 3],
        backgroundColor: chartColors[0],
      },
      {
        label: "Dataset 2",
        data: [2, 10, 15],
        backgroundColor: chartColors[1],
      },
      {
        label: "Dataset 3",
        data: [10, 5, 20],
        backgroundColor: chartColors[2],
      },
    ],
  }

  return <Bar options={options} data={data} />
}

export default Chart

