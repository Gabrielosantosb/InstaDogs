import React, { useEffect } from 'react';
import { GraphContainer, GraphItem, Total } from './styles';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';


export const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  useEffect(() => {
    const graphData = data.map((item) => ({
      x: item.title,
      y: Number(item.acessos),
    }));

    const totalValue = data
      .map(({ acessos }) => Number(acessos))
      .reduce((a, b) => a + b, 0);

    setTotal(totalValue);
    setGraph(graphData);
  }, [data]);



  return (
    <GraphContainer>
      <Total>
        <p>Acessos: {total}</p>
      </Total>
      <GraphItem>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#333',
            },
          }}
        />
      </GraphItem>
      <GraphItem>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph} />
        </VictoryChart>
      </GraphItem>
    </GraphContainer>
  );
};
