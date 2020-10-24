class Grocery {
  name: string;
  quantity: number;

  constructor(name: string, quantity: number) {
    this.name = name;
    this.quantity = quantity;
  }
}

var groceryList: Grocery[] = [
  {name: 'Bread', quantity: 1},
  {name: 'Cheese', quantity: 4},
  {name: 'Milk', quantity: 1},
  {name: 'Eggs', quantity: 2},
  {name: 'Salad', quantity: 3}
];

let dataToPrint = 'Name -- Quantity</br>'
groceryList.forEach(function (value) {
  dataToPrint += value.name + ' -- ' + value.quantity + '</br>'
}); 

document.body.innerHTML = dataToPrint;
