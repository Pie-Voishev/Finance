
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';

interface BudgetTableProps {
  monthlyIncome: number;
}

const BudgetTable: React.FC<BudgetTableProps> = ({ monthlyIncome }) => {
  const data = [
    {
      category: 'Essenciais',
      spent: 3200,
      budget: 4000,
      toSpend: 800,
      used: '80%',
      total: 4000,
    },
    {
      category: 'Investimentos',
      spent: 1800,
      budget: 2000,
      toSpend: 200,
      used: '90%',
      total: 2000,
    },
    {
      category: 'Lazer',
      spent: 600,
      budget: 1000,
      toSpend: 400,
      used: '60%',
      total: 1000,
    },
  ];

  const totalSpent = data.reduce((acc, curr) => acc + curr.spent, 0);
  const totalBudget = data.reduce((acc, curr) => acc + curr.budget, 0);
  const usedPercentage = monthlyIncome > 0 
    ? `${((totalSpent / monthlyIncome) * 100).toFixed(1)}%` 
    : '0%';

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <p className="text-3xl font-semibold text-[#1E293B]">
          R$ {monthlyIncome.toLocaleString('pt-BR')}
        </p>
        <p className="text-sm text-gray-500">Recebimento</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <p className="text-lg font-medium text-[#1E293B]">
            R$ {totalSpent.toLocaleString('pt-BR')}
          </p>
          <p className="text-sm text-gray-500">Valor Gasto</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-medium text-[#1E293B]">
            R$ {totalBudget.toLocaleString('pt-BR')}
          </p>
          <p className="text-sm text-gray-500">Deve Gastar</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-medium text-[#1E293B]">{usedPercentage}</p>
          <p className="text-sm text-gray-500">Utilizado</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-medium text-[#1E293B]">Categoria</TableHead>
              <TableHead className="text-right font-medium text-[#1E293B]">Gasto</TableHead>
              <TableHead className="text-right font-medium text-[#1E293B]">Budget</TableHead>
              <TableHead className="text-right font-medium text-[#1E293B]">Restante</TableHead>
              <TableHead className="text-right font-medium text-[#1E293B]">Utilizado</TableHead>
              <TableHead className="text-right font-medium text-[#1E293B]">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.category}</TableCell>
                <TableCell className="text-right">
                  R$ {row.spent.toLocaleString('pt-BR')}
                </TableCell>
                <TableCell className="text-right">
                  R$ {row.budget.toLocaleString('pt-BR')}
                </TableCell>
                <TableCell className="text-right">
                  R$ {row.toSpend.toLocaleString('pt-BR')}
                </TableCell>
                <TableCell className="text-right">{row.used}</TableCell>
                <TableCell className="text-right">
                  R$ {row.total.toLocaleString('pt-BR')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BudgetTable;
