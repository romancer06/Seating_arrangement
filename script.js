const studentList = [
    "학생1", "학생2", "학생3", "학생4", "학생5",
    "학생6", "학생7", "학생8", "학생9", "학생10"
];

const shuffleButton = document.getElementById("shuffleButton");
const studentListContainer = document.getElementById("studentList");

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleButton.addEventListener("click", () => {
    shuffleArray(studentList);
    updateStudentList();
});

function updateStudentList() {
    studentListContainer.innerHTML = "";
    studentList.forEach(student => {
        const studentElement = document.createElement("div");
        studentElement.textContent = student;
        studentListContainer.appendChild(studentElement);
    });
}

updateStudentList();
