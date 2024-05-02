import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Details = () => {
  const series = [
    {
      name: 'Female',
      type: 'column',
      data: [10, 15, 8, 12, 20, 18, 16, 22],
    },
    {
      name: 'Male',
      type: 'column',
      data: [8, 12, 15, 10, 18, 16, 20, 24],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: 'line',
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [1, 1, 4],
      colors: ['#87CEEB', '#FF69B4', '#B80000'], // Blue for males, pink for females, and bloody red for line
    },
    title: {
      text: 'Blood Donation Association - Participants by Gender (2022 - 2023)',
      align: 'left',
      offsetX: 110,
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yaxis: [
      {
        min: 0,
        seriesName: 'Female',
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#FF69B4',
        },
        labels: {
          style: {
            colors: '#FF69B4',
          },
        },
        title: {
          text: 'Female Participants',
          style: {
            color: '#FF69B4',
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      {
        min: 0,
        seriesName: 'Male',
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#87CEEB', // Blue color for males
        },
        labels: {
          style: {
            colors: '#87CEEB', // Blue color for males
          },
        },
        title: {
          text: 'Male Participants',
          style: {
            color: '#87CEEB', // Blue color for males
          },
        },
      },
    ],
    tooltip: {
      fixed: {
        enabled: true,
        position: 'topLeft',
        offsetY: 30,
        offsetX: 60,
      },
    },
    legend: {
      horizontalAlign: 'left',
      offsetX: 40,
    },
  };

  const series1 = [75, 25];
  const options1 = {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['Female', 'Male'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
    colors: ['#FF69B4', '#87CEEB'], // Pink for females, blue for males
  };

  const series2 = [
    {
      name: 'Blood Type',
      type: 'column',
      data: [500, 300, 400, 600, 350, 450, 550, 400], // Blood type quantities in ml
    },
  ];

  const options2 = {
    chart: {
      height: 350,
      type: 'line',
    },
    stroke: {
      width: [0, 4],
      colors: ['#FF69B4'], // Pink color for blood type line
    },
    title: {
      text: 'Blood Donation Association - Blood Type Statistics',
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [0],
    },
    labels: [
      'O+',
      'A+',
      'B+',
      'AB+',
      'O-',
      'A-',
      'B-',
      'AB-',
    ],
    xaxis: {
      type: 'category',
    },
    yaxis: [
      {
        title: {
          text: 'Quantity (ml)',
        },
      },
    ],
    tooltip: {
      enabled: true,
      shared: false,
      intersect: false,
      y: {
        formatter: function (val) {
          return val + ' ml';
        },
      },
    },
  };

  return (
    <div className="w-2/3 mx-auto overflow-hidden">
      <div id="chart" className="row mb-7 w-75 mx-auto">
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={350}
        />
      </div>
      <div className="row mx-auto">
        <div className="col-lg-6">
          <ReactApexChart
            options={options1}
            series={series1}
            type="pie"
            width={380}
          />
        </div>
        <div className="col-lg-6">
          <ReactApexChart
            options={options2}
            series={series2}
            type="line"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default Details;