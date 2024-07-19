// Daily Traffic Dashboards Default

export const barChartDataDailyTraffic = [
  {
    name: "Daily Traffic",
    data: [20, 30, 40, 20, 45, 50, 30],
  },
];

export const barChartDataTotalEmailProcessed = [{
  name: "Real Time Threat Alerts",
  data: [20, 30, 40, 20, 45, 50, 30, 20, 40, 50, 28, 10],
},
];

export const barChartOptionsTotalEmailProcessed = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: true,
      style: {
        colors: "#CBD5E0",
        fontSize: "14px",
      },
    },
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      colorStops: [
        [
          {
            offset: 0,
            color: "#4318FF",
            opacity: 1,
          },
          {
            offset: 100,
            color: "rgba(67, 24, 255, 1)",
            opacity: 0.28,
          },
        ],
      ],
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      columnWidth: "40px",
    },
  },
};

export const barChartOptionsDailyTraffic = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["00", "04", "08", "12", "14", "16", "18"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: true,
      style: {
        colors: "#CBD5E0",
        fontSize: "14px",
      },
    },
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      colorStops: [
        [
          {
            offset: 0,
            color: "#4318FF",
            opacity: 1,
          },
          {
            offset: 100,
            color: "rgba(67, 24, 255, 1)",
            opacity: 0.28,
          },
        ],
      ],
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "40px",
    },
  },
};

export const barChartDataTrafficBreak = [
  {
    name: "Daily Traffic",
    data: [20, 30, 40],
  },
];

export const barChartOptionsTrafficBreak = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["Spam", "Legitimate", "Suspicious"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: true,
      style: {
        colors: "#CBD5E0",
        fontSize: "14px",
      },
    },
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      colorStops: [
        [
          {
            offset: 0,
            color: "#4318FF",
            opacity: 1,
          },
          {
            offset: 100,
            color: "rgba(67, 24, 255, 1)",
            opacity: 0.28,
          },
        ],
      ],
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "40px",
      colors: {
        customColors: function ({ seriesIndex, dataPointIndex, w }) {
          // Custom color function based on data point index
          const colors = ["#DD8A13", "#1D89BF", "#FF4F84"];
          return colors[dataPointIndex % colors.length];
        },
      },
      // colors: {
      //   ranges: [
      //     {
      //       from: 0,
      //       to: 1,
      //       color: "#FF4560", // Color for the first bar (Spam)
      //     },
      //     {
      //       from: 1,
      //       to: 2,
      //       color: "#00E396", // Color for the second bar (Legitimate)
      //     },
      //     {
      //       from: 2,
      //       to: 3,
      //       color: "#FEB019", // Color for the third bar (Suspicious)
      //     },
      //   ],
      // },
    },
  },
  colors: ["#DD8A13", "#1D89BF", "#FF4F84"], // Default colors for the bars
};

// Consumption Users Reports

export const barChartDataConsumption = [
  {
    name: "PRODUCT A",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
  },
  {
    name: "PRODUCT B",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
  },
  {
    name: "PRODUCT C",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
  },
];

export const barChartOptionsConsumption = {
  chart: {
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["17", "18", "19", "20", "21", "22", "23", "24", "25"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: false,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
  },

  grid: {
    borderColor: "rgba(163, 174, 208, 0.3)",
    show: true,
    yaxis: {
      lines: {
        show: false,
        opacity: 0.5,
      },
    },
    row: {
      opacity: 0.5,
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "solid",
    colors: ["#5E37FF", "#6AD2FF", "#E1E9F8"],
  },
  legend: {
    show: false,
  },
  colors: ["#5E37FF", "#6AD2FF", "#E1E9F8"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "20px",
    },
  },
};

export const pieChartOptions = {
  labels: ["Spam", "Legitimate", "Suspicious"],
  colors: ["#4318FF", "#6AD2FF", "pink"],
  chart: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#4318FF", "#6AD2FF", "pink"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
  },
};

export const pieChartOptionsTrafficBreak = {
  labels: ["Spam", "Legitimate", "Suspicious"],
  colors: ["#4318FF", "#6AD2FF", "pink"],
  chart: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#4318FF", "#6AD2FF", "pink"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
  },
};

