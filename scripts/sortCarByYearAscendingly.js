function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  //menggunakan bubble sort

  // //melakukan perulangan sepanjang array result
  // for (let i = 0; i < result.length; i++) {
  // //melakukan perulangan untuk mengakses nilai array result
  //   for (let j = 0; j < result.length - 1; j++) {
  // //mengecek apakah nilai index selanjutnya lebih besar dari nilai index sekarang
  //     if (result[j].year > result[j + 1].year) {
  // //jika benar maka nilai index sekarang disimpan kedalam variable temp(temporary)
  //       let temp = result[j];
  // //selanjutnya memasukan nilai index selanjutnya ke dalam index sekarang
  //       result[j] = result[j + 1];
  // //selanjutnya memasukan nilai yang ada pada temp ke dalam index selanjutnya
  //       result[j + 1] = temp;
  //     }
  //   }
  // }
  // console.table(result);

  // Rubah code ini dengan array hasil sorting secara ascending

  // return result;
  //menggunakan function sort()
  const sorted = result.sort((firstCars, secondCars) => {
    if (firstCars.year < secondCars.year) return -1;
    if (firstCars.year > secondCars.year) return 1;
    return 0;
  });
  console.table(sorted);
  return sorted;
}
