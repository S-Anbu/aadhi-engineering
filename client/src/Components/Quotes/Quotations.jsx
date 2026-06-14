import React, { useState } from "react";
import { generateQuotationPDF } from "../../assets/services/quotationTemplate";

const initialMaterials = [
  { id: 1, name: "Cement", unit: "Bag", qty: 1, rate: 0 },
  { id: 2, name: "Sand", unit: "Load", qty: 1, rate: 0 },
  { id: 3, name: "Bricks", unit: "Nos", qty: 1, rate: 0 },
  { id: 4, name: "Steel Rods", unit: "Kg", qty: 1, rate: 0 },
  { id: 5, name: "Gravel", unit: "Load", qty: 1, rate: 0 },
  { id: 1, name: "Bath Room Pipe Line & Fittings Wall Mount", unit: "Job", qty: 1, rate: 0 },
  { id: 2, name: "Bath Room Pipe Line & Fittings E.W.C.", unit: "Job", qty: 1, rate: 0 },
  { id: 3, name: "Bath Room Pipe Line & Fittings Common Toilet", unit: "Job", qty: 1, rate: 0 },
  { id: 4, name: "Wash Basin", unit: "Nos", qty: 1, rate: 0 },
  { id: 5, name: "Wash Basin Pedestal", unit: "Nos", qty: 1, rate: 0 },
  { id: 6, name: "Heater Fittings", unit: "Nos", qty: 1, rate: 0 },
  { id: 7, name: "Half Turn Valve", unit: "Nos", qty: 1, rate: 0 },
  { id: 8, name: "Mono Block Motor", unit: "Nos", qty: 1, rate: 0 },
  { id: 9, name: "Pressure Pump Motor", unit: "Nos", qty: 1, rate: 0 },
  { id: 10, name: "Sintex Tank 1000 Litres", unit: "Nos", qty: 1, rate: 0 },
  { id: 11, name: "Floor Trap", unit: "Nos", qty: 1, rate: 0 },
  { id: 12, name: "Jally", unit: "Nos", qty: 1, rate: 0 },
  { id: 13, name: "Urinal Fittings", unit: "Nos", qty: 1, rate: 0 },
  { id: 14, name: "Bath Tub", unit: "Nos", qty: 1, rate: 0 },
  { id: 15, name: "Bottle Trap", unit: "Nos", qty: 1, rate: 0 },
  { id: 16, name: "Earth Work", unit: "Sqft", qty: 1, rate: 0 },
  { id: 17, name: "Sink Fitting", unit: "Nos", qty: 1, rate: 0 },
  { id: 18, name: "Sink Tap", unit: "Nos", qty: 1, rate: 0 },
  { id: 19, name: '1/2" x 3/4" Valve', unit: "Nos", qty: 1, rate: 0 },
  { id: 20, name: '1" x 1 1/4" Valve', unit: "Nos", qty: 1, rate: 0 },
  { id: 21, name: '1 1/2" x 2" Valve', unit: "Nos", qty: 1, rate: 0 },
  { id: 22, name: '3/4" Tank Ball Valve', unit: "Nos", qty: 1, rate: 0 },
  { id: 23, name: "Duct Line Work", unit: "Job", qty: 1, rate: 0 },
  { id: 24, name: "Roof Hole", unit: "Nos", qty: 1, rate: 0 },
  { id: 25, name: "Beam Hole", unit: "Nos", qty: 1, rate: 0 },
  { id: 26, name: "Extra Labour", unit: "Job", qty: 1, rate: 0 },
  { id: 27, name: "Motor Erection (Mono Block)", unit: "Job", qty: 1, rate: 0 },

  // PVC ASTM CPVC Pipe (Normal Clamp)
  { id: 28, name: 'PVC ASTM CPVC Pipe 1/2" (Per Feet)', unit: "Feet", qty: 1, rate: 0 },
  { id: 29, name: 'PVC ASTM CPVC Pipe 3/4" (Per Feet)', unit: "Feet", qty: 1, rate: 0 },
  { id: 30, name: 'PVC ASTM CPVC Pipe 1" (Per Feet)', unit: "Feet", qty: 1, rate: 0 },
  { id: 31, name: 'PVC ASTM CPVC Pipe 1 1/4" (Per Feet)', unit: "Feet", qty: 1, rate: 0 },
  { id: 32, name: 'PVC ASTM CPVC Pipe 1 1/2" (Per Feet)', unit: "Feet", qty: 1, rate: 0 },
  { id: 33, name: 'PVC ASTM CPVC Pipe 2" (Per Feet)', unit: "Feet", qty: 1, rate: 0 },
  { id: 34, name: 'PVC ASTM CPVC Pipe 2 1/2" (Per Feet)', unit: "Feet", qty: 1, rate: 0 },
  { id: 35, name: 'PVC ASTM CPVC Pipe 3" (Per Feet)', unit: "Feet", qty: 1, rate: 0 },
  { id: 36, name: 'PVC ASTM CPVC Pipe 4" (Per Feet)', unit: "Feet", qty: 1, rate: 0 },
  { id: 37, name: 'PVC ASTM CPVC Pipe 5" (Per Feet)', unit: "Feet", qty: 1, rate: 0 },
  { id: 38, name: 'PVC ASTM CPVC Pipe 6" (Per Feet)', unit: "Feet", qty: 1, rate: 0 },
  { id: 39, name: 'PVC ASTM CPVC Pipe 4" Earth Work (Per Feet)', unit: "Feet", qty: 1, rate: 0 },

  // Apartment Clamp
  { id: 40, name: 'PVC ASTM CPVC Pipe 1/2" (Apartment Clamp)', unit: "Feet", qty: 1, rate: 0 },
  { id: 41, name: 'PVC ASTM CPVC Pipe 3/4" (Apartment Clamp)', unit: "Feet", qty: 1, rate: 0 },
  { id: 42, name: 'PVC ASTM CPVC Pipe 1" (Apartment Clamp)', unit: "Feet", qty: 1, rate: 0 },
  { id: 43, name: 'PVC ASTM CPVC Pipe 1 1/4" (Apartment Clamp)', unit: "Feet", qty: 1, rate: 0 },
  { id: 44, name: 'PVC ASTM CPVC Pipe 1 1/2" (Apartment Clamp)', unit: "Feet", qty: 1, rate: 0 },
  { id: 45, name: 'PVC ASTM CPVC Pipe 2" (Apartment Clamp)', unit: "Feet", qty: 1, rate: 0 },
  { id: 46, name: 'PVC ASTM CPVC Pipe 2 1/2" (Apartment Clamp)', unit: "Feet", qty: 1, rate: 0 },
  { id: 47, name: 'PVC ASTM CPVC Pipe 3" (Apartment Clamp)', unit: "Feet", qty: 1, rate: 0 },
  { id: 48, name: 'PVC ASTM CPVC Pipe 4" (Apartment Clamp)', unit: "Feet", qty: 1, rate: 0 },
  { id: 49, name: 'PVC ASTM CPVC Pipe 5" (Apartment Clamp)', unit: "Feet", qty: 1, rate: 0 },
  { id: 50, name: 'PVC ASTM CPVC Pipe 6" (Apartment Clamp)', unit: "Feet", qty: 1, rate: 0 },
  { id: 51, name: 'PVC ASTM CPVC Pipe 4" Earth Work (Apartment Clamp)', unit: "Feet", qty: 1, rate: 0 },

];

