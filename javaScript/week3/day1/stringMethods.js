// indexOf()
var notice = 'Important: Remember to pay your taxes';

console.log(notice.indexOf('Important'));
// this returns the index of the first letter

var word = 'Important';
// check if there is really in the subString
if(notice.indexOf(word) < 0){
    console.log('The word u are looking for is not in the String');
} else {
    console.log('The word u are loooking for is in the String: ' + word + '\n' +
    'On possition: ' + notice.indexOf(word));
}

console.clear();

// slice (to cut the string)
// the following will slice the string at index 11. Everything thats before this will not be shown. 
console.log(notice.slice(11));
// u can also define an endpoint (the thiknes of the slice)
console.log(notice.slice(11, 20));

// but the sliced part is not cut off. the sliced one is just a mutation/copy!
//console.log(notice);

console.clear();

// toUpperCase()
// toLowerCase()
// i think these methods are self-decribing

let sentence = 'thE qUick browN fOx Jumps oVeR thE LaZy DoG';
console.log(sentence.toUpperCase());

lower = sentence.toLowerCase()
console.log(lower);

let upper = sentence[0].toUpperCase() + lower.slice(1);
console.log(upper);

/*var brown = sentence[indexOf('browN')].toUpperCase()
            + sentence.slice(11, 14).toLowerCase();
console.log(brown);*/

// replace() 

let evil = 'We love devils';
evil = evil.replace('devils', 'unicorns');
console.log(evil);



