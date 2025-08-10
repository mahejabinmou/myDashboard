// import gsap from "gsap";
// import { Draggable } from "gsap/Draggable";
// import React, { useEffect, useRef, useState } from "react";
// import { FiPlus } from "react-icons/fi";
// import { HiOutlineDotsVertical } from "react-icons/hi";
// import { IoIosArrowDown } from "react-icons/io";

// gsap.registerPlugin(Draggable);

// const people = ["Robert Morgan", "Esther Howard", "Jacob Jones"];
// const times = [
//   "8:00 AM",
//   "9:00 AM",
//   "10:00 AM",
//   "11:00 AM",
//   "12:00 PM",
//   "2:00 PM",
//   "4:00 PM",
// ];

// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// export default function Calendar() {
//   // events state (each event has id, person, time (slot), title, duration)
//   const [events, setEvents] = useState([
//     {
//       id: 1,
//       person: "Robert Morgan",
//       time: "9:00 AM",
//       title: "Hair Cuts",
//       duration: "10:30am - 11:30am",
//     },
//   ]);

//   // month filter state
//   const [selectedMonth, setSelectedMonth] = useState(
//     months[new Date().getMonth()]
//   );
//   const [filterEnabled, setFilterEnabled] = useState(false);

//   // refs for card elements keyed by event id
//   const cardRefs = useRef({});

//   // keep track of draggable instances to kill on cleanup
//   const draggablesRef = useRef([]);

//   // Add a new event at the first available empty slot
//   const handleAddEvent = () => {
//     for (const time of times) {
//       for (const person of people) {
//         const exists = events.some(
//           (e) => e.person === person && e.time === time
//         );
//         if (!exists) {
//           const newEvent = {
//             id: Date.now(),
//             person,
//             time,
//             title: "New Event",
//             duration: "11:00am - 12:00pm",
//           };
//           setEvents((prev) => [...prev, newEvent]);
//           return;
//         }
//       }
//     }
//     alert("No available slots to add a new event!");
//   };

//   // toggle filter on/off
//   const toggleFilter = () => {
//     setFilterEnabled((prev) => !prev);
//   };

//   useEffect(() => {
//     draggablesRef.current.forEach((d) => d.kill && d.kill());
//     draggablesRef.current = [];

//     Object.values(cardRefs.current).forEach((el) => {
//       if (!el) return;
//       const draggableInstances = Draggable.create(el, {
//         type: "x,y",
//         edgeResistance: 0.65,
//         inertia: true,
//         onPress() {
//           gsap.to(el, {
//             scale: 1.03,
//             boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
//             duration: 0.12,
//           });
//         },
//         onRelease() {
//           gsap.to(el, {
//             scale: 1,
//             boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
//             duration: 0.12,
//           });
//         },
//         onDragEnd() {
//           // optionally update event slot here
//         },
//       });

//       draggableInstances.forEach((inst) => draggablesRef.current.push(inst));
//     });

//     return () => {
//       draggablesRef.current.forEach((d) => d.kill && d.kill());
//       draggablesRef.current = [];
//     };
//   }, [events]);

//   // filter example: if filter enabled, only show events with title "Hair Cuts"
//   const findEvent = (person, slotTime) => {
//     if (filterEnabled) {
//       return events.find(
//         (e) =>
//           e.person === person && e.time === slotTime && e.title === "Hair Cuts"
//       );
//     }
//     return events.find((e) => e.person === person && e.time === slotTime);
//   };

//   return (
//     <div className="p-6 bg-[#1B192B] rounded-xl text-white max-w-7xl mx-auto">
//       <div className="flex justify-end items-center mb-6">
//         {/* Left side: Monthly + Filter */}
//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <select
//               value={selectedMonth}
//               onChange={(e) => setSelectedMonth(e.target.value)}
//               className="appearance-none bg-[#2B2942] px-4 py-2 rounded-lg text-white pr-8 cursor-pointer focus:outline-none"
//             >
//               {months.map((m) => (
//                 <option key={m} value={m}>
//                   {m}
//                 </option>
//               ))}
//             </select>
//             <IoIosArrowDown
//               size={20}
//               className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-white"
//             />
//           </div>

