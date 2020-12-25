// 스태틱 프로퍼티와 메서드란 인스턴스에 따라 달라지지 않는 프로퍼티와 메서드 를 말합니다.
// 스태틱 멤버: 공개 스태틱 멤버 & 비공개 스테틱 멤버 존재

// 공개스태틱멤버: 바로 호출 가능. 인스턴스 필요 없음. ex) Christmas.holiday() // yes
// 비공개스태틱멤버: 클래스 사용자에게 보이지 않음. 클래스의 인스턴스들을 모두 함께 사용할 수 있음. 생성자 외부에서는 접근할 수 없음.



// 생성자 
var Gadget = function () { }; 

// 스태틱 메서드 
Gadget.isShiny = function () {
    return 'you bet.' 
}; 

// 프로토타입에 일반적인 함수를 추가
Gadget.prototype.setPrice = function (price) { 
    this.price = price; 
};

// 스태틱 메서드를 호출하는 방법
console.log(Gadget.isShiny()); // you bet
console.log(Gadget.setPrice()); // Uncaught TypeError: Gadget.setPrice is not a function

// 인스턴스를 생성한 후 메서드를 호출하기
var iPhone = new Gadget(); 
iPhone.setPrice(500); // Gadget {price: 500}

console.log(typeof Gadget.setPrice); // undefined 
console.log(typeof iPhone.isShiny); // undefined

console.log(typeof Gadget.isShiny); // function
console.log(typeof iPhone.setPrice); // function

Gadget.prototype.isShiny = Gadget.isShiny; 
console.log(iPhone.isShiny()); // you bet.

var Gadget = function () { // 스태틱 변수/프로퍼티  - 클로저 함수 생성 
    var counter = 0; // 생성자의 새로운 구현 버전을 반환한다. 

    return function () { 
       console.log(counter += 1); 
    }; 
}(); // 즉시 실행한다.

Gadget(); // 1
Gadget(); // 2
Gadget(); // 3

let counter1 = new Gadget(); // 4
let counter2 = new Gadget(); // 5 
let counter3 = new Gadget(); // 6 

console.log(counter1); // {}
console.log(counter2); // {}
console.log(counter3); // {}




// 생성자 
var Gadget = function () { 
    
    // 스태틱 변수/프로퍼티 
    var counter = 0, 
        NewGadget; 
    
    // 이 부분이 생성자를 새롭게 구현한 부분이다. 
    NewGadget = function () { 
        console.log('hi');
        counter += 1; 
    }; 

    // 특권 메서드 
    NewGadget.prototype.getLastId = function () { 
        return counter;         
    }; 

    // Gadget 생성자를 덮어쓴다.
     return NewGadget;

}(); // 즉시 실행한다.

console.log(Gadget); // ƒ () { console.log('hi'); counter += 1; }

const iPhone = new Gadget(); // "hi"  || Gadget-> iPhone's clousre -> 1
console.log(iPhone); // NewGadget {}
console.log(iPhone.getLastId()); // 1 
console.log(iPhone.getLastId()); // 1 

const iPod = new Gadget(); // "hi" || iPod's clousre -> 2
console.log(iPod.getLastId()); // 2 
console.log(iPod.getLastId()); // 2 

const iPad = new Gadget(); // "hi" || iPad's clousre -> 3
console.log(iPad.getLastId()); // 3 
console.log(iPad.getLastId()); // 3 

Gadget(); // 4
Gadget(); // 5
Gadget(); // 6
Gadget(); // 7
Gadget(); // 8
Gadget(); // 9 

const cost = new Gadget();
console.log(cost.getLastId()); // 10 