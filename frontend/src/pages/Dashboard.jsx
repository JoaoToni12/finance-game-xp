import BalanceCard from '../components/dashboard/BalanceCard';
import LevelCard from '../components/dashboard/LevelCard';
import BudgetOverview from '../components/dashboard/BudgetOverview';
import BudgetChart from '../components/charts/BudgetChart';
import Achievements from '../components/dashboard/Achievements';
import FinancialGoals from '../components/dashboard/FinancialGoals';
import TransactionsList from '../components/dashboard/TransactionsList';

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6 pb-32 animate-in fade-in duration-500">
      {/* Espaço para o Header não cobrir o conteúdo */}
      <div className="h-2"></div>

      <section>
        <BalanceCard />
      </section>

      <section>
        <LevelCard />
      </section>

      <section>
        <BudgetOverview />
      </section>
      
      <section>
        <BudgetChart />
      </section>

      <section>
        <FinancialGoals />
      </section>

      <section>
        <Achievements />
      </section>

      <section>
        <TransactionsList />
      </section>
    </div>
  );
}