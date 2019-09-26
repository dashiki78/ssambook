// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

// Users
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// 학생관리
const STUDENTS = "/students";
const STUDENTS_LIST = "/list";
const STUDENTS_EDIT = "/edit/:student_id";
const STUDENTS_NEW = "/new";
const STUDENTS_DELETE = "/delete/:student_id"

// 수업관리
const LESSON = "/lesson";
const LESSON_CONFIG ="/config";
const LESSON_NEW = "/new/:student_id/:date";
const LESSON_LIST = "/list/:start_date/:end_date";
const LESSON_EDIT = "/edit/:lesson_id";
const LESSON_DELETE = "/delete/:lesson_id";

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,

    users: USERS,
    userDetail: USER_DETAIL,
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    
    students: STUDENTS,
    studentsNew: STUDENTS_NEW,
    studentsList: STUDENTS_LIST,
    studentsEdit: (student_id) => {
        console.log(student_id);
        if (student_id) {
            return `/edit/${student_id}`;
        } else {
            return STUDENTS_EDIT;
        }
    },
    studentsDelete: (student_id) => {
        if (student_id) {
            return `/delete/${student_id}`;
        } else {
            return STUDENTS_DELETE;
        }
    },
    lesson: LESSON,
    lessonConfig: LESSON_CONFIG
};

export default routes;