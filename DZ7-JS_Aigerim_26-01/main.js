// ЗАДАЧА 1

// class Cars {
//     constructor (options) {
//         this.model = options.model
//         this.color = options.color
//         this.wheels = options.wheels
//     }

//     start() {
//         console.log("Машина заведена")
//     }
// }

//     class Car1 extends Cars {
//     constructor(options) {
//         super(options);
//         this.speed = options.speed
//     }
// }

//     class Car2 extends Cars {
//         constructor(options) {
//         super(options);
//         this.carAccident = options.carAccident
//     }
// }

//     class Car3 extends Cars {
//         constructor(options) {
//         super(options);
//         this.engine = options.engine
//     }
// }

//     const car1 = new Car1({
//         model: 'Ferrari',
//         color: 'red',
//         wheels: 4,
//         speed: 300
//     })

//     const car2 = new Car2({
//         model: 'BMW',
//         color: 'black',
//         wheels: 4,
//         carAccident: 0
//     })

//     const car3 = new Car3({
//         model: 'Tesla',
//         color: 'white',
//         wheels: 4,
//         engine: 'electrical'
//     })

//     car1.start()
//     car2.start()
//     car3.start()


// ЗАДАЧА 2
//  СПОСОБ 1 
// class TrafficLight {
//     constructor() {
//         this.lights = document.querySelectorAll(".light");
//     }

//     changeColor() {
//         const user = prompt("Введите цвет:").toLowerCase().trim();
    
//         this.lights.forEach(light => {
//             light.style.backgroundColor = "gray";
//             light.querySelector(".text").innerHTML = "";
//         });

//         if (user === "красный") {
//             const redLight = document.querySelector(".red");
//             redLight.style.backgroundColor = "red";
//             redLight.querySelector(".text").innerHTML = "STOP";
//         } else if (user === "желтый") {
//             const yellowLight = document.querySelector(".yellow");
//             yellowLight.style.backgroundColor = "yellow";
//             yellowLight.querySelector(".text").innerHTML = "WAIT";
//         } else if (user === "зеленый") {
//             const greenLight = document.querySelector(".green");
//             greenLight.style.backgroundColor = "green";
//             greenLight.querySelector(".text").innerHTML = "GO";
//         } else {
//             alert("Неверный ввод!");
//         }
//     }
// }

// const trafficLight = new TrafficLight();
// trafficLight.changeColor();

//  СПОСОБ 2 

// class TrafficLight {
//     constructor() {
//         this.lights = document.querySelectorAll(".light")
//     }

//     changeColor() {
//         const user = prompt("Введите цвет:").toLowerCase().trim()

//         this.lights.forEach(light => {
//             light.style.backgroundColor = "gray"
//             light.querySelector(".text").innerHTML = ""
//         })

//     switch (user) {
//         case "красный":
//             const redLight = document.querySelector(".red")
//             redLight.style.backgroundColor = "red"
//             redLight.querySelector(".text").innerHTML = "STOP"
//             break
//         case "желтый":
//             const yellowLight = document.querySelector(".yellow")
//             yellowLight.style.backgroundColor = "yellow"
//             yellowLight.querySelector(".text").innerHTML = "WAIT"
//             break
//         case "зеленый":
//             const greenLight = document.querySelector(".green")
//             greenLight.style.backgroundColor = "green"
//             greenLight.querySelector(".text").innerHTML = "GO"
//             break
//         default:
//             alert("Неверный ввод!")
//         }
//     }
// }

// const trafficLight = new TrafficLight()
// trafficLight.changeColor()