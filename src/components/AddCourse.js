import React, { useState } from "react";
import "../assets/AddCourse.css";

const AddCourse = ({ handleChange, handleAddData, form }) => {
  
  const [isPopup, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup(!isPopup);
  };

  return (
    <div className="form-group col-xl-5 p-3">
      <div className="form-inline">
        <button className="btn1" onClick={togglePopup}>
          เพิ่มรายวิชา
        </button>

        {isPopup && (
          <div className="popup-overlay">
            <div className="popup">
              <div className="close"><button className="btn-close" onClick={togglePopup}></button></div>
              
              <h1>เพิ่มรายวิชา</h1>
              <form>
              <div className="form-group">
                <label htmlFor="code">รหัสวิชา</label>
                <input
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  type="number"
                  name="code"
                  value={form.code || ""}
                  placeholder="Code"
                />
              </div>

              <div className="form-group">
                <label htmlFor="grade">Grade:</label>
                <input
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  type="number"
                  name="grade"
                  value={form.grade || ""}
                  placeholder="Grade"
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  type="text"
                  name="name"
                  value={form.name || ""}
                  placeholder="Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="credit">Credit:</label>
                <input
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  type="number"
                  name="credit"
                  value={form.credit || ""}
                  placeholder="Credit"
                />
              </div>

              <div className="form-group">
                <label htmlFor="type">Type:</label>
                <select
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  name="type"
                  value={form.type || ""}
                  placeholder="Type"
                >
                  <option >- กรุณาเลือก -</option>
                  <option value="บรรยาย">บรรยาย</option>
                  <option value="ปฎิบัติ">ปฎิบัติ</option>
                </select>
              </div>

              <div className="form-group mt-2">
                  <button
                    type="button"
                    className="btn1"
                    id="submit"
                    onClick={() => {
                      handleAddData();
                      togglePopup(); // Close the popup after clicking "บันทึก"
                    }}
                  >
                    บันทึก
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddCourse;