// literal meanx data ko apna type khud daina basically , almost same as unuin
// let data :'123'|'abc'='123'
function combo(a, b, type) {
    if (type === "number-type") {
        return +a + +b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(combo(10, 10, "number-type"));
console.log(combo("bisma", "manzoor", "string-type"));
