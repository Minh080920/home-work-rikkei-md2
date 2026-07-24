let number = Number(prompt("Nhập số"));

if (number <= 1) {
  alert(number + " Không phải là số nguyên tố ");
} else {
  let isPrime = true;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  alert(number + " Là số nguyên tố ");
}

if (isPrime) {
  console.log(number + " là số nguyên tố");
} else {
  console.log(number + " không phải là số nguyên tố");
}
