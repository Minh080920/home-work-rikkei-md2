let soTienLuong = Number(prompt("Mức thu nhập hàng tháng"));
let doTuoi = Number(prompt("Độ tuổi hiện tại của bạn"));
let badDebtStatus = prompt("Bạn có nợ xấu không? (yes/no)").toLowerCase();

if (
  soTienLuong > 15 &&
  doTuoi >= 18 &&
  doTuoi <= 60 &&
  badDebtStatus === "no"
) {
  alert("Bạn đã đủ điều kiện vay");
} else {
  alert("Bạn không đủ điều kiện vay");
}
