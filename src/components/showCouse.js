import React from "react";
import Navbar from "./Navbar";
import "../assets/showCouse.css";

function MainshowCouses() {
    return (
        <>
        <Navbar/>
            <div className="container-sm mt-5">
                <h1>หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์</h1>
                <h2>ภาษาไทย : หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์</h2>
                <h2>ภาษาอังกฤษ : Bachelor of Engineering Program in Computer Engineering</h2>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">สาขาวิชา</th>
                            <th scope="col">ปีที่ปรับปรุง</th>
                            <th scope="col">หน่วยกิตรวม</th>
                            <th scope="col">ปีที่ศึกษา</th>
                            <th scope="col">รหัสนิสิต</th>
                            <th scope="col">ดาวน์โหลดไฟล์หลักสูตร</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="col">สาขาวิชา</th>
                            <th scope="col">ปีที่ปรับปรุง</th>
                            <th scope="col">หน่วยกิตรวม</th>
                            <th scope="col">ปีที่ศึกษา</th>
                            <th scope="col">รหัสนิสิต</th>
                            <th scope="col">ดาวน์โหลด</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            </>
    );
}

export default MainshowCouses;