export const pieChartDataTrafficBreak = [63, 25, 12];



export const pieChartData = [63, 25, 12];

// Total Spent Default

export const lineChartDataTotalSpent = [
  // {
  //   name: "Revenue",
  //   data: [50, 64, 48, 66, 49, 68],
  // },
  {
    name: "Total Email Processed",
    data: [30, 40, 24, 46, 20, 46, 35],
  },
];

export const lineChartOptionsTotalSpent = {
  chart: {
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 13,
      left: 0,
      blur: 10,
      opacity: 0.1,
      color: "#4318FF",
    },
  },
  colors: ["#4318FF", "#39B8FF"],
  markers: {
    size: 0,
    colors: "white",
    strokeColors: "#7551FF",
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: "circle",
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    showNullDataPoints: true,
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    type: "line",
  },
  xaxis: {
    type: "numeric",
    categories: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    labels: {
      style: {
        colors: "#A3AED0",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
    column: {
      color: ["#7551FF", "#39B8FF"],
      opacity: 0.5,
    },
  },
  color: ["#7551FF", "#39B8FF"],
};

export const lineChartDataInOutBound = [
  {
    name: "Good",
    data: [2, 5, 3, 2, 4, 6, 8],
  },
  {
    name: "Total",
    data: [24, 27, 26, 21, 25, 38, 27],
  },
  {
    name: "Malware",
    data: [5, 1, 8, 4, 2, 7, 3],
  },
  {
    name: "Phishing",
    data: [4, 7, 6, 3, 2, 7, 5],
  },
  {
    name: "Spam",
    data: [3, 8, 5, 2, 3, 4, 6],
  },
  {
    name: "Edge Protection",
    data: [1, 4, 2, 4, 7, 9, 2],
  },
  {
    name: "Rule Messages",
    data: [9, 4, 2, 6, 7, 5, 3],
  },
];

export const lineChartOptionsInOutBound = {
  chart: {
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 13,
      left: 0,
      blur: 10,
      opacity: 0.1,
      color: "#0D920B",
    },
  },
  colors: ["#0D920B", "#E856B2", "#0D920B", "#952720", "#DE6E1C", "#EB3C3D", "#952720"],
  markers: {
    size: 0,
    colors: "white",
    strokeColors: "#0D920B",
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: "circle",
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    showNullDataPoints: true,
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    type: "line",
  },
  xaxis: {
    type: "numeric",
    categories: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    labels: {
      style: {
        colors: "#A3AED0",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
    column: {
      color: ["#0D920B", "#E856B2", "#0D920B", "#952720", "#DE6E1C", "#EB3C3D", "#952720"],
      opacity: 0.5,
    },
  },
  color: ["#0D920B", "#E856B2", "#0D920B", "#952720", "#DE6E1C", "#EB3C3D", "#952720"],
};


export const pieChartDataDistributionThreat = [10, 18, 31, 41];

export const pieChartOptionsDistributionThreat = {
  labels: ["Critical", "Low", "Medium", "High",],
  colors: ["#FFCC99", "#99FF99", "#66B3FF", "#FF9999"],
  chart: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#FFCC99", "#99FF99", "#66B3FF", "#FF9999"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    y: {
      formatter: function (value) {
        // Calculate the total sum of the series
        // const total = pieChartDataThreatBreak.reduce((acc, val) => acc + val, 0);
        // Calculate the percentage of the current value
        // const percentage = (value / total * 100).toFixed(2);
        return `${value}%`;
      }
    }
  },
};

export const lineChartDataThreatDetectedLine = [
  {
    name: "Number of Threats Detected",
    data: [2, 5, 3, 2, 4, 6, 8, 10, 5, 7, 3, 6],
  },
  // {
  //   name: "Total",
  //   data: [24, 27, 26, 21, 25, 38, 27],
  // },
  // {
  //   name: "Malware",
  //   data: [5, 1, 8, 4, 2, 7, 3],
  // },
  // {
  //   name: "Phishing",
  //   data: [4, 7, 6, 3, 2, 7, 5],
  // },
  // {
  //   name: "Spam",
  //   data: [3, 8, 5, 2, 3, 4, 6],
  // },
  // {
  //   name: "Edge Protection",
  //   data: [1, 4, 2, 4, 7, 9, 2],
  // },
  // {
  //   name: "Rule Messages",
  //   data: [9, 4, 2, 6, 7, 5, 3],
  // },
];

