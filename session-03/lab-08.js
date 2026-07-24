let max = 50;
let tong = 0;
let ketQua = "";

for (let i = 1; i <= max; i++) {
  if (i % 5 == 0) {
    continue;
  }
  ketQua += i + " ";
  tong += i;
  if (tong > 200) {
    break;
  }
}
console.log("Các số đã in:");
console.log(ketQua);

console.log("Tổng =", tong);
