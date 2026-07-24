let numA = Number(prompt("Nhập số cần tính: "));
let operator = prompt("Nhập phép tính: +, -, *, /");
let numB = Number(prompt("Nhập số cần tính: "));

let result;
let isValid = true;

if (operator === "+") {
  result = numA + numB;
} else if (operator === "-") {
  result = numA - numB;
} else if (operator === "*") {
  result = numA * numB;
} else if (operator === "/") {
  if (numB === 0) {
    alert("Không thể chia cho số 0!");
    isValid = false;
  } else {
    result = numA / numB;
  }
} else {
  alert("Phép tính không hợp lệ!");
  isValid = false;
}

if (isValid) {
  let outputMessage =
    "Kết quả của " + numA + " " + operator + " " + numB + " là: " + result;
  alert(outputMessage);
}
