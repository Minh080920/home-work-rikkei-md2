const ADMIN_USER = "admin";
const ADMIN_PASS = "123456";

let account = prompt("Tài khoản");
let password = prompt("Mật khẩu");

if (account === ADMIN_USER && password === ADMIN_PASS) {
  alert("Đăng nhập thành công");
  console.log("Đăng nhập thành công");
} else {
  alert("Đăng nhập không thành công");
  console.log("Đăng nhập không thành công , sai tài khoản hoặc mật khẩu");
}
