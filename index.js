const angka = [3,4,8,10,45,23,17,15];

function hitungNilai(input){
  let i = 0;
  let min = input[0];
  let max = input[0];
  let total = 0;
  if (!(Array.isArray(input))){
    throw new Error("Input harus berupa array");
  }
  const cekarr = input.every(item => typeof item === 'number' && Number.isFinite(item));
  if(!cekarr){
    throw new Error("nilai semua indeks dalam array harus berupa number");
  }
  try{
    while (i < input.length){
      if (input[i] > max) {
        max = input[i];       
      }

      if (input[i] < min){
        min = input[i];       
      }
      total += input[i];

      i++;
    }
    console.log(`nilai terbesar array: ${max}`);
    console.log(`nilai terkecil dari array: ${min}`);
    console.log(`rata rata nilai array: ${total/angka.length}`);
  }catch(err){
    console.error("Pesan Eror: ", err);
    
  }

}

hitungNilai(angka);