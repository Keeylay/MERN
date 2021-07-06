console.log(hello);                                   
var hello = 'world';                                 
// after hoisting
// var hello = 'world';
// console.log(hello);
// prints  world

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// after hoisting
// umm.. no changes need to be made..
// prints magnet in the function

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// after hoisting
// no changes needed
// will print out super cool.. function is not called

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// after hoisting
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     var food = 'gone';
//     food = 'half-chicken';
//     console.log(food);
// }
// prints chicken
// when function is called prints half-chicken var gets pulled to the top but comes first

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// after hoisting
// mean();
// console.log(food);
// var mean = function() {
//     var food = "fish";
//     food = "chicken";
//     console.log(food);
//     console.log(food);
// }
// console.log(food);
// will give an error cuz mean isnt a function

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// after hoisting
//prints undefine rock r&b disco

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// after hoisting
// prints san jose seattle burbank san jose

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// after hoisting
// will give an error, cant assign const dojo after its been assigned






