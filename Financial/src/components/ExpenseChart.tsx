
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface ExpenseChartProps {
  onSelectExpense: (value: number) => void;
  selectedValue: number;
}

const ExpenseChart: React.FC<ExpenseChartProps> = ({ onSelectExpense, selectedValue }) => {
  const data = [
    { name: 'Alimentação', value: 1200 },
    { name: 'Moradia', value: 2000 },
    { name: 'Transporte', value: 800 },
    { name: 'Lazer', value: 500 },
    { name: 'Outros', value: 700 },
  ];

  const COLORS = ['#0EA5E9', '#38BDF8', '#7DD3FC', '#BAE6FD', '#E0F2FE'];
  const totalExpenses = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="relative h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            onClick={(_, index) => onSelectExpense(data[index].value)}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-sm text-gray-500">Total</p>
        <p className="text-2xl font-semibold text-[#1E293B]">
          R$ {(selectedValue || totalExpenses).toLocaleString('pt-BR')}
        </p>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {data.map((entry, index) => (
          <div key={entry.name} className="flex items-center text-sm">
            <div
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <span className="text-gray-600">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseChart;
