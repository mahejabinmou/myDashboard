const ProductPreview = () => {
  return (
    <div className="bg-[#1B1B2F] rounded-lg  text-white w-full h-min">
      <div className="p-6">
        <h2 className="text-lg font-bold pb-[16px]">Preview</h2>

        <div className="bg-[#070706] p-[16px] rounded-[16px]">
          <h2 className="text-lg font-bold pb-[16px]">Product</h2>
          <div className="bg-[#1E1D2B] p-[16px] h-[246px] rounded-[16px]">
            <img
              src="/images/Rectangle.png"
              alt=""
              className="object-cover h-full"
            />
          </div>

          <div className="mt-[24px]">
            <div className="flex gap-[84px] pb-[24px]">
              <div>
                <h1 className="pb-[8px]">Category</h1>
                <p>Haircare</p>
              </div>
              <div>
                <h1 className="pb-[8px]">Unit Price</h1>
                <p>$46.00</p>
              </div>
            </div>
            <div className="flex gap-[45px]">
              <div>
                <h1 className="pb-[8px]">Product Name</h1>
                <p>
                  Bright Blonde <br /> Conditioner
                </p>
              </div>
              <div>
                <h1 className="pb-[8px]">Purchase Cost</h1>
                <p>$33.37</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
