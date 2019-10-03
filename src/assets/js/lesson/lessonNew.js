const lesson_new_form = document.getElementById("lesson_newForm_js");
const test_insert_btn = document.getElementById("test_insert_js");
const addUnit_btn = document.getElementById("add_unit_js");

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

let test_unit_form = `
                     <label>학습단원 : </label>
                     <input type="text", name="unit"></input>
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

const addUnitfn = (event) => {
  event.preventDefault();
  const unit_form = document.getElementsByClassName('form__study-unit')[0];
  let test_unit_element = document.createElement("div");
  test_unit_element.innerHTML = test_unit_form;
  unit_form.append(test_unit_element);
}

const init = () => {
    test_insert_btn.addEventListener("click", insertTest);
    addUnit_btn.addEventListener("click", addUnitfn);
};

if (lesson_new_form) {
    init();
}