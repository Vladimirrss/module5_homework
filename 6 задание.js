let arr = ["Окно", "Цветок", "Телевизор", "Пульт", "Книга", "Стена", "Пульт"];

function hasTwins(array){
  return array.length !== new Set(array).size;
}
