function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  //melakukan perulangan untuk mengakses array object
  for (let i = 0; i < cars.length; i++) {
    //mengecek nilai dari avaible bernilai true
    if (cars[i].available === true) {
      //memasukan hasil ke dalam array result
      result.push(cars[i]);
    }
  }

  console.log(result);
  console.table(result);
  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
