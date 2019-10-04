import axio from "axios";

const lesson_new_form = document.getElementById("lesson_newForm_js");
const test_insert_btn = document.getElementById("test_insert_js");
const get_unit_btn = document.getElementById("get_unit_modal_js");
const unit_textarea = document.getElementById("study_unit_input_js");

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
    let test_element = document.createElement("div");
    test_element.className = "test__form";
    test_element.innerHTML = test_form;
    test.appendChild(test_element);
};

const insertUnit = (event) => {
  const select_unit = event.target.innerText;
  unit_textarea.value += select_unit+"\r\n";
}

const getUnitList = async (event) => {
  const grade = event.target.value;
  let study_unit_list = {};
  try {
    const studyUnitObj = await axio.get(`/api/getstudyunit?grade=${grade}`);
    study_unit_list = studyUnitObj.data;
  } catch (error) {
    console.log(error);
  }
  const unit_list = document.getElementById("unit_list_js");
  for (let i in study_unit_list) {
    let unit_li = document.createElement("li");
    unit_li.innerText = `${grade} ${study_unit_list[i].title}`;
    unit_li.addEventListener("click", insertUnit);
    unit_list.appendChild(unit_li);
  }
}

const init = () => {
    test_insert_btn.addEventListener("click", insertTest);
    get_unit_btn.addEventListener("change", getUnitList);
};

if (lesson_new_form) {
    init();
}