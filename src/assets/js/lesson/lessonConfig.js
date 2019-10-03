import axio from "axios";

const lessonClass = document.getElementById('lesson_config_js');
const searchName = document.getElementById('search_name_js');
const studentList = document.getElementById('student_list_js');
const selectDay = document.getElementById('diaryDay');
const chooseName = document.getElementById('student_name_choose');
const chooseDate = document.getElementById('choose_date');
const newDiarybtn = document.getElementById('new_input_diary');

let studentListObj = {};
let studentId = "";
let diaryDate = "";
let exist_toggle = false;

const getStudent = async () => {
    try {
        studentListObj = await axio.get('/api/getstudent');
        console.log(studentListObj.data);
        if (studentListObj.data.length === 0) {
            alert("관리할 학생이 없습니다")
        }        
        insertStudent(undefined, undefined);
    } catch (error) {
        console.log(error); 
    }
}

const insertStudentList = (studentName, diary) => {
    let a = document.createElement("a");
    a.className = "name";
    a.innerHTML = checkDiary(studentName, diary);
    a.addEventListener("click", chooseNamefnc);
    studentList.appendChild(a);
}

const insertStudent = (day, name) => {
    removeListfnc();
    if (name) {
        for (let student in studentListObj.data) {
            if (studentListObj.data[student].name.indexOf(name) != -1) {
                const studentName = studentListObj.data[student].name;
                const diary = studentListObj.data[student].lessonDiary
                insertStudentList(studentName, diary);
            }
        }
        return ;
    }
    if (!day) {
        const day = getDay();
        for (let student in studentListObj.data) {
            if (studentListObj.data[student].lessonDay){
                if (studentListObj.data[student].lessonDay.includes(day)) {
                    const studentName = studentListObj.data[student].name;
                    const diary = studentListObj.data[student].lessonDiary
                    insertStudentList(studentName, diary);
                }
            }
        }
    } else if (day === '월') {
        console.log('mon');
        for (let student in studentListObj.data) {
            if (studentListObj.data[student].lessonDay){
                if (studentListObj.data[student].lessonDay.includes(day)) {
                    const studentName = studentListObj.data[student].name;
                    const diary = studentListObj.data[student].lessonDiary
                    insertStudentList(studentName, diary);
                }
            }
        }
    } else if (day === '화') {
        console.log('tue');
        for (let student in studentListObj.data) {
            if (studentListObj.data[student].lessonDay){
                if (studentListObj.data[student].lessonDay.includes(day)) {
                    const studentName = studentListObj.data[student].name;
                    const diary = studentListObj.data[student].lessonDiary
                    insertStudentList(studentName, diary);
                }
            }
        }
    } else if (day === '수') {
        console.log('wed');
        for (let student in studentListObj.data) {
            if (studentListObj.data[student].lessonDay){
                if (studentListObj.data[student].lessonDay.includes(day)) {
                    const studentName = studentListObj.data[student].name;
                    const diary = studentListObj.data[student].lessonDiary
                    insertStudentList(studentName, diary);
                }
            }
        }
    } else if (day==='목') {
        console.log('thu');
        for (let student in studentListObj.data) {
            if (studentListObj.data[student].lessonDay){
                if (studentListObj.data[student].lessonDay.includes(day)) {
                    const studentName = studentListObj.data[student].name;
                    const diary = studentListObj.data[student].lessonDiary
                    insertStudentList(studentName, diary);
                }
            }
        }
    } else if (day ==='금') {
        console.log('fri');
        for (let student in studentListObj.data) {
            if (studentListObj.data[student].lessonDay){
                if (studentListObj.data[student].lessonDay.includes(day)) {
                    const studentName = studentListObj.data[student].name;
                    const diary = studentListObj.data[student].lessonDiary
                    insertStudentList(studentName, diary);
                }
            }
        }
    } else if (day ==='토') {
        console.log('sat');
        for (let student in studentListObj.data) {
            if (studentListObj.data[student].lessonDay){
                if (studentListObj.data[student].lessonDay.includes(day)) {
                    const studentName = studentListObj.data[student].name;
                    const diary = studentListObj.data[student].lessonDiary
                    insertStudentList(studentName, diary);
                }
            }
        }
    } else if (day ==='일') {
        console.log('sun');
        for (let student in studentListObj.data) {
            if (studentListObj.data[student].lessonDay){
                if (studentListObj.data[student].lessonDay.includes(day)) {
                    const studentName = studentListObj.data[student].name;
                    const diary = studentListObj.data[student].lessonDiary;
                    insertStudentList(studentName, diary);
                }
            }
        }
    } else if (day ==='전체요일') {
        console.log('all');
        for (let student in studentListObj.data) {
            const studentName = studentListObj.data[student].name;
            const diary = studentListObj.data[student].lessonDiary;
            insertStudentList(studentName, diary);
        }
    }
}

