const drink = {
    color: 'brown', 
    carbonated: true, 
    sugar: 40
};

type Drink = [string, boolean, number]; 

// this is what differs a tuple vs an array
// a tuple will always have a consistent order of elements
// rather than defining it in pepsi, we can make a type alias for reusability
const pepsi: [string, boolean, number] = ['brown', true, 40];

// using the type alias
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// tuples are typically only used in CSV files, they arent too useful or used
// that often 

const carSpecs: [number, number] = [400, 3354];

const carStates = {
    horsepower: 400,
    weight: 3354
};