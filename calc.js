/**
 * @typedef {object} processData 
 * @property {number} min smallest value of the array
 * @property {number} max largest value of the array
 * @property {number} average the average value of the array
 */

/**
 * 
 * @param {Array.<number>} input An array containing numbers.
 * @returns {processData} an object with min, max, and average
 */


exports.hitungNilai = (input)=>{
  let i = 0;
  let min = 9999999999999;
  let max = -999999999999;
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
  const average = total / input.length;
  return {min, max, average};

};