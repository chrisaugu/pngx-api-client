import React from 'react';
import { Card, Text, Spacer, Divider, Image } from '@geist-ui/core';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

export const StockTickerCard = ({ stockName, tickerSymbol, price, priceChange, logoUrl }) => {
  const priceChangeColor = priceChange >= 0 ? 'green' : 'red';

  return (
    <>
    <Card width="300px">
      <Text h4>{stockName}</Text>
      <Divider />
      <Text type="secondary">{tickerSymbol}</Text>
      <Spacer h={0.5} />
      <Text h3>${price.toFixed(2)}</Text>
      <Text style={{ color: priceChangeColor }}>
        {priceChange >= 0 ? '+' : '-'}${Math.abs(priceChange).toFixed(2)} ({((priceChange / price) * 100).toFixed(2)}%)
      </Text>
    </Card>

    <Card width="400px" shadow>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Left Side: Company Logo */}
        <Image src={logoUrl} width={50} height={50} style={{ borderRadius: '50%' }} alt='logo' />

        {/* Spacer between logo and stock details */}
        <Spacer inline x={1} />

        {/* Right Side: Stock Details */}
        <div style={{ flex: 1 }}>
          <Text h4>{stockName}</Text>
          <Text type="secondary">{tickerSymbol}</Text>
          <Spacer h={0.5} />
          <Text h3>${price.toFixed(2)}</Text>
          <Text style={{ color: priceChangeColor }}>
            {priceChange >= 0 ? '+' : '-'}${Math.abs(priceChange).toFixed(2)} ({((priceChange / price) * 100).toFixed(2)}%)
          </Text>
        </div>
      </div>
    </Card>
    </>
  );
};

export const StockTickerCard2 = ({ stock }) => {
  const data = [
    { date: '2022-01-01', price: 100 },
    { date: '2022-01-02', price: 120 },
    { date: '2022-01-03', price: 110 },
    // ...
  ];

  return (
    <Card hoverable>
      <Text h4>{stock.symbol}</Text>
      <Text type="secondary" small>
        {stock.name}
      </Text>
      <Spacer y={0.5} />
      <Text b>
        {stock.price} {stock.currency}
      </Text>
      <Text type={stock.change > 0 ? 'success' : 'error'} small>
        {stock.change > 0 ? '+' : '-'} {stock.change.toFixed(2)}%
      </Text>
        <LineChart width={200} height={100} data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Line type="monotone" dataKey="price" stroke="#8884d8" />
      </LineChart>
    </Card>
  );
};

export const StockTickerCard3 = ({ stockName, tickerSymbol, price, priceChange, percentageChange, graphColor }) => {
  const priceChangeColor = priceChange >= 0 ? 'green' : 'red';
  const stockTrendData = [
    { day: 1, price: 45 }, { day: 2, price: 47 }, { day: 3, price: 46 },
    { day: 4, price: 48 }, { day: 5, price: 49 }, { day: 6, price: 50 },
    { day: 7, price: 51 }, { day: 8, price: 49 }, { day: 9, price: 48 },
    { day: 10, price: 47 }, { day: 11, price: 46 }, { day: 12, price: 45 }
  ];
  return (
    <Card width="350px" style={{ backgroundColor: '#121212', color: '#fff', borderRadius: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Left side: Stock Details */}
        <div>
          <Text h5 style={{ color: '#aaa' }}>{stockName}</Text>
          <Text h2>{tickerSymbol}</Text>
          <Text h3>${price.toFixed(2)}</Text>
          <Text style={{ color: priceChangeColor, fontSize: '16px' }}>
            {priceChange >= 0 ? '+' : '-'}${Math.abs(priceChange).toFixed(2)} ({percentageChange}%)
          </Text>
        </div>

        {/* Right side: Stock trend graph */}
        <ResponsiveContainer width={100} height={50}>
          <LineChart data={stockTrendData}>
            <Line type="monotone" dataKey="price" stroke={graphColor} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <Spacer h={0.5} />
      <Text small style={{ textAlign: 'right', color: '#aaa' }}>*30 Days</Text>
    </Card>
  );
};