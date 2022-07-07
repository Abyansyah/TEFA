function getjumlah() {
  var hasil;
  var input1;
  var input2;
  input1 = parseInt(document.getElementById('Angka1').value);

  input2 = parseInt(document.getElementById('Angka2').value);
  hasil = input1;

  while (hasil % input2 != 0) {
    hasil = hasil + input1;
  }
  document.getElementById('hasil').value = hasil;
}
