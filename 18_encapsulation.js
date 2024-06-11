class Vehicle {
  constructor(id, name, type, brand, price) {
    this._id = id;
    this._name = name;
    this._type = type;
    this._brand = brand;
    this._price = price;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get type() {
    return this._type;
  }

  get type() {
    return this._brand;
  }

  get type() {
    return this._price;
  }

  set setId(id) {
    this._id = id;
  }
  set setName(name) {
    this._name = name;
  }
  set setType(type) {
    this._type = type;
  }
  set setBrand(brand) {
    this._brand = brand;
  }
  set setPrice(price) {
    this._price = price;
  }
}

const kendaraan = new Vehicle(1, "CRV", "sedan", "honda", 1000000);
// console.log(kendaraan.name);
kendaraan.setName='inova'
console.log(kendaraan.name)
console.log(kendaraan)
