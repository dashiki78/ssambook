import axio from "axios";

const search_lesson =  document.getElementById("search_lesson_js");
const search_name_input = document.getElementById("search_name_input_js");
const serch_name_push = document.getElementById("search_name_push_js");

let studentName = {};

const getStudentName = async () => {
    const studentNameObj = await axio.get("/api/getstudentname");
    studentName = studentNameObj.data;
    console.log(studentName);
}

const serchNameInput = (event) => {
    const searchingByName = event.target.value;
    for (let i in studentName) {
        if (studentName[i].name.indexOf(searchingByName) !== -1) {
            serch_name_push.value = studentName[i].name;
        }
    }
}

const init = () => {
    getStudentName();
    search_name_input.addEventListener("keyup", serchNameInput);
}

if (search_lesson) {
    init();
}