const assert = require("node:assert/strict");
const {describe, it} = require(`node:test`);
const { hitungNilai } = require("./calc");

describe("Calculation process", ()=>{
  it("should return funtion is a object", ()=>{
    const nilai = [1,4,8,7,8];
    assert.equal(typeof hitungNilai(nilai), "object");
  });
  it("should Error when parameter array values is empthy", ()=>{
    const nilai = [];
    assert.throws(()=> hitungNilai(nilai), {message:"array parameters value cannot be empty"});
  });
  it("should Error when parameter array values is not number", ()=>{
    const nilai = [3,6,"7"];
    assert.throws(()=> hitungNilai(nilai), {message:"array parameters value all must be number"});
  });
  it("should Error when parameter not array", ()=>{
    const nilai = 5;
    assert.throws(()=> hitungNilai(nilai), {message:"parameter must be array"});
  });
  it("should return min max average", ()=>{
    const nilai =[1,2,3];
    assert.equal(hitungNilai(nilai).average, 2);
    assert.equal(hitungNilai(nilai).min, 1);
    assert.equal(hitungNilai(nilai).max, 3);
  });

});