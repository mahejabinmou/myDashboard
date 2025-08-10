import ClientDetails from "../components/InvoiceForm/ClientDetails";
import Communication from "../components/InvoiceForm/Communication";
import InvoiceDetails from "../components/InvoiceForm/InvoiceDetails";
import LineItems from "../components/InvoiceForm/LineItems";
import InvoicePreview from "../components/InvoicePreview";
import Header from "./shared/Header";
import Sidebar from "./shared/Sidebar";
import CustomButton from "./ui/CustomButton/CustomButton";

const InvoicePage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <Header />
        <div className="bg-[#070706] p-6">
          <div className="flex justify-between items-center pb-[30px]">
            <h1 className="text-[#F6F6F6]">Create Invoice</h1>
            <div className="flex items-center gap-4">
              <CustomButton
                variant="secondary"
                className="bg-[#1E1D2B] text-[#A5A5A5] px-[20px] py-[12px] rounded-[12px]"
              >
                Hide Preview
              </CustomButton>
              <CustomButton variant="primary">Review Invoice</CustomButton>
            </div>
          </div>
          <div className=" min-h-screen  grid grid-cols-1 lg:grid-cols-[auto,40%] gap-x-4">
            <div className="space-y-4">
              <InvoiceDetails />
              <LineItems />
              <ClientDetails />
              <Communication />
            </div>
            <div className="flex ">
              <InvoicePreview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;
