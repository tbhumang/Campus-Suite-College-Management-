let students = [];

function addStudent() {
  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value.trim();
  const grade = document.getElementById('grade').value.trim();

  if (name === "" || age === "" || grade === "") {
    alert("Please fill in all fields.");
    return;
  }

  const student = { name, age, grade };
  students.push(student);
  renderStudents();
  clearForm();
}

function deleteStudent(index) {
  students.splice(index, 1);
  renderStudents();
}

function renderStudents() {
  const studentTableBody = document.getElementById('studentTableBody');
  studentTableBody.innerHTML = '';

  students.forEach((student, index) => {
    const row = `<tr>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.grade}</td>
      <td><button class="delete-btn" onclick="deleteStudent(${index})">Delete</button></td>
    </tr>`;
    studentTableBody.innerHTML += row;
  });
}

function clearForm() {
  document.getElementById('name').value = '';
  document.getElementById('age').value = '';
  document.getElementById('grade').value = '';
}
