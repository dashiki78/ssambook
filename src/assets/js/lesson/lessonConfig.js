import axio from "axios";

const lessonClass = document.getElementById('lesson_config_js');
const searchName = document.getElementById('search_name_js');
const studentList = document.getElementById('student_list_js');
let studentListObj = {};

const getStudent = async () => {
    try {
        studentListObj = await axio.get('/api/getstudent');
        console.log(studentListObj.data);        
        insertStudent(undefined, undefined);
    } catch (error) {
        console.log(error);    }
}

const insertStudent = (day, name) => {
    if (!day) {
        const day = getDay();
        for (let student in studentListObj.data) {
            if (studentListObj.data[student].lessonDay){
                if (studentListObj.data[student].lessonDay.includes(day)) {
                    const studentName = studentListObj.data[student].name;
                    let a = document.createElement("a");
                    a.className = "name";
                    a.innerHTML = `<li>${studentName}</li>`;
                    studentList.appendChild(a);
                }
            }
        }
    } else if (day === '월') {
        console.log('mon');
        for (let student in studentListObj.data) {
            if (studentListObj.data[student].lessonDay){
                if (studentListObj.data[student].lessonDay.includes(day)) {
                    const studentName = studentListObj.data[student].name;
                    let a = document.createElement("a");
                    a.className = "name";
                    a.innerHTML = `<li>${studentName}</li>`;
                    studentList.appendChild(a);
                }
            }
        }
    } else if (day === '화') {
        console.log('tue');
        for (let student in studentListObj.data) {
            if (studentListObj.data[student].lessonDay){
                if (studentListObj.data[student].lessonDay.includes(day)) {
                    const studentName = studentListObj.data[student].name;
                    let a = document.createElement("a");
                    a.className = "name";
                    a.innerHTML = `<li>${studentName}</li>`;
                    studentList.appendChild(a);
                }
            }
        }
    } else if (day === '수') {
        console.log('wed');
        for (let student in studentListObj.data) {
            if (studentListObj.data[student].lessonDay){
                if (studentListObj.data[student].lessonDay.includes(day)) {
                    const studentName = studentListObj.data[student].name;
                    let a = document.createElement("a");
                    a.className = "name";
                    a.innerHTML = `<li>${studentName}</li>`;
                    studentList.appendChild(a);
                }
            }
        }
    } else if (day==='목') {
        console.log('thu');
        for (let student in studentListObj.data) {
            if (studentListObj.data[student].lessonDay){
                if (studentListObj.data[student].lessonDay.includes(day)) {
                    const studentName = studentListObj.data[student].name;
                    let a = document.createElement("a");
                    a.className = "name";
                    a.innerHTML = `<li>${studentName}</li>`;
                    studentList.appendChild(a);
                }
            }
        }
    } else if (day ==='금') {
        console.log('fri');
        for (let student in studentListObj.data) {
            if (studentListObj.data[student].lessonDay){
                if (studentListObj.data[student].lessonDay.includes(day)) {
                    const studentName = studentListObj.data[student].name;
                    let a = document.createElement("a");
                    a.className = "name";
                    a.innerHTML = `<li>${studentName}</li>`;
                    studentList.appendChild(a);
                }
            }
        }
    } else if (day ==='토') {
        console.log('sat');
        for (let student in studentListObj.data) {
            if (studentListObj.data[student].lessonDay){
                if (studentListObj.data[student].lessonDay.includes(day)) {
                    const studentName = studentListObj.data[student].name;
                    let a = document.createElement("a");
                    a.className = "name";
                    a.innerHTML = `<li>${studentName}</li>`;
                    studentList.appendChild(a);
                }
            }
        }
    } else if (day ==='일') {
        console.log('sun');
        for (let student in studentListObj.data) {
            if (studentListObj.data[student].lessonDay){
                if (studentListObj.data[student].lessonDay.includes(day)) {
                    const studentName = studentListObj.data[student].name;
                    let a = document.createElement("a");
                    a.className = "name";
                    a.innerHTML = `<li>${studentName}</li>`;
                    studentList.appendChild(a);
                }
            }
        }
    } else if (day ==='전체요일') {
        console.log('all');
        for (let student in studentListObj.data) {
            const studentName = studentListObj.data[student].name;
                    let a = document.createElement("a");
                    a.className = "name";
                    a.innerHTML = `<li>${studentName}</li>`;
                    studentList.appendChild(a);
        }
    }
    console.log(name);
}

const getDay = () => {
    const date = new Date();
    const week = new Array('일', '월', '화', '수', '목', '금', '토');
    const day = week[date.getDay()];
    console.log(day);
    return day;
}

const init = () => {
    getStudent();
}

if (lessonClass) {
    init();
}
