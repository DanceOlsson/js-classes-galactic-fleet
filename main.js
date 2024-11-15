class SpaceShip {
    constructor(shipName, maxSpeed, crewCapacity) {
        this.shipName = shipName;
        this.maxSpeed = maxSpeed;
        this.crewCapacity = crewCapacity;
    }


    launch() {
        console.log(`${this.shipName} has launched`);
    }
}

class CargoShip extends SpaceShip {
    constructor(shipName, maxSpeed, crewCapacity, cargoCapacity) {
        super(shipName, maxSpeed, crewCapacity);
        this.cargoCapacity = cargoCapacity;
    }

    loadCargo() {
        console.log(`${this.shipName} is loading the cargo`)
    }

}

class PassengerShip extends SpaceShip {
    
}