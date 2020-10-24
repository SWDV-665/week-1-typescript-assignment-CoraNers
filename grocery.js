var Grocery = /** @class */ (function () {
    function Grocery(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
    return Grocery;
}());
var groceryList = [
    { name: 'Bread', quantity: 1 },
    { name: 'Cheese', quantity: 4 },
    { name: 'Milk', quantity: 1 },
    { name: 'Eggs', quantity: 2 },
    { name: 'Salad', quantity: 3 }
];
var dataToPrint = 'Name -- Quantity</br>';
groceryList.forEach(function (value) {
    dataToPrint += value.name + ' -- ' + value.quantity + '</br>';
});
document.body.innerHTML = dataToPrint;
