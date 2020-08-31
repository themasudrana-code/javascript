var age = 12;
var friendsAge = [12, 12,23, 34, 45];
friendsAge[2] = 21;

// position in array 
var position = friendsAge.indexOf(21);
// add element in array 
friendsAge.push(22);
console.log(friendsAge);
// remove and add element in array 
friendsAge.pop();
friendsAge.unshift(54)
friendsAge.shift(54)
console.log(friendsAge[2]);
console.log(position);

// total element in array 
console.log(friendsAge.length);
console.log(friendsAge);
