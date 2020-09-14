var games  = ['The Last of US', 'Red Dead Redemption 2', 'Mafia 2', 'Far Cry 3'];
console.log(games[0]);
console.log(games[1]);
console.log(games[2]);
console.log(games[3]);

//stack

var games  = ['The Last of US', 'Red Dead Redemption 2', 'Mafia 2', 'Far Cry 3'];
games.push('The Last of US');
games.push('Red Dead Redemption 2');
games.push('Mafia 2');
games.push('Far Cry 3');

console.log(games.pop()); //The Last of US
console.log(games.pop()); //Red Dead Redemption 2
console.log(games.pop()); //Mafia 2
console.log(games.pop()); //Far Cry 3

//queue

var games = [];
games.push('Red Dead Redemption2');
games.push('Far Cry 3');
games.push('The Last of Us');
games.push('Mafia 2');

console.log(games.shift()); //Red Dead Redemption 2
console.log(games.shift()); //Far Cry 3
console.log(games.shift()); //The Last of Us
console.log(games.shift()); //Mafia 2


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 22, 25, 31, 85, 88, 91, 99];
Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 22, 25, 31, 85, 88, 91, 99); //returns 1
Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 22, 25, 31, 85, 88, 91, 99); // returns 99

