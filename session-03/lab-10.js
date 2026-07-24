let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessed = false;

for (let i = 1; i <= 5; i++) {
  let guess = Number(prompt(`Lần ${i}: Nhập số bạn đoán (1 - 100)`));
  if (guess === randomNumber) {
    alert("Chúc mừng bạn");
    guessed = true;
    break;
  } else if (guess < randomNumber) {
    alert("Số bạn đoán quá nhỏ");
  } else {
    alert("Số bạn đoán quá Lớn");
  }
}

if (!guessed) {
  alert("Game Over");
  alert("Đáp án là " + randomNumber);
}
