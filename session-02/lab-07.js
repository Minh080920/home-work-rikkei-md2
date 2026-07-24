let chuyenCan = 85;
let diemTrungBinh = 6.5;
let coGiayPhepDatBiet = false;

console.log("--- THÔNG TIN SINH VIÊN ---");
console.log("Tỷ lệ chuyên cần:", chuyenCan + "%");
console.log("Điểm trung bình:", diemTrungBinh);
console.log("Có giấy phép đặc biệt không:", coGiayPhepDatBiet);

let duocDuThi = (chuyenCan > 80 && diemTrungBinh >= 5) || coGiayPhepDatBiet;

if (duocDuThi) {
  console.log("Sinh Viên Được Dự Thi");
} else {
  console.log("Sinh Viên Không Đủ Điều Kiện Dự Thi");
}
