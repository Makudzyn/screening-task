'use client';

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

interface PopulationCounts {
  year: number;
  value: number;
}

export default function PopulationChart({
  populationData,
}: {
  populationData: PopulationCounts[];
}) {
  const data = {
    labels: populationData.map((entry) => entry.year.toString()),
    datasets: [
      {
        label: 'Population Over Time',
        data: populationData.map((entry) => entry.value),
        borderColor: 'blue',
        fill: false,
      },
    ],
  };

  return (
    <div className="mt-4">
      <h2 className="mb-2 text-xl font-semibold">Population Chart</h2>
      <Line data={data} />
    </div>
  );
}
