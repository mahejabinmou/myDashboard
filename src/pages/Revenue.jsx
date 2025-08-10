import NewCustomers from "../components/NewCustomers/NewCustomers";
import RevenueCard from "../components/RevenueCard/RevenueCard";
import RevenueChart from "../components/RevenueChart/RevenueChart";
import TransactionsTable from "./TransactionsTable";

const Revenue = () => {
  return (
    <div className="">
      <div className="grid grid-cols-[auto,25%] gap-x-4 mb-[24px]">
        <div>
          <RevenueCard />
          <RevenueChart />
        </div>
        <div>
          <NewCustomers />
        </div>
      </div>
      <TransactionsTable />
    </div>
  );
};

export default Revenue;
