import React from "react";
import './LineCharts.css';
import {
    LineChart, Line, ResponsiveContainer,
    XAxis, YAxis, CartesianGrid,
    Tooltip, Legend,
} from "recharts";



const LineChartComponent = ({ salesData }) => {
    return <ResponsiveContainer width="100%" height={400}>
        <LineChart
            width={300}
            height={300}
            data={salesData}
            margin={{ right: 30, top: 20 }}>

            <CartesianGrid strokeDasharray="3 3" />
            <YAxis />
            <XAxis dataKey="name" />
            <Tooltip content={<CustomTooltip />} />
            {/* bottom description */}
            <Legend />

            {/* <Line dataKey='revenue' fill="#3b82f6" type="monotone" /> */}
            <Line dataKey='profit' fill="#0f1d41"    stroke="#0f1d41"      type="monotone" name="Profit"/>
            <Line dataKey='previousProfit' fill="#3b82f6" stroke="#3b82f6" type="monotone" name="Previous Profit"/>
        </LineChart>
    </ResponsiveContainer>

}

const CustomTooltip = ({ active, payload, label }) => {
    // console.log("active: ", active);
    // console.log("payload: ", payload);
    // console.log("payload.length: ", payload.length);
    if (active && payload && payload.length) {
        return (
            <div className="popup-container">
                <p className="popup-title">{label}</p>
                <p className="popup-text">
                    Amount:
                    <span>${payload[0].value}</span>
                </p>
                <p className="popup2-text">
                    Previous:
                    <span>${payload[1].value}</span>
                </p>
            </div>
        );
    } else {
        return (null);
    }
};

export default LineChartComponent;