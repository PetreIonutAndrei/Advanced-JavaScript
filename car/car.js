function Car(model, year, mileage, consumption){ // 1.in js numele clasei (Car) este si constructorul;
  this.model = model;
  if (year < 1808) {
    throw 'Invalid year(please read automobile history)';
  }
  this.year = year;
  if (mileage < 0) {
    throw 'Mileage must pe a positive number';
  }

  this.mileage = mileage;
  if(consumption < 3) {
    throw 'Consumtion must be higher or equal to 3';
  }
  this.consumption = consumption;


//metoda
  this.drive = function (distance) {
    this.mileage += distance;
  }
  //metoda ("Metodele sunt tot un fel de proprietati ale obiectului")

}

var fiat = new Car ('Fiat', 1957, 100000, 10); //instantierea
fiat.drive(100);
fiat.drive(50);

console.log(fiat);

Car.prototype.fuel = function(quantity) { //s-a adaugat o metoda
  this.fuelVolume += quantity;
}
Car.prototype.fuelVolume = 0; //s-a adaugat o proprietate

fiat.fuel(40);

console.log(fiat);