export const lineChartOptionsThreatDetected = {
  chart: {
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 13,
      left: 0,
      blur: 10,
      opacity: 0.1,
      color: "#0D920B",
    },
  },
  colors: ["#E856B2", "#E856B2", "#0D920B", "#952720", "#DE6E1C", "#EB3C3D", "#952720"],
  // colors: ["#0D920B", "#E856B2", "#0D920B", "#952720", "#DE6E1C", "#EB3C3D", "#952720"],
  markers: {
    size: 0,
    colors: "white",
    strokeColors: "#0D920B",
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: "circle",
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    showNullDataPoints: true,
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    type: "line",
  },
  xaxis: {
    type: "numeric",
    categories: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    labels: {
      style: {
        colors: "#A3AED0",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
    column: {
      color: ["#0D920B", "#E856B2", "#0D920B", "#952720", "#DE6E1C", "#EB3C3D", "#952720"],
      opacity: 0.5,
    },
  },
  color: ["#0D920B", "#E856B2", "#0D920B", "#952720", "#DE6E1C", "#EB3C3D", "#952720"],
};

export const pieChartDataThreatBreak = [10, 18, 31, 41, 50, 20];

export const pieChartOptionsThreatBreak = {
  labels: ["DDoS", "Malware", "Phishing", "Ransomware", "Spam", "Spyware"],
  colors: ["#F8766D", "#B79F00", "#00BA38", "#00BFC4", "#619CFF", "#F564E3"],
  chart: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#F8766D", "#B79F00", "#00BA38", "#00BFC4", "#619CFF", "#F564E3"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    // y: {
    //   formatter: function (value) {
    //     // Calculate the total sum of the series
    //     // const total = pieChartDataThreatBreak.reduce((acc, val) => acc + val, 0);
    //     // Calculate the percentage of the current value
    //     // const percentage = (value / total * 100).toFixed(2);
    //     return `${value}%`;
    //   }
    // }
  },
};


//donut chart

export const donutChartDataTrafficBreak = [10, 18, 31, 41, 50];
export const donutChartOptionsTrafficBreak = {
  labels: ["Spam", "Malware", "Phishing", "Legitimate", "Suspicious"],
  colors: ["#10B981", "#F59E0B", "#F43F5E", "#8B5CF6", "#3B82F6"],
  plotOptions: {
    pie: {
      donut: {
        size: '65%',
        labels: {
          show: false
        }
      }
    }
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#10B981", "#F59E0B", "#F43F5E", "#8B5CF6", "#3B82F6"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    // y: {
    //   formatter: function (value) {
    //     const total = chartData.reduce((acc, val) => acc + val, 0);
    //     const percentage = (value / total * 100).toFixed(2);
    //     return `${percentage}%`;
    //   }
    // }
  },
};


//Stacked Area chart

export const areaChartDataThreatTreands = [
  { name: 'Phishing', data: [10, 40, 28, 51, 42, 109, 100] },
  { name: 'Malware', data: [0, 32, 45, 32, 34, 52, 41] },
  { name: 'Spam', data: [0, 11, 20, 12, 31, 22, 10] },
  { name: 'BEC', data: [0, 31, 28, 5, 12, 45, 22] },
];

