import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import {
  FaCalendar,
  FaChevronDown,
  FaChevronUp,
  FaSignOutAlt,
} from "react-icons/fa";
import { FaRegFileWord } from "react-icons/fa6";
import { GoGift } from "react-icons/go";
import { IoMdCheckboxOutline } from "react-icons/io";
import { IoPeopleOutline } from "react-icons/io5";
import { LuLayers } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

/**
 * Sidebar props:
 * - activeSection (string)
 * - setActiveSection(fn)
 */
export default function Sidebar({ activeSection, setActiveSection }) {
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [clientOpen, setClientOpen] = useState(false);

  const handleDashboardToggle = () => setDashboardOpen((v) => !v);
  const handleClientToggle = () => setClientOpen((v) => !v);

  const menuButtonClass = (id) =>
    `flex items-center gap-3 pb-1 px-4 rounded-lg text-left w-full dashboardButton ${
      activeSection === id
        ? "bg-[#8C5FF7]  font-semibold text-[#F6F6F6]"
        : "hover:bg-[#8C5FF7] "
    }`;

  return (
    <aside className="w-64  bg-[#1e1e2f] flex flex-col justify-between ">
      <div>
        <div className="text-white text-2xl font-bold p-6">bbr</div>

        <nav className="px-4">
          {/* Dashboard (with submenu) */}
          <div className="mb-2">
            <button
              onClick={handleDashboardToggle}
              className="flex items-center justify-between w-full  px-4 rounded-lg hover:bg-[#3a3a52]"
            >
              <span className="flex items-center gap-3 dashboardButton">
                <RxDashboard /> Dashboard
              </span>
              <span>{dashboardOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
            </button>

            {dashboardOpen && (
              <div className="mt-2 ml-6  py-4 rounded-[8px] flex flex-col gap-1 bg-[#040405]">
                {/* <button
                  onClick={() => setActiveSection("overview")}
                  className={menuButtonClass("overview")}
                >
                  Overview
                </button> */}

                <button
                  onClick={() => {
                    setActiveSection("reports");
                  }}
                  className={menuButtonClass("reports")}
                >
                  Reports
                </button>

                <button
                  onClick={() => setActiveSection("appoinments")}
                  className={menuButtonClass("appoinments")}
                >
                  Appointments
                </button>

                <button
                  onClick={() => setActiveSection("revenue")}
                  className={menuButtonClass("revenue")}
                >
                  Revenue
                </button>
              </div>
            )}
          </div>

          {/* Lower main menus */}
          <div className="flex flex-col gap-2 mt-2 ">
            <button
              onClick={() => setActiveSection("calendar")}
              className={menuButtonClass("calendar")}
            >
              <FaCalendar /> Calendar
            </button>

            <button
              onClick={() => setActiveSection("products")}
              className={menuButtonClass("products")}
            >
              <GoGift /> Products
            </button>
            <button
              onClick={() => setActiveSection("invoices")}
              className={menuButtonClass("invoices")}
            >
              <FaRegFileWord /> Invoices
            </button>

            {/* <button
              onClick={() => setActiveSection("clients")}
              className={menuButtonClass("clients")}
            >
              <IoPeopleOutline /> Clients
            </button> */}

            <div className="mb-2">
              <button
                onClick={handleClientToggle}
                className="flex items-center justify-between w-full  px-4 rounded-lg hover:bg-[#3a3a52]"
              >
                <span className="flex items-center gap-3 dashboardButton">
                  <IoPeopleOutline /> Clients
                </span>
                <span>{clientOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
              </button>

              {clientOpen && (
                <div className="mt-2 ml-6  py-4 rounded-[8px] flex flex-col gap-1 bg-[#040405]">
                  {/* <button
                  onClick={() => setActiveSection("overview")}
                  className={menuButtonClass("overview")}
                >
                  Overview
                </button> */}

                  <button
                    onClick={() => {
                      setActiveSection("myClients");
                    }}
                    className={menuButtonClass("myClients")}
                  >
                    My Clients
                  </button>

                  <button
                    onClick={() => setActiveSection("clientSms")}
                    className={menuButtonClass("clientSms")}
                  >
                    Client sms reminder
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => setActiveSection("availablity")}
              className={menuButtonClass("availablity")}
            >
              <LuLayers /> Availability
            </button>
            <button
              onClick={() => setActiveSection("Email setting")}
              className={menuButtonClass("Email setting")}
            >
              <MdOutlineMailOutline /> Email setting
            </button>
            <button
              onClick={() => setActiveSection("Booking alerts")}
              className={menuButtonClass("Booking alerts")}
            >
              <IoMdCheckboxOutline /> Booking alerts
            </button>

            <button
              onClick={() => setActiveSection("profile")}
              className={menuButtonClass("profile")}
            >
              <CgProfile /> Profile
            </button>
          </div>
        </nav>
      </div>

      <div
        className="px-6 py-4 border-t border-gray-700 flex items-center gap-3 cursor-pointer hover:bg-[#3a3a52]"
        onClick={() => setActiveSection("logout")}
      >
        <FaSignOutAlt /> Logout
      </div>
    </aside>
  );
}
