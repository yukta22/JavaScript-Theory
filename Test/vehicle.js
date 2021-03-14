function Vehicle(brand,model,color,price) {
  this.brand = brand;
  this.model = model;
  this.color = color;
  this.price = price;

  this.vehicleStart = function () {
    console.log(this.model + ' started!');
  }

   this.vehicleStop = function () {
    console.log(this.model + ' stopped!');
  }

}

var Maruti = new Vehicle('Maruti','Alto-100','White',400000);
Maruti.vehicleStart();
Maruti.vehicleStop();

console.log('// ------------------------------');
