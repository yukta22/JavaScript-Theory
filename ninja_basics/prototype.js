function Cart(){
	this.items = [];

}

Cart.prototype.addItem = function(name, price){
  this.items.push(
    {
     name:name,
     price:price  
    }
   );
}


Cart.prototype.total = function(){
  return this.items.reduce(function(a,b){
    return a+b.price;
  },0);
}

cart = new Cart()
cart.addItem("Bag1",24)
cart.addItem("Bag2",26)

total_price = cart.total()
console.log(total_price)



var sum = [2,3,4].reduce(function(a,b){
  return a+b
},0);

console.log(sum);


module.exports = Cart;