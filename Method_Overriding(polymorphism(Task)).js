
// Method Overriding with singe Inheritance.

// class Bird{
//     sound(){
//         console.log("birds make sound");
//     }
// }

// class Kukoo extends Bird{
//     sound(){
//         console.log("Kukoo sounds : Kooo Kooo")
//     }
// }

// let generalBird = new Bird();
// generalBird.sound();

// let kukoo = new Kukoo();
// kukoo.sound();

// Method Overriding with multilevel Inheritance.
// Multilevel Inheritance: Method Overriding
// class Vehicle {
//     start() {
//         console.log("Vehicle started with basic manual key");
//     }
// }

// class Car extends Vehicle {
//     start() { // Overriding Vehicle
//         super.start();
//         console.log("Car ignition turned on");
//     }
// }

// class ElectricCar extends Car {
//     start() { // Overriding Car
//         super.start();
//         console.log("Electric car started silently with push-button");
//     }
// }

// let tesla = new ElectricCar();
// tesla.start();

// Hierarchical Inheritance: Method Overriding
class Notification {
    send() {
        console.log("Sending a general alert");
    }
}

class EmailNotification extends Notification {
    send() { // Overriding Notification
        console.log("Sending email alert to inbox");
    }
}

class SMSNotification extends Notification {
    send() { // Overriding Notification
        console.log("Sending SMS text message to phone");
    }
}

// Child 1 overriding send()
let email = new EmailNotification();
email.send();

// Child 2 overriding send()
let sms = new SMSNotification();
sms.send();