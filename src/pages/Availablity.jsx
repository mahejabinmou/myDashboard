import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import React, { useEffect, useRef, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

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

export default function Availablity() {
  // events state (each event has id, person, time (slot), title, duration)
  const [events, setEvents] = useState([
    {
      id: 1,
      person: "Robert Morgan",
      time: "9:00 AM",
      title: "Hair Cuts",
      duration: "10:30am - 11:30am",
    },
  ]);

  // month filter state
  const [selectedMonth, setSelectedMonth] = useState(
    months[new Date().getMonth()]
  );
  const [filterEnabled, setFilterEnabled] = useState(false);

  // refs for card elements keyed by event id
  const cardRefs = useRef({});

  // keep track of draggable instances to kill on cleanup
  const draggablesRef = useRef([]);

  // Add a new event at the first available empty slot
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

  // toggle filter on/off
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
        onDragEnd() {
          // optionally update event slot here
        },
      });

      draggableInstances.forEach((inst) => draggablesRef.current.push(inst));
    });

    return () => {
      draggablesRef.current.forEach((d) => d.kill && d.kill());
      draggablesRef.current = [];
    };
  }, [events]);

  // filter example: if filter enabled, only show events with title "Hair Cuts"
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
    <div className="p-6 bg-[#1B192B] rounded-xl text-white max-w-7xl mx-auto">
      <div className="flex justify-end items-center mb-6">
        {/* Left side: Monthly + Filter */}
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
          {/* Right side: Add Calendar button */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleAddEvent}
              className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <FiPlus size={18} />
              Add Calendar
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
        {/* header row */}
        <div />
        {people.map((p) => (
          <div
            key={p}
            className="p-2 text-sm font-semibold flex justify-between items-center"
          >
            {p} <IoIosArrowDown size={24} />
          </div>
        ))}

        {/* rows for each time slot */}
        {times.map((slotTime) => (
          <React.Fragment key={slotTime}>
            {/* time label */}
            <div className="p-2 text-sm text-gray-400">{slotTime}</div>

            {/* columns for each person */}
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
                      className="absolute top-2 left-2 right-2 bg-gradient-to-r from-purple-600 to-purple-400/70 p-3 rounded-lg shadow-lg cursor-grab select-none"
                    >
                      <div className="font-semibold">{ev.title}</div>
                      <div className="text-xs opacity-80">{ev.duration}</div>
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
  );
}
