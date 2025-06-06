// script.js

// Initialize faculty data
document.addEventListener("DOMContentLoaded", displayFaculty);

function getFacultyData() {
    return JSON.parse(localStorage.getItem("facultyData")) || [];
}

function saveFacultyData(data) {
    localStorage.setItem("facultyData", JSON.stringify(data));
}

function displayFaculty() {
    const facultyData = getFacultyData();
    const facultyTableBody = document.querySelector("#facultyTable tbody");
    facultyTableBody.innerHTML = "";

    facultyData.forEach((faculty, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${faculty.facultyId}</td>
            <td>${faculty.facultyName}</td>
            <td>${faculty.facultyDept}</td>
            <td>${faculty.facultyEmail}</td>
            <td class="actions">
                <button onclick="editFaculty(${index})">Edit</button>
                <button onclick="deleteFaculty(${index})">Delete</button>
            </td>
        `;
        facultyTableBody.appendChild(row);
    });
}

function addOrUpdateFaculty() {
    const facultyId = document.getElementById("facultyId").value;
    const facultyName = document.getElementById("facultyName").value;
    const facultyDept = document.getElementById("facultyDept").value;
    const facultyEmail = document.getElementById("facultyEmail").value;

    if (!facultyId || !facultyName || !facultyDept || !facultyEmail) {
        alert("All fields are required.");
        return;
    }

    const facultyData = getFacultyData();
    const existingIndex = facultyData.findIndex(f => f.facultyId === facultyId);

    const newFaculty = { facultyId, facultyName, facultyDept, facultyEmail };

    if (existingIndex === -1) {
        facultyData.push(newFaculty);
    } else {
        facultyData[existingIndex] = newFaculty;
    }

    saveFacultyData(facultyData);
    displayFaculty();
    document.getElementById("facultyForm").reset();
}

function editFaculty(index) {
    const facultyData = getFacultyData();
    const faculty = facultyData[index];

    document.getElementById("facultyId").value = faculty.facultyId;
    document.getElementById("facultyName").value = faculty.facultyName;
    document.getElementById("facultyDept").value = faculty.facultyDept;
    document.getElementById("facultyEmail").value = faculty.facultyEmail;
}

function deleteFaculty(index) {
    const facultyData = getFacultyData();
    facultyData.splice(index, 1);

    saveFacultyData(facultyData);
    displayFaculty();
}