//           <button
//             onClick={toggleFilter}
//             className={`px-4 py-2 rounded-lg border ${
//               filterEnabled
//                 ? "bg-purple-600 border-purple-600"
//                 : "border-gray-600"
//             } hover:bg-purple-700 transition`}
//           >
//             Filter
//           </button>
//           {/* Right side: Add Calendar button */}
//           <div className="flex items-center gap-3">
//             <button
//               onClick={handleAddEvent}
//               className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg flex items-center gap-2"
//             >
//               <FiPlus size={18} />
//               Add Calendar
//             </button>
//           </div>
//         </div>
//       </div>

//       <div
//         className="calendar-grid overflow-auto rounded-lg p-4 border border-gray-700"
//         style={{
//           gridTemplateColumns: `120px repeat(${people.length}, 1fr)`,
//           display: "grid",
//           gap: "12px",
//         }}
//       >
//         {/* header row */}
//         <div />
//         {people.map((p) => (
//           <div
//             key={p}
//             className="p-2 text-sm font-semibold flex justify-between items-center"
//           >
//             {p} <IoIosArrowDown size={24} />
//           </div>
//         ))}

//         {/* rows for each time slot */}
//         {times.map((slotTime) => (
//           <React.Fragment key={slotTime}>
//             {/* time label */}
//             <div className="p-2 text-sm text-gray-400">{slotTime}</div>

//             {/* columns for each person */}
//             {people.map((person) => {
//               const ev = findEvent(person, slotTime);

