// MajoritySweeper adalah function yang dibuat untuk mengeliminasi nilai array yang 
// sering muncul (mayoritas) dari daftar nilai array 

// [EXAMPLE]
// INPUT: [9, 1, 1, 1, 1, 1, 3, 3, 4, 2, 5, 5, 5]
// OUTPUT: [9, 3, 3, 4, 2, 5, 5, 5]

// INPUT: [22, 22, 100, 100, 100, 2000]
// OUTPUT: [22, 22, 2000]

// INPUT: [2, 2]
// OUTPUT: []

// INPUT:[4, 4, 4, 1, 1, 1, 2, 2]
// jika nilai minoritas/mayoritas sama, maka nilai yang digunakan yang pertama
// OUTPUT: [1, 1, 1, 2, 2]

function MajoritySweeper(arr) {
    let result = [arr[0]]; // MENGINISIAL ELEMENT PERTAMA ARRAY "ARR"
    for (let i = 1; i < arr.length; i++) { //FUNCTION LOOPING ...
        if (arr[i] !== arr[i - 1]) { //... JIKA ELEMENT ARRAY BERBEDA DARI ARRAY SEBELUMNYA ...
            result.push(arr[i]); //... MAKA PUSH (TIDAK DIBACA) LANGSUNG KE ELEMENT SELANJUTNYA
        }
    }
    return result;
}

console.log(MajoritySweeper([9, 1, 1, 1, 1, 1, 3, 3, 4, 2, 5, 5, 5])) // [ 9, 3, 3, 4, 2, 5, 5, 5 ]
console.log(MajoritySweeper([22, 22, 100, 100, 100, 2000])) // [ 22, 22, 2000 ]
console.log(MajoritySweeper([2, 2])) // []
console.log(MajoritySweeper([4, 4, 4, 1, 1, 1, 2, 2])) // [ 1, 1, 1, 2, 2 ]