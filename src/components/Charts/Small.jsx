import React, { useRef, useEffect, useState } from 'react'

import _, { map } from 'underscore'
import moment from 'moment'

import {Page, Text} from '@geist-ui/core'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from 'chart.js';
import { Chart, Line } from 'react-chartjs-2';
import faker from 'faker'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

// const colors = [
//   'red',
//   'orange',
//   'yellow',
//   'lime',
//   'green',
//   'teal',
//   'blue',
//   'purple',
// ];

// const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       backgroundColor: 'rgb(255, 99, 132)',
//       borderColor: 'rgb(255, 99, 132)',
//       data: [0, 10, 5, 2, 20, 30, 45],
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//     },
//     {
//       label: 'Dataset 3',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//     },
//   ],
// };

// function createGradient(ctx, area) {
//   const colorStart = faker.random.arrayElement(colors);
//   const colorMid = faker.random.arrayElement(
//       colors.filter(color => color !== colorStart)
//   );
//   const colorEnd = faker.random.arrayElement(
//       colors.filter(color => color !== colorStart && color !== colorMid)
//   );
//
//   const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
//
//   gradient.addColorStop(0, colorStart);
//   gradient.addColorStop(0.5, colorMid);
//   gradient.addColorStop(1, colorEnd);
//
//   return gradient;
// }

export default function SmallGraph({ quotes }) {
  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: 'Dataset 1',
  //       backgroundColor: 'rgb(255, 99, 132)',
  //       borderColor: 'rgb(255, 99, 132)',
  //       data: [0, 10, 5, 2, 20, 30, 45],
  //     },
  //     {
  //       label: 'Dataset 2',
  //       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
  //     },
  //     {
  //       label: 'Dataset 3',
  //       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
  //     },
  //   ],
  // };


  const options = {
    responsive: true,

    // interaction: {
    //   mode: 'index',
    //   intersect: false,
    // },
    // stacked: false,
    // scales: {
    //   y: {
    //     type: 'linear',
    //     display: true,
    //     position: 'left',
    //   },
    //   y1: {
    //     type: 'linear',
    //     display: true,
    //     position: 'right',
    //     grid: {
    //       drawOnChartArea: false,
    //     },
    //   },
    // },
  };

  // let highs = _.pluck(quotes, 'high')
  // let lows = _.pluck(quotes, 'low')
  // let opens = _.pluck(quotes, 'open')
  let closes = _.pluck(quotes, 'close')
  // let bids = _.pluck(quotes, 'bid')
  // let dates = _.pluck(quotes, 'date')
  // let vols = _.pluck(quotes, 'vol_today')
  // let days = _.map(dates, function(date){ return labels[new Date(date).getDay()] })

  const data = {
    // labels,
    label: [],
    datasets: [
      // {
      //   label: 'high',
      //   data: highs,
      //   borderColor: 'rgb(255, 99, 132)',
      //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
      //   yAxisID: 'y',
      // },
      // {
      //   label: 'low',
      //   data: lows,
      //   borderColor: 'rgb(53, 162, 235)',
      //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
      //   yAxisID: 'y1',
      // },
      {
        label: 'close',
        data: closes,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      },
      // {
      //   label: 'volume',
      //   data: vols
      // }
    ]
  }

  console.log(data)

  // const chartRef = useRef(null);
  // const [chartData, setChartData] = useState({
  //   datasets: [],
  // });

  // useEffect(() => {
  //   const chart = chartRef.current;

  //   if (!chart) {
  //     return;
  //   }

  //   if (chart) {
  //     setChartData({
  //       ...data,
  //       // datasets: [{
  //           // backgroundColor: createBackgroundGradient(chart.ctx),
  //           // ...
  //       // }]
  //     });
  //     // setChartData({
  //     //   ...data,
  //     //   datasets: data.datasets.map(dataset => ({
  //     //     ...dataset,
  //     //     borderColor: createGradient(chart.ctx, chart.chartArea),
  //     //   })),
  //     // });
  //   }

  // }, []);

  return (<Chart options={options} type='line' data={data} />)
}