export const areaChartOptionsThreatTreands = {
  chart: {
    type: 'area',
    stacked: true, // Enable stacking for the area chart
    height: 350,
  },
  colors: ["#F8766D", "#B79F00", "#00BA38", "#3B82F6"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    // type: 'area',
  },
  xaxis: {
    type: 'numeric',
    categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
    labels: {
      style: {
        colors: "#A3AED0",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false
    }
  },
  tooltip: {
    theme: "dark",
  },
  fill: {
    opacity: 1,
  },
  legend: {
    show: false,
    position: 'top',
    horizontalAlign: 'center',
    colors: ["#F8766D", "#B79F00", "#00BA38", "#3B82F6"],
  },
  grid: {
    show: false,
    column: {
      color: ["#F8766D", "#B79F00", "#00BA38", "#3B82F6"],
      opacity: 0.5,
    },
  },
  color: ["#F8766D", "#B79F00", "#00BA38", "#3B82F6"],
};

export const barChartDataThreatTrends = [
  {
    name: "Phishing",
    data: [400, 370, 330, 390, 320, 350, 200, 320, 350, 400, 300, 350],
  },
  {
    name: "Malware",
    data: [370, 380, 390, 390, 320, 380, 250, 320, 400, 350, 300, 200],
  },
  {
    name: "Spam",
    data: [360, 370, 330, 390, 320, 390, 300, 320, 380, 200, 400, 300],
  },
  {
    name: "BEC",
    data: [320, 370, 330, 400, 200, 350, 360, 320, 330, 400, 250, 300],
  }
];

export const barChartOptionsThreatTreands = {
  chart: {
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: false,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
  },

  grid: {
    borderColor: "rgba(163, 174, 208, 0.3)",
    show: true,
    yaxis: {
      lines: {
        show: false,
        opacity: 0.5,
      },
    },
    row: {
      opacity: 0.5,
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "solid",
    colors: ["#F3495A", "#58A1EE", "#73F36D", "#F29D64"],
  },
  legend: {
    show: false,
  },
  colors: ["#F3495A", "#58A1EE", "#73F36D", "#F29D64"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      columnWidth: "40px",
    },
  },
};


//Incident Analysis Report charts 
export const barChartDataQuarantined = [
  {
    name: "Finance",
    data: [400, 370, 330, 390, 320, 350, 200, 320, 350, 400, 300, 350],
  },
  {
    name: "HR",
    data: [370, 380, 390, 390, 320, 380, 250, 320, 400, 350, 300, 200],
  },
  {
    name: "IT",
    data: [360, 370, 330, 390, 320, 390, 300, 320, 380, 200, 400, 300],
  },
  {
    name: "Marketinh",
    data: [320, 370, 330, 400, 200, 350, 360, 320, 330, 400, 250, 300],
  },
  {
    name: "Sales",
    data: [370, 380, 390, 390, 320, 380, 250, 320, 400, 350, 300, 200],
  },
];

export const barChartOptionsQuarantined = {
  chart: {
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: false,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
  },

  grid: {
    borderColor: "rgba(163, 174, 208, 0.3)",
    show: true,
    yaxis: {
      lines: {
        show: false,
        opacity: 0.5,
      },
    },
    row: {
      opacity: 0.5,
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "solid",
    colors: ["#E28383", "#6A97EC", "#5EED9A", "#EED444", "#B069F2"],
  },
  legend: {
    show: false,
  },
  colors: ["#E28383", "#6A97EC", "#5EED9A", "#EED444", "#B069F2"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      columnWidth: "40px",
    },
  },
};

export const pieChartDataQuarantined = [50, 30, 20];

export const pieChartOptionsQuarantined = {
  labels: ["External", "Internal", "Unknown",],
  colors: ["#E9A295", "#FFC359", "#4DB59F",],
  chart: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#E9A295", "#FFC359", "#4DB59F",],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    y: {
      formatter: function (value) {
        // Calculate the total sum of the series
        // const total = pieChartDataThreatBreak.reduce((acc, val) => acc + val, 0);
        // Calculate the percentage of the current value
        // const percentage = (value / total * 100).toFixed(2);
        return `${value}%`;
      }
    }
  },
};

export const pieChartDataSPFCheck = [31, 33, 36];

export const pieChartOptionsSPFCheck = {
  labels: ["Missing", "Pass", "Fail",],
  colors: ["#FFCC99", "#99FF99", "#66B3FF",],
  chart: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#FFCC99", "#99FF99", "#66B3FF",],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    y: {
      formatter: function (value) {
        // Calculate the total sum of the series
        // const total = pieChartDataThreatBreak.reduce((acc, val) => acc + val, 0);
        // Calculate the percentage of the current value
        // const percentage = (value / total * 100).toFixed(2);
        return `${value}%`;
      }
    }
  },
};

