
import React, { useState } from 'react';

interface Goal {
  name: string;
  percentage: number;
}

const FinancialGoals = () => {
  const [goals, setGoals] = useState<Goal[]>([
    { name: 'Investimentos', percentage: 25 },
    { name: 'Despesas fixas', percentage: 30 },
    { name: 'Despesas variáveis', percentage: 20 },
    { name: 'Despesas extras', percentage: 10 },
    { name: 'Despesas prazeres', percentage: 15 },
  ]);

  const handlePercentageChange = (index: number, newValue: number) => {
    const newGoals = [...goals];
    newGoals[index].percentage = Math.min(100, Math.max(0, newValue));
    setGoals(newGoals);
  };

  const totalPercentage = goals.reduce((sum, goal) => sum + goal.percentage, 0);

  return (
    <div className="space-y-4">
      {goals.map((goal, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm text-[#1E293B]">{goal.name}</label>
            <div className="flex items-center">
              <input
                type="number"
                value={goal.percentage}
                onChange={(e) => handlePercentageChange(index, Number(e.target.value))}
                className="w-16 text-right border border-[#E0F2FE] rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent"
              />
              <span className="ml-1 text-sm text-gray-500">%</span>
            </div>
          </div>
          <div className="relative h-2 bg-[#E0F2FE] rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-[#0EA5E9] rounded-full transition-all duration-300"
              style={{ width: `${goal.percentage}%` }}
            />
          </div>
        </div>
      ))}
      
      <div className="pt-4 border-t border-[#E0F2FE]">
        <div className="flex justify-between items-center">
          <span className="font-medium text-[#1E293B]">Total</span>
          <span className={`font-medium ${totalPercentage === 100 ? 'text-green-500' : 'text-red-500'}`}>
            {totalPercentage}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default FinancialGoals;
