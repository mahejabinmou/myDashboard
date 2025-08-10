const InvoicePreview = () => {
  return (
    <div className="bg-[#1B1B2F] rounded-xl p-6 text-white w-full h-min">
      <div className="bg-[#141428] rounded-xl p-4">
        <h2 className="text-lg font-bold">Invoice</h2>
        <p className="text-sm text-gray-400">Invoice No: R - 0122464 -10</p>
        <p className="text-sm text-gray-400">Date Issued: Sep 04, 2023</p>
        <p className="text-sm text-gray-400">Email: rahama0198@gmail.com</p>

        <div className="flex justify-between mt-4">
          <div>
            <h4 className="font-semibold">Facturer</h4>
            <p className="text-xs text-gray-400">
              &lt;Name personne - ressource&gt;
            </p>
            <p className="text-xs text-gray-400">&lt;Name the client&gt;</p>
            <p className="text-xs text-gray-400">&lt;Telephone, e-mail&gt;</p>
          </div>
          <div>
            <h4 className="font-semibold">Emplacement</h4>
            <p className="text-xs text-gray-400">&lt;Name&gt;</p>
            <p className="text-xs text-gray-400">&lt;Address&gt;</p>
            <p className="text-xs text-gray-400">&lt;Telephone&gt;</p>
          </div>
        </div>

        {/* Table */}
        <table className="w-full text-xs mt-4 border-collapse">
          <thead className="bg-purple-500">
            <tr>
              <th className="text-left p-1">Description</th>
              <th className="text-left p-1">Qty</th>
              <th className="text-left p-1">Unit Price</th>
              <th className="text-left p-1">Total</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(6)].map((_, i) => (
              <tr key={i} className="border-b border-gray-700">
                <td className="p-1">0.00</td>
                <td className="p-1">0.00</td>
                <td className="p-1">0.00</td>
                <td className="p-1">0.00</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Totals */}
        <div className="mt-4 text-xs">
          <p>Total HT: $ 0.00</p>
          <p>Discount: $ 0.00</p>
          <p>Total VAT: $ 0.00</p>
          <p className="text-red-500 font-bold">Total Due: $ 0.00</p>
        </div>

        {/* Footer */}
        <p className="text-[10px] text-gray-400 mt-4">
          BarBar shop, Capital 100, Siret: 01223222
        </p>
        <p className="text-[10px] text-gray-400">
          VAT: RM1234567. Activity Type: 55.33C
        </p>
      </div>
    </div>
  );
};

export default InvoicePreview;