export const pieChartDataDKIMCheck = [42, 33, 25];

export const pieChartOptionsDKIMCheck = {
  labels: ["Missing", "Pass", "Fail",],
  colors: ["#FFCC99", "#99FF99", "#66B3FF",],
  chart: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#FFCC99", "#99FF99", "#66B3FF",],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    y: {
      formatter: function (value) {
        // Calculate the total sum of the series
        // const total = pieChartDataThreatBreak.reduce((acc, val) => acc + val, 0);
        // Calculate the percentage of the current value
        // const percentage = (value / total * 100).toFixed(2);
        return `${value}%`;
      }
    }
  },
};

export const barChartDataDiffDomain = [
  {
    name: "Authenticated",
    data: [400, 370, 330, 390, 320],
  },
  {
    name: "Unauthenticated",
    data: [370, 380, 390, 390, 320],
  },
  // {
  //   name: "IT",
  //   data: [360, 370, 330, 390, 320, 390, 300, 320, 380, 200, 400, 300],
  // },
  // {
  //   name: "Marketinh",
  //   data: [320, 370, 330, 400, 200, 350, 360, 320, 330, 400, 250, 300],
  // },
  // {
  //   name: "Sales",
  //   data: [370, 380, 390, 390, 320, 380, 250, 320, 400, 350, 300, 200],
  // },
];

export const barChartOptionsDiffDomain = {
  chart: {
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["example.com", "test.com", "outlook.com", "yahoo.com", "gmail.com"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: false,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
  },

  grid: {
    borderColor: "rgba(163, 174, 208, 0.3)",
    show: true,
    yaxis: {
      lines: {
        show: false,
        opacity: 0.5,
      },
    },
    row: {
      opacity: 0.5,
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "solid",
    colors: ["#A1C8E8", "#F3AFAA", "#00BA38", "#3B82F6"],
  },
  legend: {
    show: false,
  },
  colors: ["#A1C8E8", "#F3AFAA", "#00BA38", "#3B82F6"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      columnWidth: "40px",
    },
  },
};

export const pieChartDataDMARCCheck = [34, 33, 33];

export const pieChartOptionsDMARCCheck = {
  labels: ["Missing", "Pass", "Fail",],
  colors: ["#FFCC99", "#99FF99", "#66B3FF",],
  chart: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#FFCC99", "#99FF99", "#66B3FF",],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    y: {
      formatter: function (value) {
        // Calculate the total sum of the series
        // const total = pieChartDataThreatBreak.reduce((acc, val) => acc + val, 0);
        // Calculate the percentage of the current value
        // const percentage = (value / total * 100).toFixed(2);
        return `${value}%`;
      }
    }
  },
};

export const lineChartDataBlockedEmails = [
  {
    name: "Number of Blocked Emails",
    data: [2, 5, 3, 2, 4, 6, 8, 10, 5, 7, 3, 6],
  },
  // {
  //   name: "Total",
  //   data: [24, 27, 26, 21, 25, 38, 27],
  // },
  // {
  //   name: "Malware",
  //   data: [5, 1, 8, 4, 2, 7, 3],
  // },
  // {
  //   name: "Phishing",
  //   data: [4, 7, 6, 3, 2, 7, 5],
  // },
  // {
  //   name: "Spam",
  //   data: [3, 8, 5, 2, 3, 4, 6],
  // },
  // {
  //   name: "Edge Protection",
  //   data: [1, 4, 2, 4, 7, 9, 2],
  // },
  // {
  //   name: "Rule Messages",
  //   data: [9, 4, 2, 6, 7, 5, 3],
  // },
];

