// Создать цикл на 10 итераций. На каждой итерации если i четное, то вывести в консоль слово Fiz, если i не четное, то вывести в консоль слово Buz, если i кротное цифре 3, то вывести FizBuz.

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0 && i % 3 === 0) {
    console.log("FizBuz");
  } else if (i % 3 === 0) {
    console.log("FizBuz");
  } else if (i % 2 === 0) {
    console.log("Fiz");
  } else if (i % 2 !== 0) {
    console.log("Buz");
  }
}
