import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useCurrency } from '../hooks/useCurrency';
import { Currency } from '../types/currency';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ExchangeChartProps {
  fromCurrency: Currency;
  toCurrency: Currency;
  className?: string;
}

const ExchangeChart: React.FC<ExchangeChartProps> = ({ 
  fromCurrency, 
  toCurrency, 
  className = '' 
}) => {
  const { fetchHistoricalRates } = useCurrency();
  const [chartData, setChartData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadChartData = async () => {
      setLoading(true);
      try {
        const rates = await fetchHistoricalRates(fromCurrency.code, toCurrency.code, 7);
        const labels = Array.from({ length: 7 }, (_, i) => {
          const date = new Date();
          date.setDate(date.getDate() - (6 - i));
          return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        });

        setChartData({
          labels,
          datasets: [
            {
              label: `${fromCurrency.code} to ${toCurrency.code}`,
              data: rates,
              borderColor: '#FFD700',
              backgroundColor: 'rgba(255, 215, 0, 0.1)',
              borderWidth: 2,
              fill: true,
              tension: 0.4,
              pointBackgroundColor: '#FFD700',
              pointBorderColor: '#B8860B',
              pointHoverBackgroundColor: '#FFA500',
              pointHoverBorderColor: '#FFD700',
              pointRadius: 4,
              pointHoverRadius: 6,
            },
          ],
        });
      } catch (error) {
        console.error('Failed to load chart data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadChartData();
  }, [fromCurrency.code, toCurrency.code, fetchHistoricalRates]);

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#FFD700',
        bodyColor: '#FFF',
        borderColor: '#FFD700',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 215, 0, 0.1)',
        },
        ticks: {
          color: '#FFD700',
          font: {
            family: 'Inter',
            size: 12,
          },
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 215, 0, 0.1)',
        },
        ticks: {
          color: '#FFD700',
          font: {
            family: 'Inter',
            size: 12,
          },
          callback: function(value) {
            return typeof value === 'number' ? value.toFixed(4) : value;
          },
        },
      },
    },
    elements: {
      point: {
        hoverBorderWidth: 3,
      },
    },
  };

  if (loading) {
    return (
      <div className={`glass-card p-4 rounded-xl ${className}`}>
        <div className="flex items-center justify-center h-48">
          <div className="animate-spin w-8 h-8 border-2 border-yellow-400 border-t-transparent rounded-full"></div>
          <span className="ml-3 text-yellow-400 font-inter">Loading chart...</span>
        </div>
      </div>
    );
  }

  if (!chartData) {
    return (
      <div className={`glass-card p-4 rounded-xl ${className}`}>
        <div className="flex items-center justify-center h-48 text-yellow-400 font-inter">
          Chart data unavailable
        </div>
      </div>
    );
  }

  return (
    <div className={`glass-card p-4 rounded-xl ${className}`}>
      <h3 className="font-playfair font-semibold text-yellow-400 text-lg mb-4">
        7-Day Exchange Rate Trend
      </h3>
      <div className="h-48">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default ExchangeChart;