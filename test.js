// class Car {  // Create a class
//     constructor(brand) {  // Class constructor
//       this.carname = brand;  // Class body/properties
//     }
//   }
// const mycar = new Car("Ford");  // Create an object of Car class
// console.log(typeof Car); // function
// console.log(mycar.carname);


// class Book {
//     constructor(name, author) {
//         this.bookName = name;
//         this.bookAuthor = author;
//     }
//     showBookName(){
//         console.log(this.bookName)
//     }
//     showBookAuthor(){
//         console.log(this.bookAuthor);
//     }
//     static mystMeth(x){
//         console.log(`Static method and the name of the book is ${x.bookName}`)
//     }
//     static mystMeth2(){
//         console.log("This is a static method of the Book class")
//     }
// }

// class NoteBook extends Book {
//     constructor(name, author){
//         super(name, author)
//     }
//     static mystMeth3(){
//         console.log("This is a static method of class NoteBook")
//     }
//     bName() {
//         console.log(this.bookName);
//     }
//     bAuthor(){
//         console.log(this.bookAuthor);
//     }
// }

// const first = new Book("Bangla", "XYZ");
// const second = new NoteBook("English", "ABC");
// first.showBookName();
// first.showBookAuthor();
// second.bName();
// second.bAuthor();
// second.showBookName();
// second.showBookAuthor();
// console.log(second.bookName)
// console.log(second.bookAuthor)


// Calling static methods:
// Book.mystMeth(first);
// Book.mystMeth2();
// NoteBook.mystMeth3()


// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     present() {
//       return 'I have a ' + this.carname;
//     }
//   }
  
//   class Model extends Car {
//     constructor(brand, mod) {
//       super(brand);
//       this.model = mod;
//     }
//     show() {
//       return this.present() + ', it is a ' + this.model;
//     }
//   }
  
// const mycar = new Model('Ford', 'Mustang');
// console.log(mycar.carname);
// console.log(mycar.model);
// console.log(mycar.present());
// console.log(mycar.show());