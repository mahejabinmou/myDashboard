import {
  FiEdit2,
  FiFilter,
  FiHeart,
  FiMoreHorizontal,
  FiSearch,
  FiShare2,
} from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";

const statsData = [
  {
    title: "All Client",
    value: "1540",
    color: "bg-gray-600",
    progressColor: "bg-purple-500",
    progress: 65,
  },
  {
    title: "New Users",
    value: "436",
    color: "bg-purple-500",
    progressColor: "bg-orange-400",
    progress: 65,
  },
  {
    title: "Bounce Rate",
    value: "$586k",
    color: "bg-gray-600",
    progressColor: "bg-purple-500",
    progress: 65,
  },
  {
    title: "Unique Visitors",
    value: "630",
    color: "bg-gray-600",
    progressColor: "bg-purple-500",
    progress: 65,
  },
];

const clientsData = [
  {
    name: "Bessie Cooper",
    phone: "(505) 555-0125",
    email: "nevaeh.simmons@example.com",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Kristin Watson",
    phone: "(405) 555-0128",
    email: "tim.jennings@example.com",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "Albert Flores",
    phone: "(207) 555-0119",
    email: "sara.cruz@example.com",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Robert Fox",
    phone: "(480) 555-0103",
    email: "willie.jennings@example.com",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Guy Hawkins",
    phone: "(505) 555-0125",
    email: "debra.holt@example.com",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
];

export default function MyClients() {
  return (
    <div className="bg-black min-h-screen text-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">My Clients</h1>
        <button className="bg-purple-500 px-4 py-2 rounded-lg font-medium hover:bg-purple-600">
          + Add Client
        </button>
      </div>

      {/* Client Star Stats */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Client Star</h2>
        <button className="flex items-center gap-1 bg-gray-800 px-3 py-1 rounded-lg">
          Monthly
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {statsData.map((stat, idx) => (
          <div key={idx} className="bg-gray-900 p-4 rounded-xl relative">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="text-sm">{stat.title}</p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
              </div>
              <button className="text-gray-400 hover:text-white">
                <FiMoreHorizontal />
              </button>
            </div>
            <p className="text-sm text-gray-400 mb-2">Progress</p>
            <div className="w-full bg-gray-700 h-2 rounded-full">
              <div
                className={`${stat.progressColor} h-2 rounded-full`}
                style={{ width: `${stat.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Clients List */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Clients List</h2>
        <div className="flex gap-2">
          <div className="flex items-center bg-gray-900 px-3 py-1 rounded-lg">
            <FiSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-sm"
            />
          </div>
          <button className="flex items-center gap-1 bg-gray-900 px-3 py-1 rounded-lg">
            <FiFilter />
            Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {clientsData.map((client, idx) => (
          <div
            key={idx}
            className="bg-gray-900 rounded-xl overflow-hidden relative"
          >
            <div className="absolute top-2 right-2 flex gap-2">
              <button className="bg-purple-500 p-1 text-black rounded-lg hover:bg-purple-600">
                <FiEdit2 size={14} />
              </button>
              <button className="bg-black text-white p-1 rounded-lg hover:bg-purple-600">
                <RiDeleteBin5Line size={14} />
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{client.name}</h3>
              <p className="text-sm text-gray-400">{client.phone}</p>
              <p className="text-sm text-gray-400">{client.email}</p>
            </div>

            <div className="p-4">
              <img
                src={client.image}
                alt={client.name}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            <div className="absolute bottom-6 right-8 flex gap-2">
              <button className="bg-gray-800 p-1 rounded-lg hover:bg-gray-700">
                <FiHeart size={14} />
              </button>
              <button className="bg-gray-800 p-1 rounded-lg hover:bg-gray-700">
                <FiShare2 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
