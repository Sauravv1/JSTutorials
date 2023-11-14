// Spread Operator in OBJECTS

const obj1 = {
    key1: "value 1",
    key2 : "value 2"
}

const obj2 = {
    key1: "value 14",
    key3 : "value 3",
    key4 : "value 4"
}

const newObj = { ...obj1, ...obj2}
console.log(newObj);

// Spread operator in object follows that the key value written later will be higher in precedence
// eg above same key but different values
// 