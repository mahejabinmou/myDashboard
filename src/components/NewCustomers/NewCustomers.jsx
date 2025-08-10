const customers = [
  {
    name: "Brooklyn Simmons",
    username: "@muradhasan20",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Robert Fox",
    username: "@muradhasan20",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Albert Flores",
    username: "@muradhasan20",
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    name: "Dianne Russell",
    username: "@muradhasan20",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Cameron Williamson",
    username: "@muradhasan20",
    avatar: "https://randomuser.me/api/portraits/men/78.jpg",
  },
  {
    name: "Theresa Webb",
    username: "@muradhasan20",
    avatar: "https://randomuser.me/api/portraits/women/66.jpg",
  },
  {
    name: "Eleanor Pena",
    username: "@muradhasan20",
    avatar: "https://randomuser.me/api/portraits/women/67.jpg",
  },
  {
    name: "Eleanor Pena",
    username: "@muradhasan20",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Eleanor Pena",
    username: "@muradhasan20",
    avatar: "https://randomuser.me/api/portraits/women/69.jpg",
  },
];

const NewCustomers = () => {
  return (
    <div className="bg-black text-white rounded-xl p-4 w-full max-w-md">
      <h2 className="text-lg font-semibold mb-4">New Customers</h2>
      <ul className="divide-y divide-gray-800">
        {customers.map((user, index) => (
          <li key={index} className="flex items-center justify-between py-3">
            <div className="flex items-center gap-4">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm">{user.name}</p>
                <p className="text-xs text-gray-400">{user.username}</p>
              </div>
            </div>
            <div className="text-gray-400 text-xl cursor-pointer">•••</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewCustomers;
