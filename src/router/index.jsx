// import { createBrowserRouter } from "react-router-dom";
// import RootLayout from "../layouts/RootLayout";

// import AddProduct from "../components/AddProduct/AddProduct";
// import InvoicePage from "../components/InvoicePage";
// import MultiStepForm from "../components/MultiStepForm/MultiStepForm";
// import DasboardLayout from "../components/ui/Dashboard/DasboardLayout";
// import Appoinments from "../pages/Appoinments";
// import Availablity from "../pages/Availablity";
// import Calendar from "../pages/Calendar";
// import CalendarAppoinmentModal from "../pages/CalendarAppoinmentModal/CalendarAppoinmentModal";
// import ClientSms from "../pages/clientSms";
// import EarningsChart from "../pages/EarningsChart";
// import Invoices from "../pages/Invoices";
// import MyClients from "../pages/myClients";
// import Reports from "../pages/Reports";
// import Revenue from "../pages/Revenue";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       {
//         path: "/",
//         element: <MultiStepForm />,
//       },

//       // Dashboard + Private Routes
//       {
//         path: "/dasboardLayout",
//         element: (
//           <PrivateRoute>
//             <DasboardLayout />
//           </PrivateRoute>
//         ),
//         children: [
//           { path: "reports", element: <Reports /> },
//           { path: "charts", element: <EarningsChart /> },
//           { path: "appoinments", element: <Appoinments /> },
//           { path: "revenue", element: <Revenue /> },
//           { path: "calendar", element: <Calendar /> },
//           { path: "clientSms", element: <ClientSms /> },
//           { path: "myClients", element: <MyClients /> },
//           { path: "invoices", element: <Invoices /> },
//           { path: "invoicePage", element: <InvoicePage /> },
//           { path: "addProduct", element: <AddProduct /> },
//           { path: "availablity", element: <Availablity /> },
//           {
//             path: "calendarAppoinmentModal",
//             element: <CalendarAppoinmentModal />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import MultiStepForm from "../components/MultiStepForm/MultiStepForm";
import DasboardLayout from "../components/ui/Dashboard/DasboardLayout";
import Appoinments from "../pages/Appoinments";

import AddProduct from "../components/AddProduct/AddProduct";
import InvoicePage from "../components/InvoicePage";
import Availablity from "../pages/Availablity";
import Calendar from "../pages/Calendar";
import CalendarAppoinmentModal from "../pages/CalendarAppoinmentModal/CalendarAppoinmentModal";
import EarningsChart from "../pages/EarningsChart";
import Invoices from "../pages/Invoices";
import Reports from "../pages/Reports";
import Revenue from "../pages/Revenue";
import ClientSms from "../pages/clientSms";
import MyClients from "../pages/myClients";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <MultiStepForm />,
      },
      {
        path: "/dasboardLayout",
        element: <DasboardLayout></DasboardLayout>,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "/charts",
        element: <EarningsChart></EarningsChart>,
      },
      {
        path: "/appoinments",
        element: <Appoinments />,
      },
      {
        path: "/revenue",
        element: <Revenue />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
      {
        path: "/clientSms",
        element: <ClientSms />,
      },
      {
        path: "/myClients",
        element: <MyClients />,
      },
      {
        path: "/invoices",
        element: <Invoices />,
      },
      {
        path: "/invoicePage",
        element: <InvoicePage />,
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/availablity",
        element: <Availablity />,
      },
      {
        path: "/calendarAppoinmentModal",
        element: <CalendarAppoinmentModal></CalendarAppoinmentModal>,
      },
    ],
  },
]);
