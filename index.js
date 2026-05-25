const {hitungNilai} = require("./calc.js");

try{
  const angka = [3,4,8,10,45,23,17,15];
  hitungNilai(angka);
  const result = hitungNilai(angka);
  console.log(`Nilai Terbesar: ${result.max}`);
  console.log(`Nilai Terkecil: ${result.min}`);
  console.log(`Rata-rata Array: ${result.average}`);
}catch(err){
  console.error(err.message);
}
