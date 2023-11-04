let myFirstVehicle = new Vehicle("Jeep", "Wrangler", 2006);
myFirstVehicle.honk(); // "Beep."
myFirstVehicle.toString(); // "The vehicle is a Jeep Wrangler from 2006."

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep.";
    }

    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

// Cars are a type of vehicle that has 4 wheels; so they can inherit from Vehicle

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

// Motorcycles are a type of vehicle with 2 wheels; so they can inherit from Vehicle

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return "VROOM!!!";
    }
}

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!";
    }
}