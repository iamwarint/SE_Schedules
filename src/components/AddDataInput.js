// AddDataInput.js
import React from "react";

const AddDataInput = ({ handleChange, handleAddData, form }) => {
  return (
    <table className="table table-hover">
    <tr >
      <td >
        <input
          className="form-control"
          onChange={(e) => handleChange(e)}
          type="number"
          name="code"
          value={form.code || ""}
          placeholder="code"
        />
      </td>
      <td>
        <input
          className="form-control"
          onChange={(e) => handleChange(e)}
          type="number"
          name="grade"
          value={form.grade || ""}
          placeholder="grade"
        />
      </td>
      <td>
        <input
          className="form-control"
          onChange={(e) => handleChange(e)}
          type="text"
          name="name"
          value={form.name || ""}
          placeholder="name"
        />
      </td>
      <td>
        <input
          className="form-control"
          onChange={(e) => handleChange(e)}
          type="number"
          name="credit"
          value={form.credit || ""}
          placeholder="credit"
        />
      </td>
      <td>
        <input
          className="form-control"
          onChange={(e) => handleChange(e)}
          type="text"
          name="type"
          value={form.type || ""} 
          placeholder="type"
        />
      </td>
      <td>
        <button className="btn btn-light" onClick={handleAddData}>
          Add
        </button>
      </td>
    </tr >
    </table>
  );
};

export default AddDataInput;