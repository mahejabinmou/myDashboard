import { useState } from "react";

/* sections */
import Appoinments from "../../../pages/Appoinments";
import Availablity from "../../../pages/Availablity";
import Calendar from "../../../pages/Calendar";
import ClientSms from "../../../pages/ClientSms";
import Invoices from "../../../pages/Invoices";
import MyClients from "../../../pages/myClients";
import Products from "../../../pages/Products";
import Reports from "../../../pages/Reports";
import Revenue from "../../../pages/Revenue";
import InvoicePage from "../../InvoicePage";
import Header from "../../shared/Header";
import Sidebar from "../../shared/Sidebar";

/**
 * DashboardLayout controls activeSection state and renders sidebar + header + content.
 */
export default function DashboardLayout() {
  const [activeSection, setActiveSection] = useState("overview");

  const renderSection = () => {
    switch (activeSection) {
      //   case "overview":
      //     return <Overview />;
      case "reports":
        return <Reports />;
      case "appoinments":
        return <Appoinments />;
      case "revenue":
        return <Revenue />;
      case "calendar":
        return <Calendar />;
      case "products":
        return <Products />;
      case "myClients":
        return <MyClients />;
      case "clientSms":
        return <ClientSms />;
      case "invoices":
        return <Invoices />;
      case "invoicePage":
        return <InvoicePage />;
      case "availablity":
        return <Availablity />;
      // case "profile":
      //   return <Profile />;
      case "logout":
        // implement logout logic if needed
        return (
          <div className="p-6">
            <h2 className="text-xl font-semibold">Logged out</h2>
          </div>
        );
      default:
        return <Reports />;
    }
  };

  return (
    <div className="flex gap-4 bg-[#070706] min-h-screen text-[#A5A5A5]">
      <div className="fixed top-0 left-0"></div>
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="flex gap-y-4 flex-col flex-1 min-h-screen ">
        <Header />
        <main className="flex-1 p-6  rounded-[16px]">{renderSection()}</main>
      </div>
    </div>
  );
}
