import React from "react";
import {
    LineChart, Line, ResponsiveContainer,
    XAxis, YAxis, CartesianGrid,
    Tooltip, Legend,
} from "recharts";



const LineChartComponent = ({ salesData }) => {
    return <ResponsiveContainer>
        <LineChart
            width={500}
            height={300}
            data={salesData}
            margin={{ right: 30 }}>

            <CartesianGrid strokeDasharray="3 3" />
            <YAxis />
            <XAxis dataKey="name" />
           
            {/* bottom description */}
            <Legend />

            <Line dataKey='revenue' fill="#3b82f6" type="monotone" />
            <Line dataKey='profit' fill="#8b5cf6" type="monotone" />
        </LineChart>
    </ResponsiveContainer>

}

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
                <p className="text-medium text-lg text-white">{label}</p>
                <p className="text-sm text-blue-400">
                    revenue:
                    <span className="ml-2">${payload[0].value}</span>
                </p>
                <p className="text-sm text-indigo-400">
                    profit:
                    <span className="ml-2">${payload[1].value}</span>
                </p>
            </div>
        );
    }
};

export default LineChartComponent;