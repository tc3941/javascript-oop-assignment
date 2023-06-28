// Write a Car class in Javascript that takes the following properties as parameters and sets them in a constructor:
// 1. Make
// 2. Model
// 3. Year
// 4. Color
// Finally, make sure to add 4 methods (getMake, getModel, getYear, and getColor) that return the car's respective properties
// (This is called a 'getter' in Object Oriented Programming)
class Car {
  constructor(make, model, year, color) {
    this.make = make
    this.model = model
    this.year = year
    this.color = color
  }

  get getMake() {
    return this.make
  }
  get getModel() {
    return this.model
  }
  get getYear() {
    return this.year
  }
  get getColor() {
    return this.color
  }
}

// If you're stuck, take a look at the example class here for reference: https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/#
