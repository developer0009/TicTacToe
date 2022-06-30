const elements = document.getElementsByClassName("cell");
let count = 1;
let clickCheck = 0;

for (let element of elements) {
  element.addEventListener("click", (evt) => {
    evt.target.style.backgroundColor = "wheat";

    if (count % 2 !== 0) {
      if (evt.target.innerHTML == "") {
        console.log("inner thml");
        evt.target.innerHTML = "X";
      } else {
        checkCount(count) ? (count = 1) : "";
        clickCheck = 1;
      }
    } else {
      if (evt.target.innerHTML == "") evt.target.innerHTML = "O";
      else {
        checkCount(count) ? (count = 1) : "";
        clickCheck = 1;
      }
    }
    if (clickCheck == 0) {
      count++;
    }
    clickCheck = 0;
    if (checkCombinations()) {
      //   reset();
      count = 1;
    }
  });
}
function checkCombinations() {
  console.log("first combi");
  if (
    checkDivs("1", "2", "3") ||
    checkDivs("3", "6", "9") ||
    checkDivs("1", "5", "9") ||
    checkDivs("1", "4", "7") ||
    checkDivs("7", "8", "9") ||
    checkDivs("2", "5", "8")
  ) {
    setTimeout(() => {
      alert("winner");
      reset();
    }, 300);
    return true;
  }
}

function checkDivs(one, two, three) {
  if (
    getData(one) != "" &&
    getData(two) != "" &&
    getData(three) != "" &&
    getData(one) === getData(two) &&
    getData(two) === getData(three)
  ) {
    return true;
  }
}

function getData(className) {
  const element = document.getElementsByClassName(className)[0];
  return element.innerHTML;
}
function reset() {
  for (let element of elements) {
    element.innerHTML = "";
    element.style.backgroundColor = "black";
  }
}
function checkCount(count) {
  console.log("draw");
  console.log(count);
  if (count === 10) {
    alert("Draw match");
    for (let element of elements) {
      element.innerHTML = "";
      element.style.backgroundColor = "black";
    }
    return true;
  }
}
