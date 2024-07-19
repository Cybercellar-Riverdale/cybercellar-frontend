export const barChartDataUserRiskScore = [{
    name: "Risk Score",
    data: [50, 30, 20, 40, 50, 20, 10, 80, 60, 90],
},
];

export const barChartOptionsUserRiskScore = {
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
        categories: ["USER 1", "USER 2", "USER 3", "USER 4", "USER 5", "USER 6", "USER 7", "USER 8", "USER 9", "USER 10"],
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

export const barChartDataUserRiskProfile = [
    {
        name: "User 1",
        data: [400, 370, 330, 390, 320,],
    },
    {
        name: "User 2",
        data: [370, 380, 390, 390, 320,],
    },
    {
        name: "User 3",
        data: [360, 370, 330, 390, 320,],
    },
    {
        name: "User 4",
        data: [320, 370, 330, 400, 200,],
    },
    {
        name: "User 5",
        data: [370, 380, 390, 390, 320,],
    },
];

export const barChartOptionsUserRiskProfile = {
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
        categories: ["SPAM", "MALWARE", "PHISING", "DATA LEAK", "A/C COMPROMISE"],
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
        colors: ["#A9D959", "#E88EC5", "#91A3CD", "#FC9167", "#6BC4A8"],
    },
    legend: {
        show: false,
    },
    colors: ["#A9D959", "#E88EC5", "#91A3CD", "#FC9167", "#6BC4A8"],
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

export const barChartDataUserClicksPhishingLinks = [{
    name: "Number of Phishing Links Clicked",
    data: [10, 50, 5, 15, 7, 40, 35, 28, 5, 10],
},
];

export const barChartOptionsUserClicksPhishingLinks = {
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
        categories: ["USER 1", "USER 2", "USER 3", "USER 4", "USER 5", "USER 6", "USER 7", "USER 8", "USER 9", "USER 10"],
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
                        color: "#F38212",
                        opacity: 1,
                    },
                    {
                        offset: 100,
                        color: "#F38212",
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

export const pieChartDataUserClicksPhishingLinks = [29, 71];

export const pieChartOptionsUserClicksPhishingLinks = {
    labels: ["Clicked", "Did Not Clicked",],
    colors: ["#FDBB81", "#1F77B4",],
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
        colors: ["#F5B67F", "#8CC8F2",],
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

export const lineChartDataReportedPhishingAttempts = [
    {
        name: "Number of Reported Phishing Attempts",
        data: [6, 3, 7, 5, 10, 8, 6, 4, 2, 3, 5, 2],
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

export const lineChartOptionsReportedPhishingAttempts = {
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

export const barChartDataReportedPhishingAttempts = [
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
        name: "Marketing",
        data: [320, 370, 330, 400, 200, 350, 360, 320, 330, 400, 250, 300],
    },
    {
        name: "Sales",
        data: [370, 380, 390, 390, 320, 380, 250, 320, 400, 350, 300, 200],
    },
];

export const barChartOptionsReportedPhishingAttempts = {
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
        colors: ["#EEB868", "#49DCB1", "#456990", "#EF767A", "#1B96C6"],
    },
    legend: {
        show: false,
    },
    colors: ["#EEB868", "#49DCB1", "#456990", "#EF767A", "#1B96C6"],
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

export const donutChartDataUserTrainingRates = [25.4, 74.6];
export const donutChartOptionsUserTrainingRates = {
    labels: ["Not Completed", "Completed"],
    colors: ["#A1F2E9", "#E0B2F0"],
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
        colors: ["#A1F2E9", "#E0B2F0"],
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