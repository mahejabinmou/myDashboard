import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdOutlineModeEditOutline } from "react-icons/md";
const CalendarAppoinmentModal = () => {
  return (
    <div className="flex flex-col mx-[395px] mb-[199px] py-[32px] rounded-[16px] px-[24px] bg-[#1E1D2B] border border-[#373737]">
      <div className="flex justify-between pb-6">
        <h1 className="text-white ">Appointment</h1>
        <div className="flex gap-4">
          <div className="rounded-[4px] bg-[#070706] p-1">
            <MdOutlineModeEditOutline size={16} className="text-white  " />
          </div>
          <div className="rounded-[4px] bg-[#070706] p-1">
            <HiOutlineDotsVertical size={16} className="text-white  " />
          </div>
        </div>
      </div>

      <div className="bg-[#070706] p-6 rounded-[16px] ">
        <div className="grid grid-cols-2 gap-[135px] pb-[24px]">
          <div>
            <h1 className="text-[#A5A5A5] pb-2">Checked In</h1>
            <h1 className="text-[#F6F6F6]">Checkout</h1>
          </div>
          <div>
            <h1 className="text-[#A5A5A5] pb-2">Location</h1>
            <h1 className="text-[#F6F6F6]">Kaliganj</h1>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[135px]">
          <div>
            <h1 className="text-[#A5A5A5] pb-2">Date</h1>
            <h1 className="text-[#F6F6F6]">16 Sep, 2023</h1>
          </div>
          <div>
            <h1 className="text-[#A5A5A5] pb-2">Time</h1>
            <h1 className="text-[#F6F6F6]">10 : 30 AM</h1>
          </div>
        </div>
      </div>

      {/* sec 1 */}

      <div className="bg-[#070706]  mt-6 p-6 rounded-[16px]">
        <div className="flex items-center  border justify-between p-4 bg-[#1E1D2B] rounded-[16px]">
          <div className="flex gap-x-[14px]">
            <div className="h-[44px] w-[44px]">
              <img
                src="/images/Ellipse 1954.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-semibold text-[#F6F6F6]">Morgan</div>
              <div className="text-xs opacity-80 text-[#A5A5A5]">
                Client Since 20 Sep, 2023
              </div>
            </div>
          </div>
          <div>
            <HiOutlineDotsVertical className="text-[#F6F6F6]" />
          </div>
        </div>

        {/* sec2 */}
        <div className="bg-[#1E1D2B] p-6 mt-6 rounded-[16px] border">
          <h1 className="text-[#F6F6F6]">Get 25% Discoount</h1>
        </div>
        {/* sec3 */}
        <div className="flex items-center border justify-between bg-[#1E1D2B] p-6 mt-6 rounded-[16px]">
          <div>
            <h1 className="font-semibold text-[#F6F6F6]">Premium Membership</h1>
            <p className="text-xs opacity-80 text-[#A5A5A5]">
              Active - Biling: 20 Sep, 2023
            </p>
          </div>

          <div>
            <HiOutlineDotsVertical className="text-[#F6F6F6]" />
          </div>
        </div>

        <button className="text-primary pt-6 underline">
          Show additional client info
        </button>
      </div>

      {/* ---- */}
      <div className="bg-[#070706]  mt-6 p-6 rounded-[16px] ">
        <div className="grid grid-cols-2 gap-[135px] pb-[24px]">
          <div>
            <h1 className="text-[#A5A5A5] pb-2">Services</h1>
            <h1 className="text-[#F6F6F6]">Baeber shop</h1>
          </div>
          <div>
            <h1 className="text-[#A5A5A5] pb-2">With</h1>
            <h1 className="text-[#F6F6F6]">Morgan</h1>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[135px]">
          <div>
            <h1 className="text-[#A5A5A5] pb-2">At</h1>
            <h1 className="text-[#F6F6F6]">10 : 30</h1>
          </div>
          <div>
            <h1 className="text-[#A5A5A5] pb-2">For</h1>
            <h1 className="text-[#F6F6F6]">2 Hour</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarAppoinmentModal;
