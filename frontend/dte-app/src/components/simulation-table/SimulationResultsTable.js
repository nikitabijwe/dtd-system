import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const SimulationResultsTable = () => {
  const [blankRows, setBlankRows] = useState(20);
  const positions = useSelector((state) => state.simulation.positions);

  useEffect(() => {
    // Update the number of blank rows when new data arrives
    setBlankRows(20 - positions.length);
  }, [positions]);

  if (positions.length === 0) {
    return null; // Don't render anything if there are no positions/results
  }

  return (
    <div className="container p-3 rounded-bottom bg-light">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th
              colSpan="4"
              className="text-left"
              style={{ backgroundColor: "#ccc" }}
            >
              Results
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4">
              <div style={{ margin: "20px" }}>
                <table className="table table-bordered" style={{ tableLayout: "fixed" }}>
                  <thead>
                    <tr>
                      <th style={{ backgroundColor: "#ccc"}}>N</th>
                      <th style={{ backgroundColor: "#ccc" }}>X</th>
                      <th style={{ backgroundColor: "#ccc" }}>Y</th>
                      <th style={{ backgroundColor: "#ccc" }}>Z</th>
                    </tr>
                  </thead>
                  <tbody>
                    {positions.map((position, index) => (
                      <tr key={index}>
                        <td>{position[0]}</td>
                        <td>{position[1]}</td>
                        <td>{position[2]}</td>
                        <td>{position[3]}</td>
                      </tr>
                    ))}
                    {/* Add blank rows */}
                    {Array.from({ length: blankRows }).map((_, index) => (
                      <tr key={`blank-${index}`}>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SimulationResultsTable;
