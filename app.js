// Ambil elemen
const btn = document.getElementById("btnHitung");
const btnReset = document.getElementById("btnReset");
const outputBox = document.getElementById("hasil");

// Fungsi hitung
const hitungTotal = () => {
  const nama = document.getElementById("namaBarang").value;
  const harga = Number(document.getElementById("hargaBarang").value);
  const jumlah = Number(document.getElementById("jumlahBeli").value);

  // Validasi
  if (nama === "" || harga <= 0 || jumlah <= 0) {
    outputBox.innerHTML = "<span class='text-danger'>Mohon lengkapi data dengan benar!</span>";
    outputBox.style.backgroundColor = "#e9ecef";
    return;
  }

  // Perhitungan
  const subtotal = harga * jumlah;
  const pajak = subtotal * 0.11;

  let diskon = 0;
  if (subtotal > 1000000) {
    diskon = subtotal * 0.05;
  }

  const totalBayar = subtotal + pajak - diskon;

  // Warna dinamis
  if (diskon > 0) {
    outputBox.style.backgroundColor = "yellow";
  } else {
    outputBox.style.backgroundColor = "#e9ecef";
  }

  // Output
  outputBox.innerHTML = `
    <div class="text-success">Perhitungan Berhasil:</div>
    <hr>
    Item: <strong>${nama}</strong> <br>
    Subtotal: Rp ${subtotal.toLocaleString('id-ID')} <br>
    Pajak (11%): Rp ${pajak.toLocaleString('id-ID')} <br>
    Diskon: Rp ${diskon.toLocaleString('id-ID')} <br>
    <hr>
    <strong>Total Bayar: Rp ${totalBayar.toLocaleString('id-ID')}</strong>
  `;

  console.log(`Transaksi ${nama} berhasil diproses.`);
};

// Fungsi reset
const resetForm = () => {
  document.getElementById("namaBarang").value = "";
  document.getElementById("hargaBarang").value = "";
  document.getElementById("jumlahBeli").value = "";

  outputBox.innerHTML = "<p id='labelHasil'>Hasil perhitungan akan muncul di sini.</p>";
  outputBox.style.backgroundColor = "#e9ecef";
};

// Event
btn.addEventListener("click", hitungTotal);
btnReset.addEventListener("click", resetForm);