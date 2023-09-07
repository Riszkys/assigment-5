document.getElementById("btnsubmit").addEventListener("click", function () {
  var nama = document.getElementById("input_nama").value;
  var role = document.getElementById("input_role").value;
  var availability = document.getElementById("input_available").value;
  var age = document.getElementById("input_umur").value;
  var lokasi = document.getElementById("input_lokasi").value;
  var pengalaman = document.getElementById("input_pengalaman").value;
  var email = document.getElementById("input_alamat").value;
  var inputGambar = document.getElementById("input_profil").files[0];

  if (inputGambar) {
    var profilImage = document.getElementById("profil_image");
    profilImage.src = URL.createObjectURL(inputGambar);
    var formData = new FormData();
    formData.append("input_gambar", inputGambar);
  }

  document.getElementById("nama").textContent = nama;
  document.getElementById("role").textContent = role;
  document.getElementById("available").textContent = availability;
  document.getElementById("usia").textContent = age + " Tahun";
  document.getElementById("lokasi").textContent = lokasi;
  document.getElementById("pengalaman").textContent = pengalaman + " Tahun";
  document.getElementById("email").textContent = email;

  var containerForm = document.getElementById("container_form");
  containerForm.parentNode.removeChild(containerForm);
});