//               return (
//                 <div
//                   key={person + slotTime}
//                   className="min-h-[100px] border border-gray-700 relative p-2"
//                 >
//                   {ev && (
//                     <div
//                       ref={(el) => {
//                         if (el) cardRefs.current[ev.id] = el;
//                         else delete cardRefs.current[ev.id];
//                       }}
//                       data-eventid={ev.id}
//                       className="absolute top-2 left-2 right-2 bg-gradient-to-r from-purple-600 to-purple-400/70 p-3 rounded-lg shadow-lg cursor-grab select-none"
//                     >
//                       <div className="flex items-center gap-6">
//                         <div className="h-[44px] w-[44px]">
//                           <img
//                             src="/images/Ellipse 1954.png"
//                             alt=""
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                         <div>
//                           <div className="font-semibold">{ev.title}</div>
//                           <div className="text-xs opacity-80">
//                             {ev.duration}
//                           </div>
//                         </div>
//                         <div>
//                           <HiOutlineDotsVertical />
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                   {!ev && (
//                     <div className="flex h-full items-center justify-center text-primary">
//                       <FiPlus size={24} />
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// }

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import React, { useEffect, useRef, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineModeEditOutline } from "react-icons/md";

gsap.registerPlugin(Draggable);

const people = ["Robert Morgan", "Esther Howard", "Jacob Jones"];
const times = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "4:00 PM",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function Calendar() {
  const [events, setEvents] = useState([
    {
      id: 1,
      person: "Robert Morgan",
      time: "9:00 AM",
      title: "Hair Cuts",
      duration: "10:30am - 11:30am",
    },
  ]);
  const [selectedMonth, setSelectedMonth] = useState(
    months[new Date().getMonth()]
  );
  const [filterEnabled, setFilterEnabled] = useState(false);

  const [selectedEvent, setSelectedEvent] = useState(null); // modal state
  // const [selectedCalender, setSelectedCalender] = useState(null); // modal state

  const cardRefs = useRef({});
  const draggablesRef = useRef([]);

  const handleAddEvent = () => {
    for (const time of times) {
      for (const person of people) {
        const exists = events.some(
          (e) => e.person === person && e.time === time
        );
        if (!exists) {
          const newEvent = {
            id: Date.now(),
            person,
            time,
            title: "New Event",
            duration: "11:00am - 12:00pm",
          };
          setEvents((prev) => [...prev, newEvent]);
          return;
        }
      }
    }
    alert("No available slots to add a new event!");
  };

  const toggleFilter = () => {
    setFilterEnabled((prev) => !prev);
  };

  useEffect(() => {
    draggablesRef.current.forEach((d) => d.kill && d.kill());
    draggablesRef.current = [];

    Object.values(cardRefs.current).forEach((el) => {
      if (!el) return;
      const draggableInstances = Draggable.create(el, {
        type: "x,y",
        edgeResistance: 0.65,
        inertia: true,
        onPress() {
          gsap.to(el, {
            scale: 1.03,
            boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
            duration: 0.12,
          });
        },
        onRelease() {
          gsap.to(el, {
            scale: 1,
            boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
            duration: 0.12,
          });
        },
      });
      draggableInstances.forEach((inst) => draggablesRef.current.push(inst));
    });

    return () => {
      draggablesRef.current.forEach((d) => d.kill && d.kill());
      draggablesRef.current = [];
    };
  }, [events]);

  const findEvent = (person, slotTime) => {
    if (filterEnabled) {
      return events.find(
        (e) =>
          e.person === person && e.time === slotTime && e.title === "Hair Cuts"
      );
    }
    return events.find((e) => e.person === person && e.time === slotTime);
  };

  return (
    <>
      <div className="p-6 bg-[#1B192B] rounded-xl text-white max-w-7xl mx-auto">
        <div className="flex justify-end items-center mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="appearance-none bg-[#2B2942] px-4 py-2 rounded-lg text-white pr-8 cursor-pointer focus:outline-none"
              >
                {months.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
              <IoIosArrowDown
                size={20}
                className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-white"
              />
            </div>

            <button
              onClick={toggleFilter}
              className={`px-4 py-2 rounded-lg border ${
                filterEnabled
                  ? "bg-purple-600 border-purple-600"
                  : "border-gray-600"
              } hover:bg-purple-700 transition`}
            >
              Filter
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={handleAddEvent}
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <FiPlus size={18} /> Add Calendar
              </button>
            </div>
          </div>
        </div>

        <div
          className="calendar-grid overflow-auto rounded-lg p-4 border border-gray-700"
          style={{
            gridTemplateColumns: `120px repeat(${people.length}, 1fr)`,
            display: "grid",
            gap: "12px",
          }}
        >
          <div />
          {people.map((p) => (
            <div
              key={p}
              className="p-2 text-sm font-semibold flex justify-between items-center"
            >
              {p} <IoIosArrowDown size={24} />
            </div>
          ))}

          {times.map((slotTime) => (
            <React.Fragment key={slotTime}>
              <div className="p-2 text-sm text-gray-400">{slotTime}</div>
              {people.map((person) => {
                const ev = findEvent(person, slotTime);
                return (
                  <div
                    key={person + slotTime}
                    className="min-h-[100px] border border-gray-700 relative p-2"
                  >
                    {ev && (
                      <div
                        ref={(el) => {
                          if (el) cardRefs.current[ev.id] = el;
                          else delete cardRefs.current[ev.id];
                        }}
                        data-eventid={ev.id}
                        className="absolute  top-2 left-2 right-2 bg-gradient-to-r from-purple-600 to-purple-400/70 p-3 rounded-lg shadow-lg cursor-grab select-none"
                      >
                        <div className="flex items-center gap-6">
                          <div className="h-[44px] w-[44px]">
                            <img
                              src="/images/Ellipse 1954.png"
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-semibold">{ev.title}</div>
                            <div className="text-xs opacity-80">
                              {ev.duration}
                            </div>
                          </div>
                          <div
                            onClick={() => setSelectedEvent(ev)}
                            className="cursor-pointer ml-auto"
                          >
                            <HiOutlineDotsVertical />
                          </div>
                        </div>
                      </div>
                    )}
                    {!ev && (
                      <div className="flex h-full items-center justify-center text-primary">
                        <FiPlus size={24} />
                      </div>
                    )}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-[9999]">
          <div className="flex flex-col w-[450px] max-h-[90vh] overflow-y-auto no-scrollbar py-[32px] rounded-[16px] px-[24px] bg-[#1E1D2B] border border-[#373737] relative">
            <div className="flex justify-between pb-6">
              <h1 className="text-white ">Appointment</h1>
              <div className="flex gap-4">
                <div className="rounded-[4px] bg-[#070706] p-1">
                  <MdOutlineModeEditOutline size={16} className="text-white" />
                </div>
                <div className="rounded-[4px] bg-[#070706] p-1">
                  <HiOutlineDotsVertical size={16} className="text-white" />
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

            <div className="bg-[#070706] mt-6 p-6 rounded-[16px]">
              <div className="flex items-center border justify-between p-4 bg-[#1E1D2B] rounded-[16px]">
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

              <div className="bg-[#1E1D2B] p-6 mt-6 rounded-[16px] border">
                <h1 className="text-[#F6F6F6]">Get 25% Discount</h1>
              </div>

              <div className="flex items-center border justify-between bg-[#1E1D2B] p-6 mt-6 rounded-[16px]">
                <div>
                  <h1 className="font-semibold text-[#F6F6F6]">
                    Premium Membership
                  </h1>
                  <p className="text-xs opacity-80 text-[#A5A5A5]">
                    Active - Billing: 20 Sep, 2023
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

            <div className="bg-[#070706] mt-6 p-6 rounded-[16px]">
              <div className="grid grid-cols-2 gap-[135px] pb-[24px]">
                <div>
                  <h1 className="text-[#A5A5A5] pb-2">Services</h1>
                  <h1 className="text-[#F6F6F6]">Barber shop</h1>
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
        </div>
      )}

      {/* {selectedCalender && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-[9999]">
          <div className="bg-[#1E1D2B] p-6 rounded-lg border border-[#373737]">
            <div className="border border-[#373737] px-6 pt-2  mb-2 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Add Calendar</h2>
              </div>
              
              <div>
                <h1>Add Calendar</h1>
                <p>Choose when your calendar</p>
              </div>
              

              <div className="flex flex-col gap-y-2 pt-[16px]">
                <label htmlFor="category">Date </label>
                <select className="bg-black text-white rounded-lg px-3 py-2 flex-1 outline-none">
                  <option>Haircare</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-x-2  pt-[16px]">
                <div className="flex flex-col gap-2">
                  <label htmlFor="category" className="">
                    Start Time
                  </label>
                  <select className="bg-black text-white rounded-lg px-3 py-2 flex-1 outline-none">
                    <option>10:00 AM</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2 ">
                  <label htmlFor="category">End Time </label>
                  <select className="bg-black text-white rounded-lg px-3 py-2 flex-1 outline-none">
                    <option>2:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2 py-[16px] ">
                <label htmlFor="category">Duration</label>
                <select className="bg-black text-white rounded-lg px-3 py-2 flex-1 outline-none">
                  <option>Custom</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 pb-[16px] ">
                <label htmlFor="category">Descriptions</label>

                <textarea
                  id="category"
                  placeholder="Add Descriptions"
                  className="bg-black h-[60px] w-[500px] text-white rounded-lg px-3 py-2 outline-none resize-none"
                ></textarea>
              </div>
            </div>

            <div className="flex gap-x-6 pt-1">
              <CustomButton variant="secondary"> Reset to Default</CustomButton>
              <CustomButton variant="primary">Save & Continue</CustomButton>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
}
