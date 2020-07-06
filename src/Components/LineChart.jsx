import React, { useLayoutEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const LineChart = ({ data }) => {
    const [lineData, setLineData] = useState({});

    useLayoutEffect(() => {
        setLineData((lineData) => ({
            xAxis: {
                title: {
                    text: data.xAxis,
                },
                categories: data.categories,
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
                    plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: ${point.y}',
                    },
                },
            },
            title: {
                text: data.name,
            },
            series: data.data,
        }));
    }, [data]);

    return (
        <>
            {lineData.title && (
                <div>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={lineData}
                    />
                </div>
            )}
        </>
    );
};

export default LineChart;
