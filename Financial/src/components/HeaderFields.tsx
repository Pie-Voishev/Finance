
import React, { useState } from 'react';
import { Input } from './ui/input';

interface HeaderFieldsProps {
  onIncomeChange: (value: number) => void;
}

const HeaderFields: React.FC<HeaderFieldsProps> = ({ onIncomeChange }) => {
  const [month, setMonth] = useState('Abril');
  const [year, setYear] = useState('2024');
  const [income, setIncome] = useState('5000');

  const handleIncomeChange = (value: string) => {
    setIncome(value);
    onIncomeChange(Number(value) || 0);
  };

  return (
    <div className="flex gap-4 items-center justify-end mb-4">
      <div>
        <Input
          type="text"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="w-32"
          placeholder="Mês"
        />
      </div>
      <div>
        <Input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-24"
          placeholder="Ano"
        />
      </div>
      <div>
        <Input
          type="number"
          value={income}
          onChange={(e) => handleIncomeChange(e.target.value)}
          className="w-40"
          placeholder="Renda Mensal"
        />
      </div>
    </div>
  );
};

export default HeaderFields;
