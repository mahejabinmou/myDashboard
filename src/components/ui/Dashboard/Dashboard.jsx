// Dashboard.jsx

const cards = [
  {
    title: "New Orders",
    value: "150.00",
    bg: "bg-yellow-300",
    text: "text-yellow-900",
  },
  {
    title: "Unique Visitors",
    value: "150.00",
    bg: "bg-purple-300",
    text: "text-purple-900",
  },
  {
    title: "New Users",
    value: "250.00",
    bg: "bg-pink-300",
    text: "text-pink-900",
  },
];

const transactions = [
  {
    id: 1,
    name: "Adam McCoy",
    date: "12/04/22",
    time: "1:45 AM",
    status: "Completed",
  },
  {
    id: 2,
    name: "Ellenore Pena",
    date: "12/04/22",
    time: "1:06 AM",
    status: "Pending",
  },
  {
    id: 3,
    name: "Eddy Simmons",
    date: "12/04/22",
    time: "1:04 AM",
    status: "Completed",
  },
  {
    id: 4,
    name: "Eddy Hoskins",
    date: "12/04/22",
    time: "1:08 AM",
    status: "Pending",
  },
];

const statusColors = {
  Completed: "bg-green-500",
  Pending: "bg-yellow-400",
  Cancelled: "bg-red-500",
};

const Dashboard = () => {
  return (
    <div className="flex-1 p-6 bg-[#14141f] text-gray-300 min-h-screen">
      <h1 className="text-xl font-semibold mb-4">Reports</h1>

      {/* Earnings chart placeholder */}
      <div className="bg-[#1e1e2f] rounded-xl p-6 mb-6">
        <h2 className="text-lg font-semibold mb-2">Earnings</h2>
        <div className="h-48 bg-gradient-to-r from-purple-600 to-purple-400 rounded-md"></div>
      </div>

      {/* Cards */}
      <div className="flex gap-6 mb-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`${card.bg} ${card.text} rounded-xl p-6 flex-1 shadow-lg`}
          >
            <h3 className="font-semibold">{card.title}</h3>
            <p className="text-3xl font-bold">{card.value}</p>
            <p className="text-sm mt-2">From last week</p>
          </div>
        ))}
      </div>

      {/* Transactions Table */}
      <div className="bg-[#1e1e2f] rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Transactions</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="py-2">Name</th>
              <th className="py-2">Date</th>
              <th className="py-2">Time</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr
                key={t.id}
                className="border-b border-gray-700 hover:bg-[#292942]"
              >
                <td className="py-2">{t.name}</td>
                <td className="py-2">{t.date}</td>
                <td className="py-2">{t.time}</td>
                <td className="py-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      statusColors[t.status]
                    }`}
                  >
                    {t.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-end mt-4 space-x-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              className="w-8 h-8 rounded-md bg-[#292942] hover:bg-purple-700"
            >
              {num}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
