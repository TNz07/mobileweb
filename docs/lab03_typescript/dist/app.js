import { StudentManager } from "./managers/StudentManager.js";
import { showList } from "./utils/showList.js";
const manager = new StudentManager();
manager.loadFromLocalStorage();
function renderTable(elementId = "studentTableBody") {
    const tableBody = document.getElementById(elementId);
    tableBody.innerHTML = "";
    const students = manager.getAllStudents();
    showList(students);
    students.forEach((s) => {
        tableBody.innerHTML += `
      <tr>
        <td>${s.id}</td>
        <td>${s.title_name}</td>
        <td>${s.first_name}</td>
        <td>${s.last_name}</td>
        <td>${s.email}</td>
        <td>${s.year}</td>
        <td>${s.major}</td>
      </tr>
    `;
    });
}
document.getElementById("addBtn").onclick = () => {
    const id = document.getElementById("id").value;
    const title_name = document.getElementById("title_name").value;
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const year = Number(document.getElementById("year").value);
    const major = document.getElementById("major").value;
    // ตรวจสอบว่าตัวเลือกคำนำหน้าไม่ว่างเปล่า
    if (!title_name) {
        alert("กรุณาเลือกคำนำหน้า");
        return;
    }
    const student = {
        id,
        title_name,
        first_name,
        last_name,
        email,
        year,
        major
    };
    const success = manager.addStudent(student);
    if (!success) {
        alert("StudentID นี้มีอยู่แล้ว กรุณาใช้ ID ใหม่");
        return;
    }
    // เคลียร์ฟอร์มหลังจากเพิ่มสำเร็จ
    document.getElementById("id").value = "";
    document.getElementById("title_name").value = "";
    document.getElementById("first_name").value = "";
    document.getElementById("last_name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("year").value = "";
    document.getElementById("major").value = "";
    alert("เพิ่มนักศึกษาสำเร็จ");
    renderTable();
};
document.getElementById("searchNameBtn").onclick = () => {
    const keyword = document.getElementById("searchName").value;
    const results = manager.findStudentsByName(keyword);
    showList(results);
    alert(`ผลการค้นหา: ${results.length} คน`);
};
document.getElementById("searchMajorBtn").onclick = () => {
    const keyword = document.getElementById("searchMajor").value;
    const results = manager.findStudentsByMajor(keyword);
    showList(results);
    alert(`พบในสาขา: ${results.length} คน`);
};
document.getElementById("searchEmailBtn").onclick = () => {
    const keyword = document.getElementById("searchEmail").value;
    const results = manager.findStudentsByEmail(keyword);
    showList(results);
    alert(`ผลการค้นหา: ${results.length} คน`);
};
// เพิ่มค้นหาด้วย Email
renderTable("studentTableBody");
