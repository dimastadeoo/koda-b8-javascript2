exports.hitungNilai = (input)=>{
  let i = 0;
  let min = input[0];
  let max = input[0];
  let total = 0;
  if (!(Array.isArray(input))){
    throw new Error("parameter must be array");
  }
  if (input.length === 0){
    throw new Error("array parameters value cannot be empty");
  }
  const cekarr = input.every(item => typeof item === 'number' && Number.isFinite(item));
  if(!cekarr){
    throw new Error("array parameters value all must be number");
  }
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
    const average = total / input.length
    return {min, max, average}

};