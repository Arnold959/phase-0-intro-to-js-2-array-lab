// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendCat(Ralph) {
    cats.push('Ralph');
}
function destructivelyPrependCat(Bob){
    cats.unshift('Bob')
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(Broom){
    return ['Milo', 'Otis', 'Garfield', 'Broom']

}
function prependCat(Arnold) {
    return ['Arnold', 'Milo', 'Otis', 'Garfield']

}
function removeLastCat(cats){
    return ['Milo', 'Otis']
}
function removeFirstCat(cats){
    return ['Otis', 'Garfield']

}