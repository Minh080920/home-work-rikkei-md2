let so;

do {
  so = parseInt(prompt("Vui lòng nhập số từ 1 đến 10"));
} while (so < 1 || so > 10);

console.log("bạn đã nhập đúng số " + so);
