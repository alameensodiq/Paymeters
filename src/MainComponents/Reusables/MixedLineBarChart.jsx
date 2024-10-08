import Chart from "react-apexcharts";

function MixedLineBarChart({color, background, daily}) {
  const series = [
    {
      name: "Website Blog",
      type: "column",
      data: daily ? [440, 505, 414, 671] : [440, 505, 414, 671]
    },
    {
      name: "Social Media",
      type: "line",
      data: daily ? [23, 402, 35, 207] : [23, 402, 35, 207]
    }
  ];

  const options = {
    colors: [background],
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false
      }
    },
    grid: {
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
        borderRadius: 1
      }
    },
    stroke: {
      width: [0, 1.6],
      colors: [color]
    },
    dataLabels: {
      enabled: false,
      enabledOnSeries: [1]
    },
    yaxis: {
      show: false,
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    labels: daily ? ["02-01-2024", "03-01-2024", "04-01-2024", "05-01-2024"] :  ["Jan", "Feb", "Mar", "Apr"],
    legend: {
      show: false,
      fontSize: "11px"
    },
    fill: {
      opacity: 0.4,
    //   colors: background
    }
  };

  return (
    <div>
      <div id="chart">
        <Chart options={options} series={series} type="line" height={140} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default MixedLineBarChart;
