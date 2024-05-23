
// Q:45 Cars: Write a function that stores information about a car in a Object. The function should 
// always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword 
// arguments. Call the function with the required information and two other name-value pairs, 
// such as a color or an optional feature. Print the Object that’s returned to make sure all 
// the information was stored correctly.

type Car = {
    manufacturer: string;
    model: string;
    [key: string]: any;
  };
  
  function create_car(manufacturer: string, model: string, additionalInfo: { [key: string]: any } = {}): Car {
    return {
      manufacturer,
      model,
      ...additionalInfo,
    };
  }
  
  // Call the function with required information and additional key-value pairs
  let car1 = create_car("Toyota", "Camry", { color: "Blue", year: 2020 });
  let car2 = create_car("Tesla", "Model S", { color: "Red", autopilot: true });
  let car3 = create_car("Ford", "Mustang", { color: "Black", transmission: "Manual" });
  
  // Print the objects to make sure all the information is stored correctly
  console.log(car1);
  console.log(car2);
  console.log(car3);
  








