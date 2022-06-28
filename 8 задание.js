let myMap = new Map();
myMap.set("key", "prop");
myMap.set(1,'prop2');
myMap.set(true, 123);

console.log(myMap.keys())
console.log(myMap.values())

for (let name of myMap.keys()){
    console.log('x', name)
}

for (let name of myMap.values()){
    console.log('y', name)
}