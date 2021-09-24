interface Reportable {
  summary(): string; 
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const drinks = {
    color: 'brown', 
    carbonated: true, 
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
};

// WITHOUT INTERFACE
// const printVehicle = (vehicle: { name: string, year: number, broken:boolean }): void => {
//     console.log(`Name: ${vehicle.name}`);
//     console.log(`Year: ${vehicle.year}`);
//     console.log(`Broken? ${vehicle.broken}`);
// };

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drinks);

