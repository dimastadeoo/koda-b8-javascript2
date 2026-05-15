const angka = [20,65,43,12,54]

let i = 0
let max = angka[0]
let min = angka[0]
let total = 0

while (i < angka.length){
        if (angka[i] > max) {
            max = angka[i]       
        }

        if (angka[i] < min){
            min = angka[i]       
        }
        total += angka[i]

        i++
}
console.log(`nilai  terbesar array: ${max}`)
console.log(`nilai terkecil dari array: ${min}`)
console.log(`rata rata nilai array: ${total/angka.length}`)