const Quotations = () => {
  const [materials, setMaterials] = useState(initialMaterials);

  const handleCheckboxChange = (id) => {
    setMaterials((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, selected: !item.selected }
          : item
      )
    );
  };

  const handleInputChange = (id, field, value) => {
    setMaterials((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, [field]: Number(value) }
          : item
      )
    );
  };

  const selectedItems = materials
    .filter((item) => item.selected)
    .map((item) => ({
      ...item,
      amount: item.qty * item.rate,
    }));

  const grandTotal = selectedItems.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  return (
    <div className=" mt-16 max-w-7xl mx-auto p-4 md:p-8  bg-white shadow-lg rounded-lg">

      <h2 className="text-2xl font-bold text-center mb-6">
        AADHI Engineering Works - Quotation
      </h2>

      {/* ================= Desktop Table ================= */}

      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="p-3">Select</th>
              <th className="p-3">S.No</th>
              <th className="p-3 text-left">Material</th>
              <th className="p-3">Qty</th>
              <th className="p-3">Unit</th>
              <th className="p-3">Rate</th>
              <th className="p-3">Amount</th>
            </tr>
          </thead>

          <tbody>
            {materials.map((item, index) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={item.selected || false}
                    onChange={() =>
                      handleCheckboxChange(item.id)
                    }
                  />
                </td>

                <td className="text-center">{index + 1}</td>

                <td className="px-3 py-2">{item.name}</td>

                <td className="text-center">
                  <input
                    type="number"
                    min="1"
                    value={item.qty}
                    disabled={!item.selected}
                    onChange={(e) =>
                      handleInputChange(
                        item.id,
                        "qty",
                        e.target.value
                      )
                    }
                    className="border rounded w-20 px-2 py-1 text-center disabled:bg-gray-100"
                  />
                </td>

                <td className="text-center">{item.unit}</td>

                <td className="text-center">
                  <input
                    type="number"
                    min="0"
                    value={item.rate}
                    disabled={!item.selected}
                    onChange={(e) =>
                      handleInputChange(
                        item.id,
                        "rate",
                        e.target.value
                      )
                    }
                    className="border rounded w-24 px-2 py-1 text-center disabled:bg-gray-100"
                  />
                </td>

                <td className="text-center font-semibold">
                  ₹{" "}
                  {item.selected
                    ? (item.qty * item.rate).toLocaleString()
                    : 0}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= Mobile Cards ================= */}

      <div className="md:hidden space-y-4">
        {materials.map((item, index) => (
          <div
            key={item.id}
            className="border rounded-lg shadow p-4"
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="font-semibold">
                  {index + 1}. {item.name}
                </p>
                <p className="text-sm text-gray-500">
                  Unit : {item.unit}
                </p>
              </div>

              <input
                type="checkbox"
                checked={item.selected || false}
                onChange={() =>
                  handleCheckboxChange(item.id)
                }
              />
            </div>

            <div className="grid grid-cols-2 gap-3">

              <div>
                <label className="text-sm font-medium">
                  Qty
                </label>

                <input
                  type="number"
                  min="1"
                  value={item.qty}
                  disabled={!item.selected}
                  onChange={(e) =>
                    handleInputChange(
                      item.id,
                      "qty",
                      e.target.value
                    )
                  }
                  className="w-full border rounded p-2 mt-1 disabled:bg-gray-100"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Rate
                </label>

                <input
                  type="number"
                  min="0"
                  value={item.rate}
                  disabled={!item.selected}
                  onChange={(e) =>
                    handleInputChange(
                      item.id,
                      "rate",
                      e.target.value
                    )
                  }
                  className="w-full border rounded p-2 mt-1 disabled:bg-gray-100"
                />
              </div>

            </div>

            <div className="mt-4 text-right font-bold text-lg">
              Amount : ₹{" "}
              {item.selected
                ? (item.qty * item.rate).toLocaleString()
                : 0}
            </div>
          </div>
        ))}
      </div>

      {/* ================= Grand Total ================= */}

      <div className="mt-8 flex justify-center md:justify-end">
        <div className="w-full md:w-80 bg-gray-100 rounded-lg shadow p-4">
          <div className="flex justify-between text-xl font-bold">
            <span>Grand Total</span>
            <span>₹ {grandTotal.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* ================= Button ================= */}

      <div className="mt-6 flex justify-center md:justify-end">
        <button
          onClick={() => generateQuotationPDF(selectedItems)}
          disabled={selectedItems.length === 0}
          className="w-full md:w-auto bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg disabled:bg-gray-400"
        >
          Generate Quotation PDF
        </button>
      </div>

    </div>
  );
};

export default Quotations;