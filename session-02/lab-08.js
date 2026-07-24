console.log("Trước khi khai bai báo var message:" + message);

var message = "Hello";
console.log("Sau khi khai bai báo var message:" + message);

function testScope() {
  var localVariable = "Biến nằm trong hàm";
  console.log("Gọi biền từ bên trong hàm " + localVariable);
}
testScope();

console.log("Gọi biến từ bên ngoài hàm" + localVariable);
