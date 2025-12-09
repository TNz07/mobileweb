export class StudentManager {
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        // ตรวจสอบว่า StudentID ซ้ำหรือไม่
        if (this.findStudentByID(student.id)) {
            return false; // ล้มเหลวเพราะ ID ซ้ำ
        }
        this.students.push(student);
        this.saveToLocalStorage();
        return true; // สำเร็จ
    }
    getAllStudents() {
        return this.students;
    }
    findStudentByID(id) {
        return this.students.find(s => s.id === id);
    }
    findStudentsByName(name) {
        const keyword = name.toLowerCase();
        return this.students.filter(s => s.first_name.toLowerCase().includes(name.toLowerCase()) ||
            s.last_name.toLowerCase().includes(name.toLowerCase()));
    }
    findStudentsByMajor(major) {
        return this.students.filter(s => s.major.toLowerCase().includes(major.toLowerCase()));
    }
    findStudentsByEmail(email) {
        return this.students.filter(s => s.email.toLowerCase().includes(email.toLowerCase()));
    }
    saveToLocalStorage() {
        localStorage.setItem("students", JSON.stringify(this.students));
    }
    loadFromLocalStorage() {
        const data = localStorage.getItem("students");
        if (data) {
            this.students = JSON.parse(data);
        }
    }
}