const getDay = () => {
    const date = new Date();
    const week = new Array('일', '월', '화', '수', '목', '금', '토');
    const day = week[date.getDay()];
    return day;
}

const changeStudentList = (event) => {
    const day = event.target.value;
    insertStudent(day, undefined);
}

const chooseNamefnc = (event) => {
    const selectName =  event.target.innerText;
    const searchName_next = event.target.nextSibling.className;
    if (searchName_next === 'fas fa-plus') {
        exist_toggle = true;
    } else if (searchName_next === 'fas fa-check') {
        exist_toggle = false;
    }
    chooseName.value = selectName;
}

const autoDate = () => {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1
    var day = date.getDate();
    if(month < 10){
        month = "0"+month;
    }
    if(day < 10){
        day = "0"+day;
    }
    var today = year+"-"+month+"-"+day;
    chooseDate.value = today;
}

const searchNamefnc = (event) => {
    const searchingByName = event.target.value;
    for (let student in studentListObj.data) {
        if (studentListObj.data[student].name.indexOf(searchingByName) !== -1) {
            insertStudent (undefined, searchingByName);
        }
    }
}

const newDiaryMovefnc = (event) => {
    event.preventDefault();
    const name_ch = chooseName.value;
        if (name_ch) {
            if (exist_toggle === true) {
                for (let value of studentListObj.data) {
                    if (value.name === name_ch) {
                        studentId = value._id;
                    }
                }
                if (chooseDate.value) {
                    diaryDate = chooseDate.value;
                    location.href="new/"+studentId+"/"+diaryDate+"?name="+chooseName.value;
                }        
            } else if (exist_toggle === false) {
                for (let value of studentListObj.data) {
                    if (value.name === name_ch) {
                        for (let diary of value.lessonDiary) {
                            console.log(diary.date);
                            const diary_day = diary.date.split("T",1)[0]
                            if (chooseDate.value === diary_day) {
                                location.href="edit/"+diary._id;
                            }
                        }
                    }
                }
            } 
        } else {
            alert("대상을 지정하세요");
        }
    }

const removeListfnc = () => {
    while (studentList.firstChild) {
        studentList.removeChild(studentList.firstChild);
    }
}

const checkDiary = (name, diary) => {
    const date = chooseDate.value;
    for (let diary_unit in diary) {
        const today = diary[diary_unit].date.split("T", 1)[0];
        if (date === today) {
            return `<li>${name}</li><i class="fas fa-check"></i>`;
        }
    }
    return `<li>${name}</li><i class="fas fa-plus"></i>`;
}

const changeStudentOfDate = () => {
    selectDay.value="전체요일";
    insertStudent('전체요일', undefined);
}

const init = () => {
    getStudent();
    selectDay.addEventListener("change", changeStudentList);
    searchName.addEventListener("keyup", searchNamefnc);
    newDiarybtn.addEventListener("click", newDiaryMovefnc);
    chooseDate.addEventListener("change", changeStudentOfDate);
    autoDate();
    checkDiary();
}

if (lessonClass) {
    init();
}
