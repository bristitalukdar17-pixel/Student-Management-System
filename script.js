let students = [];

class Student {
    constructor(roll, name, department) {
        this.roll = roll;
        this.name = name;
        this.department = department;
    }
}

function addStudent() {

    let roll = document.getElementById("roll").value;
    let name = document.getElementById("name").value;
    let department = document.getElementById("department").value;

    if (roll == "" || name == "" || department == "") {
        alert("Please fill all fields");
        return;
    }

    let student = new Student(roll, name, department);

    students.push(student);

    displayStudents();

    document.getElementById("roll").value = "";
    document.getElementById("name").value = "";
    document.getElementById("department").value = "";
}

function displayStudents() {

    let output = "";

    students.forEach(function(student) {
        output += `
            <tr>
                <td>${student.roll}</td>
                <td>${student.name}</td>
                <td>${student.department}</td>
            </tr>
        `;
    });

    document.getElementById("studentList").innerHTML = output;
}