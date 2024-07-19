export const lineChartDataEmailProcessed = [
    {
        name: "Total Email Processed",
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

export const lineChartOptionsEmailProcessed = {
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

export const barChartDataEmailProcessed = [{
    name: "Number of Emails Processed",
    data: [50, 30, 20, 40, 50, 28, 10],
},
];

export const barChartOptionsEmailProcessed = {
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
        categories: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT",],
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

export const barChartDataTrafficBreak = [{
    name: "Email Traffic Breakdown",
    data: [50, 30, 20, 40, 50,],
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
        categories: ["SPAM", "MALWARE", "PHISHING", "LEGITIMATE", "SUSPICIOUS",],
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
                        color: "#F05191",
                        opacity: 1,
                    },
                    {
                        offset: 100,
                        color: "#F05191",
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

export const barChartDataTopSending = [{
    name: "Number of Emails",
    data: [350, 230, 180, 80],
},
];

export const barChartOptionsTopSending = {
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
        categories: ["example.com", "example.org", "example.ne", "example.edu"],
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
                        color: "#F0A356",
                        opacity: 1,
                    },
                    {
                        offset: 100,
                        color: "#F0A356",
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

export const barChartDataTopReceiving = [{
    name: "Number of Emails",
    data: [80, 180, 250, 350],
},
];

export const barChartOptionsTopReceiving = {
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
        categories: ["example.com", "example.org", "example.ne", "example.edu"],
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
                        color: "#B055F1",
                        opacity: 1,
                    },
                    {
                        offset: 100,
                        color: "#B055F1",
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

export const pieChartDataTopSending = [16, 20, 16, 48];

export const pieChartOptionsTopSending = {
    labels: ["demo.net", "test.com", "sample.org", "example.com"],
    colors: ["#F8766D", "#C77CFF", "#00BFC4", "#7CAE00"],
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
        colors: ["#F8AAA5", "#D1A3F5", "#A5F1F3", "#D7F390"],
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

export const pieChartDataTopReceiving = [18, 46, 16, 20];

export const pieChartOptionsTopReceiving = {
    labels: ["demo.net", "test.com", "sample.org", "example.com"],
    colors: ["#F8766D", "#C77CFF", "#00BFC4", "#7CAE00"],
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
        colors:  ["#F8AAA5", "#D1A3F5", "#A5F1F3", "#D7F390"],
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

export const lineChartDataInOutBound = [
    {
        name: "Total",
        data: [24, 27, 26, 21, 25, 38, 27],
    },
    {
        name: "Good Mail",
        data: [4, 7, 3, 2, 4, 6, 8],
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
    // {
    //   name: "Edge Protection",
    //   data: [1, 4, 2, 4, 7, 9, 2],
    // },
    // {
    //   name: "Rule Messages",
    //   data: [9, 4, 2, 6, 7, 5, 3],
    // },
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
    colors: ["#0D920B", "#E856B2", "#952720", "#EB3C3D", "#DE6E1C", "#EB3C3D", "#952720"],
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
            color: ["#0D920B", "#E856B2", "#952720", "#EB3C3D", "#DE6E1C", "#EB3C3D", "#952720"],
            opacity: 0.5,
        },
    },
    color: ["#0D920B", "#E856B2", "#952720", "#EB3C3D", "#DE6E1C", "#EB3C3D", "#952720"],
};