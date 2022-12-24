// Создать функцию, которая выведет в консоль номер этажа и номер подъезда по номеру квартиры.
// Этажей у нас 9, квартир на этаже по 3

const roomsOnFloor = 3;
const floors = 9;
const roomNumber = 17;

let porch = 0;
let floor = 0;

function searchFloor(room) {
  // debugger
  let porchCount = room / (roomsOnFloor * floors);

  if (porchCount < 1) {
    porch = 1;
  } else {
    porch = porchCount - (porchCount % 1);
  }

  floor = (room - (porch * (roomsOnFloor * floors))) / roomsOnFloor;

  console.log(`Porch #${porch}, floor #${floor}`);
}

searchFloor(roomNumber);
