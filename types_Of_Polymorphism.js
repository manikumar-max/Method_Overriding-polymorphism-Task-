// run time polymorphism -- method overriding;

// class Test{
//     m1(){
//         console.log("Angry");
//     }
// }

// class Child extends Test{
//     m2(){
//         console.log("Happy")
//     }
// }

// let child = new Child();
// child.m2();

// class Test{
//     m1(){
//         console.log("Angry");
//     }
// }

// class Child extends Test{
//     m1(){  // method overriding
//         console.log("Happy")
//     }
// }

// class GrandChild extends Child{
//     m1(){ // method overriding
//         console.log("sweet");
//     }
// }

// let test = new Test();
// test.m1();

// let child = new Child();
// child.m1();

// let grandchild = new GrandChild();
// grandchild.m1();

// polymorphism with multilevel inheritance.
// class Mobile {
//     display(){
//         console.log("mobile pixesls : 6px");
//     }
//     text(){
//         console.log("text feature available")
//     }
// }

// class SmartPhone extends Mobile{
//     display(){
//         super.display();
//         super.text();
//         console.log("mobile pixesls : 60px");
//     }
// }

// class LatestSmartPhone extends SmartPhone {
//     display(){
//         super.display();
//         super.text();
//         console.log("mobile pixesls : 600px");
//     }
// }

// let mobile = new LatestSmartPhone();
// mobile.display();

// polymorphism with heirarichal inheritance.
// class Parent{
//     have(){
//         console.log("parent house");
//     }
// }

// class Child1 extends Parent{
//     have(){
//         console.log("child1 car")
//     }
// }

// class Child2 extends Parent{
//     have(){
//         console.log("child2 bike")
//     }
// }

// let obj = new Child1();
// obj.have();

// compile time polymorphism (method overeloading.)

class Test{
    add(n1,n2){
        console.log(n1,n2);
    }
    add(n1,n2,n3){
        console.log(n1+n2+n3); //nan
    }
}

let t  =new Test();
t.add(10,20);