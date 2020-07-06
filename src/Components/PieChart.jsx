import React, { useLayoutEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PieChart = ({ data }) => {
    const [pieData, setPieData] = useState({});

    useLayoutEffect(() => {
        setPieData((pieData) => ({
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
            series: [
                {
                    type: 'pie',
                    data: Object.entries(data.data),
                },
            ],
        }));
    }, [data]);

    return (
        <>
            {pieData.title && (
                <div>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={pieData}
                    />
                </div>
            )}
        </>
    );
};

export default PieChart;
