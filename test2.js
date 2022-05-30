// class Computer {
//     constructor(brand, price, rating){
//         this.brand = brand;
//         this.price = price;
//         this.rating = rating;
//     }

//     static someInfoComp() {
//         console.log("This is some info about Computer class");
//     }

//     setBrand(name){
//         this.brand = name;
//     }
//     getBrand(){
//         console.log("The name of the brand is " + this.brand);
//     }

//     setPrice(price) {
//         this.price = price;
//     }
//     getPrice() {
//         console.log("The price is " + this.price);
//     }

//     setRating(rate){
//         this.rating = rate;
//     }
//     getRating(){
//         console.log("The rate is " + this.rating);
//     }

//     specialMethod(){
//         return "This is a special method of the Computer class";
//     }
// }

// // Creating a child class of Computer:
// class CompInfo extends Computer {
//     constructor(brand, price, rating, ram) {
//         super(brand, price, rating);
//         this.ram = ram;
//     }
//     static someInfoCompNew(){
//         console.log("This is some info about CompInfo class");
//     }
//     setRam(ramValue){
//         this.ram = ramValue;
//     }
//     getRam() {
//         console.log("The ram of the computer is " + this.ram + "GB");
//     }
//     callingParentMethod(){
//         return super.specialMethod();
//     }
// }

// // Creating and using an object of Computer class:
// const obj1 = new Computer("", 0, 0);
// obj1.setBrand("My Brand");
// obj1.getBrand()
// obj1.setPrice(55000);
// obj1.getPrice();
// obj1.setRating(4.8);
// obj1.getRating();

// // Creating and using an object of CompInfo class:
// const obj2 = new CompInfo("", 0, 0, 0);
// obj2.setBrand("ABC");
// obj2.setPrice(45000);
// obj2.setRating(4.4);
// obj2.setRam(4);
// obj2.getBrand();
// obj2.getPrice();
// obj2.getRating();
// obj2.getRam();

// // Calling the static methods:
// Computer.someInfoComp();
// CompInfo.someInfoComp();
// CompInfo.someInfoCompNew();

// // Calling the special method:
// console.log("😀😀😀😀😀")
// console.log(obj2.callingParentMethod())




// class First {
//     constructor(a, b) {
//         this.a = a;
//         this.b = b;
//         console.log("This is from the constructor class of First class");
//     }

//     sum(){
//         return this.a + this.b;
//     }

//     division(){
//         return this.a / this.b;
//     }
// }


// class Second extends First {
//     constructor(a, b) {
//         super(a, b);
//         console.log("This is from the constructor of the Second class")
//     }
//     gettingInfoOfFirstClass(){
//         console.log(super.a);
//         console.log(super.b);
//         console.log(super.sum())
//         console.log(super.division())
//     }
// }

// const firstObj = new First(10,5);
// const secondObj = new Second(20,4);
// console.log(firstObj.a, firstObj.b, firstObj.sum(), firstObj.division());
// console.log(secondObj.a, secondObj.b, secondObj.sum(), secondObj.division());
