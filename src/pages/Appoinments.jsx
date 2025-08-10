import AppoinmentsCard from "../components/AppoinmentsCard/AppoinmentsCard";
import AppointmentStats from "../components/AppointmentStats/AppointmentStats";
import RecentStats from "../components/RecentStats/RecentStats";
import TransactionsTable from "./TransactionsTable";

const Appoinments = () => {
  return (
    <div>
      <AppoinmentsCard />
      <div className="grid grid-cols-1 md:grid-cols-[auto,30%] gap-6 mb-[24px]">
        <AppointmentStats />
        <RecentStats />
      </div>
      <TransactionsTable />
    </div>
  );
};

export default Appoinments;
