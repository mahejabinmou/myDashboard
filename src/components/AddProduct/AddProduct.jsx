import { FaUpload } from "react-icons/fa";
import CustomButton from "../ui/CustomButton/CustomButton";
import ProductPreview from "./ProductPreview";

const AddProduct = () => {
  return (
    <div className="flex gap-x-[24px] ">
      <div className="bg-[#1E1D2B] p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Add Product</h2>
        </div>
        {/* Logo Upload */}
        <div className="border-2 border-dashed  border-gray-600 rounded-lg flex flex-col items-center justify-center h-[120px] bg-[#141428]">
          <FaUpload className="text-purple-400 text-xl mb-1" />
          <p className="text-purple-400 text-sm cursor-pointer">Upload</p>
          <p className="text-gray-500 text-xs">Or drag and drop</p>
        </div>

        {/* Invoice ID & Date */}
        <div className="grid grid-cols-2 gap-4  pt-[24px]">
          <div className="flex flex-col gap-4">
            <label htmlFor="category">Category </label>
            <select className="bg-black text-white rounded-lg px-3 py-2 flex-1 outline-none">
              <option>Haircare</option>
            </select>
          </div>

          <div className="flex flex-col gap-4">
            <label htmlFor="category">Unit Price </label>
            <select className="bg-black text-white rounded-lg px-3 py-2 flex-1 outline-none">
              <option>$46.00</option>
            </select>
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="category" className="">
              Purchase Cost{" "}
            </label>
            <select className="bg-black text-white rounded-lg px-3 py-2 flex-1 outline-none">
              <option>$33.37</option>
            </select>
          </div>

          <div className="flex flex-col gap-4 ">
            <label htmlFor="category">Supplier </label>
            <select className="bg-black text-white rounded-lg px-3 py-2 flex-1 outline-none">
              <option>Cosmo Prof</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-[24px] ">
          <label htmlFor="category">Track Inventory</label>
          <select className="bg-black text-white rounded-lg px-3 py-2 flex-1 outline-none">
            <option>Yes</option>
          </select>
        </div>

        <div className="flex gap-6">
          <CustomButton variant="secondary"> Reset to Default</CustomButton>
          <CustomButton variant="primary">Save & Continue</CustomButton>
        </div>
      </div>

      <div className="flex ">
        <ProductPreview />
      </div>
    </div>
  );
};

export default AddProduct;
