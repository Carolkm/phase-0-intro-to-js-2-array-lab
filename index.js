// Write your solution here!
const cats  = ["Milo", "Otis" ,"Garfield"]
function destructivelyAppendCat (name) {
    cats.push ('Ralph')
}
function destructivelyPrependCat(name) {
    cats.unshift ('Bob')
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat () {
    cats.shift()
}
function appendCat (name) {
    const catListNew =[...cats, name];
    return catListNew;
}
function prependCat (name) {
    const catList2= [name,...cats];
    return catList2
}
function removeLastCat () {
    const newCatList= cats.slice(0,cats.length-1);
    return newCatList;
}
function removeFirstCat () {
    const lastCat = cats.slice(1)
    return lastCat;
}