import { useState } from "react";
import { FiEdit2, FiMoreVertical, FiPlus } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";
import AddProduct from "../components/AddProduct/AddProduct";

const stats = [
  {
    percentage: "35%",
    label: "Total Products",
    value: "$ 15,232.00",
    bg: "bg-purple-600",
  },
  {
    percentage: "28%",
    label: "New Products",
    value: "$ 12,2132.00",
    bg: "bg-orange-500",
  },
  {
    percentage: "44%",
    label: "Total Products",
    value: "$ 15,232.00",
    bg: "bg-gray-700",
  },
  {
    percentage: "26%",
    label: "Total Products",
    value: "$ 15,232.00",
    bg: "bg-purple-500",
  },
];

const products = [
  {
    id: 1,
    title: "Bright Blonde Conditioner",
    category: "Haircare, Oribe",
    price: "$45.00",
    rating: 5.0,
    reviews: 136,
    image: "/images/Rectangle.png",
  },
  {
    id: 2,
    title: "Gold Lust Shampoo",
    category: "Haircare, Oribe",
    price: "$55.00",
    rating: 5.0,
    reviews: 124,
    image: "/images/Rectangle1.png",
  },
  {
    id: 3,
    title: "Matte Waves Texture Lotion",
    category: "Haircare, Oribe",
    price: "$47.00",
    rating: 5.0,
    reviews: 133,
    image: "/images/Rectangle2.png",
  },
  {
    id: 4,
    title: "Bright Blonde Shampoo",
    category: "Haircare, Oribe",
    price: "$46.00",
    rating: 5.0,
    reviews: 104,
    image: "/images/Rectangle3.png",
  },
  {
    id: 5,
    title: "Gold Lust Dry Shampoo",
    category: "Haircare, Oribe",
    price: "$53.00",
    rating: 5.0,
    reviews: 114,
    image: "/images/Rectangle4.png",
  },
  {
    id: 6,
    title: "Gold Lust Hair Oil",
    category: "Haircare, Oribe",
    price: "$65.00",
    rating: 5.0,
    reviews: 125,
    image: "/images/Rectangle5.png",
  },
];

export default function Products() {
  const [showAddProduct, setShowAddProduct] = useState(false);
  return (
    <div className="p-6  min-h-screen rounded-[16px] text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Products</h1>
        <button
          onClick={() => setShowAddProduct(true)}
          className="flex items-center gap-2 bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700"
        >
          <FiPlus /> Add Product
        </button>
      </div>

      {/* Stats */}
      <div className="bg-[#1E1D2B] p-4 rounded-xl mb-[24px]">
        <div className="flex justify-between items-center mb-6 ">
          <h2 className="text-lg font-semibold">Products Stats</h2>
          <button className="flex items-center gap-1 border border-gray-700 px-3 py-1 rounded-lg">
            Monthly <IoIosArrowDown />
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6  rounded-[16px]">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`p-4 rounded-xl ${s.bg} flex flex-col justify-between`}
            >
              {/* Top row: Daily Sales + menu */}
              <div className="flex justify-between items-start">
                <span className="text-sm">Daily Sales</span>
                <button>
                  <FiMoreVertical className="text-white" />
                </button>
              </div>
              <div className="text-2xl font-bold">{s.percentage}</div>
              <div className="mt-4">
                <div className="text-sm">{s.label}</div>
                <div className="text-lg font-semibold">{s.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#1E1D2B] p-4 rounded-xl ">
        {/* Product List Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Products List</h2>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-1 bg-gray-800 rounded-lg border border-gray-700"
            />
            <button className="flex items-center gap-1 border border-gray-700 px-3 py-1 rounded-lg">
              Filter <IoIosArrowDown />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg"
            >
              {/* Image section */}
              <div className="relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-cover"
                />
                {/* Rating badge */}
                <span className="absolute top-2 left-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-lg">
                  ⭐ {p.rating}{" "}
                  <span className="ml-1">{p.reviews} reviews</span>
                </span>
                {/* Edit button */}
                <button className="absolute top-2 right-8 bg-purple-600 text-[#070706] p-1 rounded-lg">
                  <FiEdit2 size={14} />
                </button>
                {/* More options */}
                <button className="absolute top-2 right-1 bg-black text-white  p-1 rounded-lg">
                  <RiDeleteBin5Line size={14} />
                </button>
              </div>

              {/* Product info */}
              <div className="p-4">
                <div className="text-sm text-gray-400">{p.category}</div>
                <div className="text-lg font-semibold">{p.title}</div>
                <div className="mt-2 text-gray-200">{p.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showAddProduct && (
        <div className="fixed inset-0  backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#070706] p-6 flex  justify-center rounded-xl overflow-y-hidden ">
            <AddProduct />
          </div>
        </div>
      )}
    </div>
  );
}
