// Step 1 - Include react
import React from "react";

// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
// Preparing the chart data
const chartData = [
    {
        label: "Venezuela",
        value: "290"
    },
    {
        label: "Saudi",
        value: "260"
    },
    {
        label: "Canada",
        value: "180"
    },
    {
        label: "Iran",
        value: "140"
    },
    {
        label: "Russia",
        value: "115"
    },
    {
        label: "UAE",
        value: "100"
    },
    {
        label: "US",
        value: "30"
    },
    {
        label: "China",
        value: "30"
    }
];

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
    }
    render() {
        const chartConfigs = {
            type: "column3d", // The chart type
            width: "700", // Width of the chart
            height: "400", // Height of the chart
            dataFormat: "json", // Data type
            dataSource: {
                // Chart Configuration
                chart: {
                    //Set the chart caption
                    caption: "Countries With Most Oil Reserves [2017-18]",
                    //Set the chart subcaption
                    subCaption: "In MMbbl = One Million barrels",
                    //Set the x-axis name
                    xAxisName: "Country",
                    //Set the y-axis name
                    yAxisName: "Reserves (MMbbl)",
                    numberSuffix: "K",
                    //Set the theme for your chart
                    theme: "fusion"
                },
                // Chart Data
                data: chartData
            }
        };
        return (
            <div className={'container'}>
                <ReactFC {...chartConfigs} />
                <div className="mys-meter">
                    <div className="mys-meter-content">
                        <p>002235.25</p>
                    </div>
                </div>
            </div>

        );
    }
}

export default Gallery;