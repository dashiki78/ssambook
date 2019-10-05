import axio from "axios";

const search_lesson =  document.getElementById("search_lesson_js");
const search_name_input = document.getElementById("search_name_input_js");
const serch_name_push = document.getElementById("search_name_push_js");
const start_date_input =  document.getElementById("start_date_js");
const end_date_input = document.getElementById("end_date_js");
const search_lessonDiary_btn = document.getElementById("search_lessonDiary_js") 
const student_id_input = document.getElementById("search_id_push_js");
const lessonDiary_list_area = document.getElementById("lessonDiary_list_js");

let studentName = {};
let diarys = {};

const getStudentName = async () => {
    const studentNameObj = await axio.get("/api/getstudentname");
    studentName = studentNameObj.data;
}

const serchNameInput = (event) => {
    const searchingByName = event.target.value;
    for (let i in studentName) {
        if (studentName[i].name.indexOf(searchingByName) !== -1) {
            serch_name_push.value = studentName[i].name;
            student_id_input.value = studentName[i]._id;
        }
    }
}

const removeDiary = () => {
    while (lessonDiary_list_area.firstChild) {
        lessonDiary_list_area.removeChild(lessonDiary_list_area.firstChild);
    }
}

const detailDiary = (event) => {
    location.href = `edit/${event.path[1].id}`;
}

const inputDiaryList = () => {
    removeDiary();
    let report_btn = document.createElement("button");
    report_btn.innerText = '리포트작성';
    for (let i in diarys) {
        let div_element = document.createElement("div");
        div_element.id = `${diarys[i]._id}`;
        div_element.innerHTML = `<h5>${diarys[i].name}</h5>
                                 <a>${diarys[i].date}</a>
                                 <span>${diarys[i].attend}</span>
                                 <span>${diarys[i].studyType}</span>
                                 <span>${diarys[i].study.unit}</span>
                                 `;
        div_element.className = "diaryCard";                         
        lessonDiary_list_area.append(div_element);
        div_element.addEventListener("click", detailDiary);
    }
    lessonDiary_list_area.append(report_btn);
}

const getLessonDiaryList = async () => {
    try {
        const diaryList = await axio.get(`/api/list/${start_date_input.value}/${end_date_input.value}/${student_id_input.value}`);
        diarys = diaryList.data;
        inputDiaryList();
    } catch (error) {
        console.log(error);
    }
}

const getLessonDiaryConfig = () => {
    if (search_name_push_js.value === '') {
        alert("이름을 입력하세요");
        return
    } 
    if (start_date_input.value === '') {
        alert("시작날짜를 입력하세요");
        return
    } 
    if (end_date_input.value === '') {
        alert("끝날짜를 입력하세요");
        return
    }
    getLessonDiaryList();
}

const init = () => {
    getStudentName();
    search_name_input.addEventListener("keyup", serchNameInput);
    search_lessonDiary_btn.addEventListener("click", getLessonDiaryConfig);
}

if (search_lesson) {
    init();
}