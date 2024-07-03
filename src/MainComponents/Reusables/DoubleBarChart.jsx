import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

function DoubleBarChart() {
  const series = [
    {
      name: "Income",
      type: "column",
      data: [14, 20, 25, 15, 35, 28, 38, 46]
    },
    {
      name: "Cashflow",
      type: "column",
      data: [11, 33, 31, 40, 41, 49, 65, 85]
    }
  ];

  const options = {
    colors: ["#E9EDF5", "#9932CC"],
    chart: {
      height: 220,
      type: "bar",
      toolbar: {
        show: false
      }
    },
    grid: {
      show: false
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
        borderRadius: 1
        //   endingShape: 'rounded',
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      //   curve: "smooth",
      //   width: [1, 1, 4]
      show: true,
      width: 2,
      colors: ["transparent"]
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
    },
    yaxis: {
      tickAmount: 5,
      min: 0,
      max: 100
    },
    fill: {
      opacity: 1
    },
    // tooltip: {
    //   x: {
    //     formatter: undefined,
    //     title: "Title: "
    //   }
    // },
    legend: {
      show: false // Set this to false to hide legend labels
    }
  };

  return <Chart options={options} series={series} type="bar" height={290} />;
}
export default DoubleBarChart;
