let myMap = new Map();
let keyString = "String";
let keyObject = {};
let keyFunc = function(){};

myMap.set(keyString, "jeongyeon");
myMap.set(keyObj, "donggun's obj");
myMap.set(keyFunc, "from jeongyeon's home");

myMap(); // Map(3) -> Entries
Map.prototype; // confirm Map's prototype, size,get,set,has ....
myMap.get(keyString); // jeongyoon / String type
myMap.get({});  // undefined / different keyObject
myMap.get(function(){}); // undefined / different keyFunc

myMap.forEach((val, key)=>{
    console.log(`${val} : ${key}`);
});

Array.from(myMap.values()); // ["jeongyeon", "donggun's obj", "jeongyeon's func"]

// 해쉬사용, 개발자가 임의로 지정한 object가 아닌 js에서 강제로 지정한 고유의 object를 생성할때 사용