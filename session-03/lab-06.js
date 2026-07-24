// hình chữ nhật
let chieuDai = 4;
let chieuRong = 8;
let result = "";
for (let i = 1; i <= chieuDai; i++) {
  let hang = "";
  for (let j = 1; j <= chieuRong; j++) {
    hang += "*";
  }
  result += hang + "\n";
}
console.log(result);

// Hình tam giác
let soHang = 5;
let output = "";

for (let i = 1; i <= soHang; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "*";
  }
  output += line + "\n";
}
console.log(output);

// Hình tam giác ngược
let soDong = 5;
let ketQua = "";

for (let i = 1; i <= soDong; i++) {
  let line = "";
  for (let j = 1; j <= soDong - i + 1; j++) {
    line += "*";
  }
  ketQua += line + "\n";
}
console.log(ketQua);

// Tam giác vuông lệch phải

let clo = 5;
let total = "";

for (let i = 1; i <= clo; i++) {
  let line = "";
  for (let space = 1; space <= clo - i; space++) {
    line += " ";
  }
  for (let j = 1; j <= i; j++) {
    line += "*";
  }
  total += line + "\n";
}
console.log(total);

// Tam giác cân

let hangTamGiac = 5;
let amount = "";

for (let i = 1; i <= hangTamGiac; i++) {
  let line = "";
  for (let j = 1; j <= hangTamGiac - i; j++) {
    line += ".";
  }
  for (let x = 1; x <= 2 * i - 1; x++) {
    line += "*";
  }
  amount += line + "\n";
}
console.log(amount);
