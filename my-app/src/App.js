import { useState } from "react";
import "./App.css";
import { Items } from "./ItemMaster/ItemMaster";
import { Details } from "./ItemMaster/ItemDetails";
import axios from "axios";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleEditRow = (value) => {
    setRowToEdit(value);
    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    if (rowToEdit === null) {
      setRows([...rows, newRow]);
    } else {
      setRows((prevRows) => {
        return prevRows.map((currRow, index) =>
        index === rowToEdit ? newRow : currRow
      );
      });
    }

    axios
      .post("http://localhost:3004/CREATE", newRow)
      .then((response) => {
        console.log("Successful response:", response);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          console.error("404 Not Found:", error.response.data);
        } else {
          console.error("Error:", error);
        }
      });

    setModalOpen(false);
    setRowToEdit(null);
  };

  return (
    <div className="App">
      <button onClick={() => setModalOpen(true)} className="btn">
        Add
      </button>
      <Items rows={rows} editRow={handleEditRow} />
      {modalOpen && (
        <Details
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null ? rows[rowToEdit] : null}
        />
      )}
    </div>
  );
}

export default App;
