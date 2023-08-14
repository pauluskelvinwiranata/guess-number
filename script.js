var message1 = document.getElementById("msg1");
var message2 = document.getElementById("msg2");
var message3 = document.getElementById("msg3");

var jawaban = Math.floor(Math.random() * 100) + 1;
var total_tebakan = 0;
var angka_tebakan = [];

function guess() {
  var tebakan_user = document.getElementById("guess").value;
  if (tebakan_user < 1 || tebakan_user > 100) {
    alert("Harap masukkan angka dari 1 hingga 100");
  } else {
    angka_tebakan.push(tebakan_user);
    total_tebakan += 1;

    if (tebakan_user < jawaban) {
      message1.textContent = "Tebakan anda masih rendah";
      message2.textContent = "Total tebakan : " + total_tebakan;
      message3.textContent = "Tebakan anda : " + angka_tebakan;
    } else if (tebakan_user > jawaban) {
      message1.textContent = "Tebakan anda terlalu besar";
      message2.textContent = "Total tebakan : " + total_tebakan;
      message3.textContent = "Tebakan anda : " + angka_tebakan;
    } else if (tebakan_user == jawaban) {
      message1.textContent = "Hore anda benar";
      message2.textContent = "Angkanya adalah : " + jawaban;
      message3.textContent = "Anda menebak dalam " + total_tebakan + " tebakan";
    }
  }
}


