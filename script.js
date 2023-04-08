// Tambahkan kode JavaScript kalian di file ini
function handleGetFormData() {
  // mengambil referensi elemen input pada form
  const nameValue = document.getElementById("name").value;
  const emailValue = document.getElementById("email").value;
  const cityValue = document.getElementById("city").value;
  const zipcodeValue = document.getElementById("zip-code").value;
  const statusValue = document.getElementById("status").checked;

  // membuat objek dataForm
  const dataForm = {
      name: nameValue,
      email: emailValue,
      city: cityValue,
      zipCode: zipcodeValue,
      status: statusValue
   };

   // mengembalikan nilai objek dataForm
   return dataForm;
}

const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
e.preventDefault();

const data = handleGetFormData();
// const valid = validateFormData(data);
// const submitt = submit(data);
// const validNumber = isNumber(data.zipCode);
// const checkbox = checkboxIsChecked();

// console.log(checkbox);
console.log(data);
// console.log(valid);
// console.log(submitt);
// console.log(validNumber);
});

function isNumber(str) {
for (let i = 0; i < str.length; i++) {
if (isNaN(parseInt(str[i]))) {
return false;
}
}
return true;
}

function checkboxIsChecked() {
const checkbox = document.getElementById("status");
if (checkbox.checked) {
return true;
} else {
return false;
}
}

function validateFormData(formData) {
  // Cek jika objek formData bernilai null
  
  if (formData.name !== '' && formData.city !== '' && formData.email !== '' && formData.zipCode !== '') {
    if(isNumber(formData.zipCode)){
      if(checkboxIsChecked()){
        return true;
      } return false;
    }
  }else{
    return false;
  }
}


function submit(event) {
  // event.preventDefault(); // untuk mencegah halaman di-refresh ketika form disubmit
  
  if (validateFormData(event)) {
    // jika validasi form berhasil, hapus teks di dalam div dengan id warning
    document.getElementById("warning").innerHTML = "";
    
    // tambahkan kode Anda di sini untuk mengirim data ke server atau melakukan tindakan lainnya
  } else {
    // jika validasi form gagal, tampilkan pesan kesalahan di dalam div dengan id warning
    document.getElementById("warning").innerHTML = "Periksa form anda sekali lagi";
  }
}

document.getElementById("form-id").addEventListener("submit", function(event) {
  event.preventDefault(); // mencegah halaman di-refresh ketika form disubmit
  
  submit(handleGetFormData()); // memanggil fungsi submit
});
