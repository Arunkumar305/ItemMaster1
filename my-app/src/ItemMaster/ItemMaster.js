import React, { useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import "./ItemMaster.css";

export const Items = ({ rows, editRow }) => {
  const initialCheckboxStates = rows.map(() => ({
    checkbox1: false,
  }));
  const [checkboxStates, setCheckboxStates] = useState(initialCheckboxStates);

  const handleCheckboxChange = (index) => {
    setCheckboxStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = {
        checkbox1: !prevStates[index]?.checkbox1,
      };
      return updatedStates;
    });
  };

  return (
    <div className="container">
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>ItemCode</th>
              <th>Description</th>
              <th>StandardQty</th>
              <th>ContainerQty</th>
              <th>Rate</th>
              <th>Qty On Hand</th>
              <th>RefNO</th>
              <th>BatchCode:</th>
              <th>BatchSr.No</th>
              <th>UnitCost</th>
              <th>Active</th>
              <th>UOM</th>
              <th>HSNCode</th>
              <th>PrimeCust</th>
              <th>ItemPic</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => {
              return (
                <tr key={index}>
                  <td>{row.ItemCode}</td>
                  <td>{row.Description}</td>
                  <td>{row.StandardQty}</td>
                  <td>{row.ContainerQty}</td>
                  <td>{row.Rate}</td>
                  <td>{row.QtyOnHand}</td>
                  <td>{row.RefNO}</td>
                  <td>{row.BatchCode}</td>
                  <td>{row.BatchSrNo}</td>
                  <td>{row.UnitCost}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={checkboxStates[index]?.checkbox1}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </td>
                  <td>{row.UOM}</td>
                  <td>{row.HSNCode}</td>
                  <td>{row.PrimeCust}</td>
                  <td>{row.ItemPic}</td>
                  <td>
                    <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => editRow(index)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
