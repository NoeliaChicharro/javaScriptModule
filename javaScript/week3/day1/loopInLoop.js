/**
 * You are in charge of managing social channels for your company.
 * One of your tasks is to get go over user messages and change any negative 
 * comments to possitive comments.
 * You have grown tired of doing this and want to automate the process.
 * 
 * You have already prepared a bit and created 2 dictionaries.
 * The first one: goodwords, is a list of possitive words that you can use to replace negative words with
 * The second one: evilwords, is a list of words that you know are negative and need to be removed.
 */

var goodwords = ['amazing', 'intriguing', 'versatile']
var evilwords = ['boring', 'useless', 'obsolete']

var messages = [
  'Learning to code is very important in the modern age',
  'JavaScript is an obsolete and useless programming language',
  'There is nothing more useless than programming',
  'I think writing code is boring', 
  'I absolutely love js'
]

let filteredMessages = [];

for(let i = 0; i < messages.length; i++){
    let newMessages = messages[i];
    for(let j = 0; j < goodwords.length; j++){
        newMessages = newMessages.replace(evilwords[j], goodwords[j]);       
    }
    filteredMessages.push(newMessages);
}

console.log(filteredMessages);