import BudgetSummary from "../components/BudgetSummary";
import Sidebar from "../components/Sidebar";
import Top from "../components/Top";

const Dashboard = () => {
  return (
    <main>
      <div className="md:flex">
        <div className="md:w-[325px]">
          <Sidebar />
        </div>
      <div className="-mt-14 md:mt-0 w-full">
        <Top
        heading = "Financial Dashboard"
        subtitle = "Welcome back, User🙏"
        />
        <BudgetSummary />
      </div>
      </div>
    </main>
  );
};

export default Dashboard;
