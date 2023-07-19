// bài 1: tính tiền lương nhân viên

function tinhTienLuong() {
  var luongNgay = document.getElementById("luong-ngay").value * 1;
  var soNgayLam = document.getElementById("ngay-lam").value * 1;
  var tongTienLuong = luongNgay * soNgayLam;

  document.getElementById(
    "luong-ngay-lam"
  ).innerHTML = `<h3 class="text-dark text-center bg-danger"> Tiền Lương Một Ngày của bạn là: ${luongNgay} VNĐ</h3>`;

  document.getElementById(
    "so-ngay-lam"
  ).innerHTML = `<h3 class="text-dark text-center bg-warning"> Số Ngày Làm của bạn là: ${soNgayLam} Ngày</h3>`;

  document.getElementById(
    "tong-tien-luong"
  ).innerHTML = `<h3 class="text-dark text-center bg-success">Số tiền bạn phải thanh toán: ${tongTienLuong} VNĐ</h3>`;
}

// bài 2: trung bình cộng

function trungBinhCong() {
  var num_1 = document.getElementById("num-1").value * 1;
  var num_2 = document.getElementById("num-2").value * 1;
  var num_3 = document.getElementById("num-3").value * 1;
  var num_4 = document.getElementById("num-4").value * 1;
  var num_5 = document.getElementById("num-5").value * 1;
  var result_tbc = (num_1 + num_2 + num_3 + num_4 + num_5) / 5;
  document.getElementById(
    "return-output-b2"
  ).innerHTML = `<h3 class="text-warning text-center bg-dark"> Gía trị trung bình các số nhập vào của bạn là: ${result_tbc}</h3>`;
}

// bài 3: quy đổi tiền

function dollarExchange() {
  var dollar = document.getElementById("dollar-input").value * 1;
  var tien_Viet = dollar * 23500;
  document.getElementById("return-output-b3").innerHTML =
    tien_Viet.toLocaleString();
}

// bài 4: chu vi và diện tích của hình chữ nhật
function chuVidienTich() {
  var chieuDai = document.getElementById("chieu-dai").value * 1;
  var chieuRong = document.getElementById("chieu-rong").value * 1;
  var chuVi = (chieuDai + chieuRong) * 2;
  var dienTich = chieuDai * chieuRong;

  document.getElementById("return-output-b4-chuvi").innerHTML = chuVi;
  document.getElementById("return-output-b3-dientich").innerHTML = dienTich;
}

// bài 5: tổng hai ký số

function tong2KySo() {
  var soNhapVao = document.getElementById("b5-input").value * 1;
  var hangDonVi = soNhapVao % 10;
  var hangChuc = Math.floor(soNhapVao / 10);
  var result_t2ks = hangChuc + hangDonVi;
  document.getElementById("return-output-b5").innerHTML = result_t2ks;
}
