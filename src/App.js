import React, { useState } from 'react';
import { Card, Layout } from 'antd';

import PieChart from './Components/PieChart';
import LineChart from './Components/LineChart';

import 'antd/dist/antd.css';
import './App.css';

const { Header, Footer, Content } = Layout;

const App = () => {
    const [pieData] = useState({
        name: 'Suma de total_amounts por status',
        data: {
            APPROVED: 161621.69,
            PENDING: 27465.85,
            REJECTED: 53722.73,
        },
    });

    const [lineData] = useState({
        name: 'Suma de total_items',
        xAxis: 'creation_date',
        categories: ['05/01/20', '05/02/20', '05/03/20'],
        data: [
            {
                name: 'APPROVED',
                data: [50, 5, 12],
            },
            {
                name: 'PENDING',
                data: [0, 9, 0],
            },{
                name: 'REJECTED',
                data: [5, 9, 2],
            },
        ],
    });

    return (
        <Layout style={{ width: '720px', margin: '0 auto' }}>
            <Header></Header>
            <Content>
                <Card>
                    <PieChart data={pieData} />
                </Card>

                <Card>
                    <LineChart data={lineData} />
                </Card>
            </Content>
            <Footer>
                By{' '}
                <a
                    href="mailto:dniskav@gmail.com"
                    rel="noopener noreferrer"
                    target="_blank">
                    dniskav@gmail.com
                </a>
            </Footer>
        </Layout>
    );
};

export default App;
