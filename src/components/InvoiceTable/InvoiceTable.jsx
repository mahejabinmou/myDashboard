import { useState } from "react";
const pageBtnStyle = {
  padding: "4px 8px",
  border: "1px solid #333",
  borderRadius: "6px",
  background: "transparent",
  color: "#aaa",
  cursor: "pointer",
};
const transactionsData = [
  {
    id: 1,
    name: "Arlene McCoy",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "12/04/23",
    due_date: "5/10/23",
    time: "10:46 AM",
    Amount: "2000",
    status: "Completed",
  },
  {
    id: 2,
    name: "Eleanor Pena",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    date: "12/04/23",
    due_date: "5/10/23",
    Amount: "2000",
    time: "10:46 AM",
    status: "Pending",
  },
  {
    id: 3,
    name: "Brooklyn Simmons",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "12/04/23",
    due_date: "5/10/23",
    Amount: "2000",
    time: "10:46 AM",
    status: "Completed",
  },
  {
    id: 4,
    name: "Guy Hawkins",
    avatar: "https://randomuser.me/api/portraits/men/29.jpg",
    date: "15/04/23",
    due_date: "5/10/23",
    Amount: "2000",
    time: "10:46 AM",
    status: "Pending",
  },
];

export default function InvoiceTable() {
  const [selected, setSelected] = useState([]);
  const [perPage, setPerPage] = useState(5);
  const [page, setPage] = useState(1);

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selected.length === transactionsData.length) {
      setSelected([]);
    } else {
      setSelected(transactionsData.map((t) => t.id));
    }
  };

  return (
    <div
      style={{
        background: "#070706",
        padding: "20px",
        borderRadius: "12px",
        color: "#fff",

        margin: "auto",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <h3 style={{ margin: 0 }}>Transactions</h3>
        <select
          style={{
            background: "#1f1a2e",
            color: "#fff",
            border: "none",
            padding: "6px 10px",
            borderRadius: "6px",
          }}
        >
          <option>Recent</option>
        </select>
      </div>

      {/* Table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "14px",
        }}
      >
        <thead>
          <tr style={{ textAlign: "left", borderBottom: "1px solid #000000" }}>
            <th style={{ padding: "10px" }}>
              <input
                type="checkbox"
                checked={selected.length === transactionsData.length}
                onChange={toggleSelectAll}
              />
            </th>
            <th style={{ padding: "10px" }}>Client Name</th>
            <th style={{ padding: "10px" }}>Invoice ID</th>
            <th style={{ padding: "10px" }}>Date</th>
            <th style={{ padding: "10px" }}>Due Date</th>
            <th style={{ padding: "10px" }}>Status</th>
            <th style={{ padding: "10px" }}>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {transactionsData.map((t) => (
            <tr
              key={t.id}
              style={{
                borderBottom: "1px solid #1e1e1e",
                background: selected.includes(t.id) ? "#1e1630" : "transparent",
              }}
            >
              <td style={{ padding: "10px" }}>
                <input
                  type="checkbox"
                  checked={selected.includes(t.id)}
                  onChange={() => toggleSelect(t.id)}
                />
              </td>
              <td
                style={{
                  padding: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    marginRight: "8px",
                  }}
                />
                {t.name}
              </td>
              <td style={{ padding: "10px" }}>{t.id}</td>
              <td style={{ padding: "10px" }}>{t.date}</td>
              <td style={{ padding: "10px" }}>{t.due_date}</td>
              <td style={{ padding: "10px" }}>
                <span
                  style={{
                    background:
                      t.status === "Completed" ? "#3b0b3f" : "#3f2a0b",
                    color: t.status === "Completed" ? "#d28eff" : "#ffb347",
                    padding: "4px 10px",
                    borderRadius: "12px",
                    fontSize: "12px",
                  }}
                >
                  {t.status}
                </span>
              </td>
              <td style={{ padding: "10px" }}>{t.Amount}</td>
              <td style={{ padding: "10px" }}>⋮</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer Pagination */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <div>
          Showing{" "}
          <select
            value={perPage}
            onChange={(e) => setPerPage(Number(e.target.value))}
            style={{
              background: "#1f1a2e",
              color: "#fff",
              border: "none",
              padding: "4px 8px",
              borderRadius: "6px",
            }}
          >
            <option value={5}>05</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>{" "}
          Out of 55
        </div>
        <div style={{ display: "flex", gap: "4px" }}>
          <button style={pageBtnStyle}>Prev</button>
          {[1, 2, 3, 4, 5].map((p) => (
            <button
              key={p}
              style={{
                ...pageBtnStyle,
                background: page === p ? "#a066ff" : "transparent",
                color: page === p ? "#fff" : "#aaa",
              }}
              onClick={() => setPage(p)}
            >
              {p}
            </button>
          ))}
          <button style={pageBtnStyle}>Next</button>
        </div>
      </div>
    </div>
  );
}
