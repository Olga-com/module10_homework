let arr = ["красный", "желтый", "зеленый", "фиолетовый", "белый"];

function hasTwins(array){
  return array.length !== new Set(array).size;
}