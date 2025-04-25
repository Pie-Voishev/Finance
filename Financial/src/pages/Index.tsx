
import React, { useState } from 'react';
import ExpenseChart from '../components/ExpenseChart';
import BudgetTable from '../components/BudgetTable';
import FinancialGoals from '../components/FinancialGoals';
import HeaderFields from '../components/HeaderFields';

const Index = () => {
  const [selectedExpense, setSelectedExpense] = useState<number>(0);
  const [monthlyIncome, setMonthlyIncome] = useState<number>(5000);

  const handleExpenseSelect = (value: number) => {
    setSelectedExpense(value);
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold text-[#1E293B]">
          Dashboard Financeiro
        </h1>
        <HeaderFields onIncomeChange={setMonthlyIncome} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-[#E0F2FE] p-4">
          <h2 className="text-xl font-medium text-[#1E293B] mb-4">Gastos</h2>
          <ExpenseChart onSelectExpense={handleExpenseSelect} selectedValue={selectedExpense} />
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-[#E0F2FE] p-4">
          <h2 className="text-xl font-medium text-[#1E293B] mb-4">Resumo do Orçamento</h2>
          <BudgetTable monthlyIncome={monthlyIncome} />
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-[#E0F2FE] p-4">
          <h2 className="text-xl font-medium text-[#1E293B] mb-4">Metas Financeiras</h2>
          <FinancialGoals />
        </div>
      </div>
    </div>
  );
};

export default Index;
