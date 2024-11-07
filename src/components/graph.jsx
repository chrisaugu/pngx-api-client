import React from "react";
import { createUseStyles } from "react-jss";
import {
	AreaChart,
	Area,
	Tooltip,
	ResponsiveContainer,
	CartesianGrid,
	XAxis,
	YAxis,
	LineChart,
	Line,
	Legend
} from 'recharts';

// === STYLESHEET USING REACT-JSS ===
const useStyles = createUseStyles(() => ({
	container: {
		// color: "#fff",
		backgroundColor: "rgb(255, 255, 255)",
		padding: "1rem",
		transition: "0.3s ease-in-out",
		width: "100%",
		height: "400px",
		"& button": {
			color: "black",
			border: "1.5px solid #EDEEF1",
			width: 150,
			borderRadius: "15px",
		},
	}
}));

const GradientColors = () => {
	return (
		<linearGradient id="colorView" x1="0" y1="0" x2="0" y2="1">
			<stop offset="30%" stopColor="#8884d8" stopOpacity={0.4} />
			<stop offset="75%" stopColor="#ff9bff81" stopOpacity={0.3} />
			{/*=== ADD MORE COLOURS HERE ===*/}
			<stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.2} />
		</linearGradient>
	);
};

const data = [
	{
		name: 'Page A',
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: 'Page B',
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: 'Page C',
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: 'Page D',
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: 'Page E',
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: 'Page F',
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: 'Page G',
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
];

export const Graph = ({data}) => {
	let demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

	return (
		<ResponsiveContainer width="100%" height="100%">
			<LineChart
				width={500}
				height={300}
				data={data}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
				<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
			</LineChart>
		</ResponsiveContainer>
	);
}

const MyGraph = ({ data }) => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<h1> Plays </h1>
			<ResponsiveContainer width="100%" height="100%">
				<AreaChart data={data}>
					<defs>
						<GradientColors />
					</defs>
					<Tooltip
						itemStyle={{ color: "#fff", backgroundColor: "#0A1322" }}
						contentStyle={{ backgroundColor: "#0A1322" }}
					/>
					<CartesianGrid
						strokeDasharray="4 4"
						stroke="#8884d8"
						opacity={0.4}
					/>
					<XAxis
						dataKey="name"
						tick={{ fill: "#B6BAC3" }}
						stroke="#EEEEEE" />
					<YAxis
						tick={{ fill: "#B6BAC3" }}
						stroke="#EEEEEE" />
					<Area
						dataKey="view"
						type="monotone"
						stroke="#8884d8"
						strokeWidth={3}
						strokeOpacity={1}
						fill="url(#colorView)"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};

export default MyGraph;