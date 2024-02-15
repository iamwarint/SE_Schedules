import React from "react";
import "../assets/DataTable.css"; // เชื่อมต่อไฟล์ CSS

const DataTable = ({
  data,
  editId,
  form,
  handleChange,
  handleSave,
  handleSelect,
  setEditId,
  setForm,
}) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">รหัสวิชา</th>
          <th scope="col">หลักสูตร</th>
          <th scope="col">ชื่อวิชา</th>
          <th scope="col">หน่วยกิต</th>
          <th scope="col">ประเภท</th>
          <th scope="col"></th>
          <th scope="col"></th> {/* New column for Select button */}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>

            <td>
              {editId === item.id ? (
                <>
                  <input
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    type="number"
                    name="code"
                    value={form.code !== undefined ? form.code : item.code}
                    placeholder="code"
                  />
                </>
              ) : (
                item.code
              )}
            </td>

            <td>
              {editId === item.id ? (
                <>
                  <input
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    type="number"
                    name="grade"
                    value={form.grade !== undefined ? form.grade : item.grade}
                    placeholder="grade"
                  />
                </>
              ) : (
                item.grade
              )}
            </td>
            <td>
              {editId === item.id ? (
                <>
                  <input
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    type="text"
                    name="name"
                    value={form.name !== undefined ? form.name : item.name}
                    placeholder="name"
                  />
                </>
              ) : (
                item.name
              )}
            </td>
            <td>
              {editId === item.id ? (
                <>
                  <input
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    type="number"
                    name="credit"
                    value={
                      form.credit !== undefined ? form.credit : item.credit
                    }
                    placeholder="credit"
                  />
                </>
              ) : (
                item.credit
              )}
            </td>
            <td>
              {editId === item.id ? (
                <>
                  <input
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    type="text"
                    name="type"
                    value={form.type !== undefined ? form.type : item.type}
                    placeholder="type"
                  />
                </>
              ) : (
                item.type
              )}
            </td>
            <td>
              {editId === item.id ? (
                <>
                  <button className="btn btn-success" onClick={handleSave}>
                    Save
                  </button>{" "}
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      setEditId(null);
                      setForm({}); // Ensure to reset the form state
                    }}
                  >
                    Cancel
                  </button>
                </>
              ) : null /* Removed Edit and Delete buttons */}
            </td>
            <td>
              <button
                className="btn btn-select" // ใช้ CSS ที่กำหนดสีเลือดหมู
                //onClick={() => handleSelect(item.id)}
              >
                เลือก
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;