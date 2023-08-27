//TAHUN KABISAT
//Buatkan Algoritma untuk menentukan tahun yang di input merupakan tahun kabisat atau bukan
function tahunKabisat(tahun) {
    if ((tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0) { //ALGORITMA: JIKA TAHUN HABIS DIBAGI 4 DAN TIDAK HABIS DIBAGI 100 ATAU HABIS DIBAGI 400
        return true; //JIKA KONDISI TERPENUHI MAKA TRUE
    } else { //JIKA KONDISI TIDAK TERPENUHI ...
        return false; //... MAKA FALSE
    }
}

// Test cases
console.log(tahunKabisat(2000)); // TRUE