export const lineChartOptionsBlockedEmails = {
  chart: {
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 13,
      left: 0,
      blur: 10,
      opacity: 0.1,
      color: "#0D920B",
    },
  },
  colors: ["#E856B2", "#E856B2", "#0D920B", "#952720", "#DE6E1C", "#EB3C3D", "#952720"],
  // colors: ["#0D920B", "#E856B2", "#0D920B", "#952720", "#DE6E1C", "#EB3C3D", "#952720"],
  markers: {
    size: 0,
    colors: "white",
    strokeColors: "#0D920B",
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: "circle",
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    showNullDataPoints: true,
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    type: "line",
  },
  xaxis: {
    type: "numeric",
    categories: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    labels: {
      style: {
        colors: "#A3AED0",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
    column: {
      color: ["#0D920B", "#E856B2", "#0D920B", "#952720", "#DE6E1C", "#EB3C3D", "#952720"],
      opacity: 0.5,
    },
  },
  color: ["#0D920B", "#E856B2", "#0D920B", "#952720", "#DE6E1C", "#EB3C3D", "#952720"],
};

export const barChartDataBlockedEmails = [{
  name: "Blocked Emails",
  data: [20, 30, 40, 20, 45, 50, 30, 20, 40, 50, 28, 10],
},
];

export const barChartOptionsBlockedEmails = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: true,
      style: {
        colors: "#CBD5E0",
        fontSize: "14px",
      },
    },
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      colorStops: [
        [
          {
            offset: 0,
            color: "#4318FF",
            opacity: 1,
          },
          {
            offset: 100,
            color: "rgba(67, 24, 255, 1)",
            opacity: 0.28,
          },
        ],
      ],
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      columnWidth: "40px",
    },
  },
};

export const pieChartDataEmailStatusSandBox = [32.7, 31.8, 35.5];

export const pieChartOptionsEmailStatusSandBox = {
  labels: ["Malicious", "Suspicious", "Safe",],
  colors: ["#91EE91", "#F7C497", "#9ED1F5",],
  chart: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#91EE91", "#F7C497", "#9ED1F5",],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    y: {
      formatter: function (value) {
        // Calculate the total sum of the series
        // const total = pieChartDataThreatBreak.reduce((acc, val) => acc + val, 0);
        // Calculate the percentage of the current value
        // const percentage = (value / total * 100).toFixed(2);
        return `${value}%`;
      }
    }
  },
};

export const pieChartDataThreatTypeSandBox = [37.5, 23.5, 39.0];

export const pieChartOptionsThreatTypeSandBox = {
  labels: ["Spam", "Malware", "Phishing",],
  colors: ["#2DCE89", "#5E72E4", "#23B7E5",],
  chart: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#2DCE89", "#5E72E4", "#23B7E5",],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    y: {
      formatter: function (value) {
        // Calculate the total sum of the series
        // const total = pieChartDataThreatBreak.reduce((acc, val) => acc + val, 0);
        // Calculate the percentage of the current value
        // const percentage = (value / total * 100).toFixed(2);
        return `${value}%`;
      }
    }
  },
};

export const barChartDataDetectedByClient = [{
  name: "Number of Threats Detected by Client",
  data: [20, 30, 40, 20, 45],
},
];

export const barChartOptionsDetectedByClient = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["A", "B", "C", "D", "E"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: true,
      style: {
        colors: "#CBD5E0",
        fontSize: "14px",
      },
    },
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      colorStops: [
        [
          {
            offset: 0,
            color: "#DF4382",
            opacity: 1,
          },
          {
            offset: 100,
            color: "#DF4382",
            opacity: 0.28,
          },
        ],
      ],
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      columnWidth: "40px",
    },
  },
};

export const barChartDataThreatsFromDomain = [{
  name: "Number of Threats from Domains",
  data: [20, 30, 40, 20, 45],
},
];

export const barChartOptionsThreatsFromDomain = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["example.com", "test.com", "outlook.com", "yahoo.com", "gmail.com"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: true,
      style: {
        colors: "#CBD5E0",
        fontSize: "14px",
      },
    },
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      colorStops: [
        [
          {
            offset: 0,
            color: "#EC9E51",
            opacity: 1,
          },
          {
            offset: 100,
            color: "#EC9E51",
            opacity: 0.28,
          },
        ],
      ],
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      columnWidth: "40px",
    },
  },
};