class SpaceShip {
    constructor(shipName, maxSpeed, crewCapacity) {
        this.shipName = shipName; // string, name of the ship
        this.maxSpeed = maxSpeed; // number, in light years per hour
        this.crewCapacity = crewCapacity; // number, in crew members
    }


    launch() {
        console.log(`${this.shipName} has launched`);
    }

    static fleet = [];


    static getFleetInfo() {
        console.log(`The Bolson Fleet is the strongest fleet in the galaxy`)
    }
}

class CargoShip extends SpaceShip {
    constructor(shipName, maxSpeed, crewCapacity, cargoCapacity) {
        super(shipName, maxSpeed, crewCapacity);
        this.cargoCapacity = cargoCapacity; // number, in tons
    }

    loadCargo() {
        console.log(`${this.shipName} is loading the cargo`)
    }

}

class PassengerShip extends SpaceShip {
    constructor(shipName, maxSpeed, crewCapacity, passengerCapacity) {
        super(shipName, maxSpeed, crewCapacity);
        this.passengerCapacity = passengerCapacity; // number, in passengers
    }

    boardPassengers() {
        console.log(`${this.shipName} is boarding passengers`);
    }
}

class BattleShip extends SpaceShip {
    constructor(shipName, maxSpeed, crewCapacity, weaponType, shieldStrength) {
        super(shipName, maxSpeed, crewCapacity);
        this.weaponType = weaponType; // string, the type of weapon
        this.shieldStrength = shieldStrength; // number, strength of the shield
    }

    attack() {
        console.log(`${this.shipName} is engaging in attack`);  
    }

    defend() {
        console.log(`${this.shipName} is activating it/'s defense system`);
    }
}

const concord = new PassengerShip("Concord", 100, 50, 1000);
const enterprise = new BattleShip("Enterprise", 100, 50, "Phaser", 100);
const transport = new CargoShip("Transport", 100, 50, 1000);

concord.boardPassengers();
concord.launch();
transport.loadCargo();
SpaceShip.getFleetInfo();
enterprise.attack();
enterprise.defend();
console.log(enterprise);