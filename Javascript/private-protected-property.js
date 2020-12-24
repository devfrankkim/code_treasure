// class CoffeeMachine {
//     waterAmount = 0; // the amount of water inside
  
//     constructor(power) {
//       this.power = power;
//       console.log( `Created a coffee-machine, power: ${power}` );
//     }
  
//   }
  
//   // create the coffee machine
//   let coffeeMachine = new CoffeeMachine(100);
  
//   // add water
//   coffeeMachine.waterAmount = 200;




  class CoffeeMachine {
    _waterAmount = 0;
  
    set waterAmount(value) {
      if (value < 0) {
        value = 0;
      }
      this._waterAmount = value;
    }
  
    get waterAmount() {
      return this._waterAmount;
    }
  
    constructor(power) {
      this._power = power;
    }
  
  }
  
  // create the coffee machine
  let coffeeMachine = new CoffeeMachine(100);
  
  // add water
  coffeeMachine.waterAmount = -10; // Error: Negative water

  coffeeMachine; // CoffeeMachine {_waterAmount: 0, _power: 100}



// =========  Read-only “power” =========

  class CoffeeMachine {
    // ...
  
    constructor(power) {
      this._power = power;
    }
  
    get power() {
      return this._power;
    }
  
  }
  
  // create the coffee machine
  let coffeeMachine2 = new CoffeeMachine(100);
  coffeeMachine2; 
  
  console.log(`Power is: ${coffeeMachine2.power}W`); // Power is: 100W
  
  coffeeMachine2.power = 25; // Error (no setter)

  coffeeMachine2; // CoffeeMachine {_power: 100}