import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [],
  datasets: [
    {
      label: '#',
      data: [35, 50, 20],
      backgroundColor: [
        'rgba(31, 120, 230, 0.8)',
        'rgba(235, 189, 29, 0.8)',
        'rgba(216, 48, 28, 0.8)',
        
      ],
      borderColor: [
        'rgba(31, 120, 230, 0.8)',
        'rgba(235, 189, 29, 0.8)',
        'rgba(216, 48, 28, 0.8)'
      ],
      borderWidth: 1,
    },
  ],
};

export function Chart() {
  return <Pie 
  data={data}
  />;
}
