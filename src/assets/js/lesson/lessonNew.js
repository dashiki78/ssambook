const lesson_new_form = document.getElementById("lesson_newForm_js");
const test_insert_btn = document.getElementById("test_insert_js");
const select_unit_btn = document.getElementById("select_unit_js");

let test_form = `
                <div class="form-group row test">
                   <label>데스트 이름 : </label>
                   <input type="text" name="test_title"></input>
                </div>
                <div class="form-group row">
                  <label>테스트 점수 : </label>
                  <input type="number" name="test_score" min="0" max="100" value="100"></input>
                </div>
                <div class="form-group row">
                  <label>테스트 비고 : </label>
                  <textarea cols="50" rows="5" name="test_note"></textarea>
                </div>
                  `;

const insertTest = (event) => {
    event.preventDefault();
    const test = document.getElementsByClassName('test')[0];
    alert("테스트를 입력합니다");
    console.log(test);
    let test_element = document.createElement("div");
    test_element.className = "test__form";
    test_element.innerHTML = test_form;
    test.appendChild(test_element);
};

const selectUnitList = (event) => {
    event.preventDefault();
    alert("hohoho");
};

const init = () => {
    test_insert_btn.addEventListener("click", insertTest);
    select_unit_btn.addEventListener("click", selectUnitList);
};

if (lesson_new_form) {
    init();
}