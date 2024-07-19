import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class DonutChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: this.props.chartData,
      chartOptions: this.props.chartOptions,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.chartData !== this.props.chartData || prevProps.chartOptions !== this.props.chartOptions) {
      this.setState({
        chartData: this.props.chartData,
        chartOptions: this.props.chartOptions,
      });
    }
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type='donut'
        width='100%'
        height='100%'
      />
    );
  }
}

export default DonutChart;
