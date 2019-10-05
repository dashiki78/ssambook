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
const LESSON_EDIT = "/edit/:lesson_id";
const LESSON_SEARCH = "/search";
const LESSON_DELETE = "/delete/:lesson_id";

// api
const API = "/api";
const STUDENT_GET = "/getstudent";
const STUDY_UNIT_GET = "/getstudyunit";
const STUDENT_NAME_GET = "/getstudentname";
const LESSON_READ = "/list/:start_date/:end_date/:student_id";

// 관리자
const ADMIN = "/admin";
const STUDYUNIT_INSERT = "/insertunit"

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    // 유저
    users: USERS,
    userDetail: USER_DETAIL,
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    // 학생
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
    // 학습일지
    lesson: LESSON,
    lessonConfig: LESSON_CONFIG,
    lessonNew: LESSON_NEW,
    lessonEdit: (lesson_id) => {
        if (lesson_id) {
            return `/edit/${lesson_id}`;
        } else {
            return LESSON_EDIT;
        }
    },
    lessonSearch: LESSON_SEARCH,
    // api
    api: API,
    getStudent: STUDENT_GET,
    getStudyUnit: STUDY_UNIT_GET,
    getStudentName: STUDENT_NAME_GET,
    getLessonDiaryList: LESSON_READ,
    // 관리자
    admin: ADMIN,
    insertUnit: STUDYUNIT_INSERT
};

export default routes;