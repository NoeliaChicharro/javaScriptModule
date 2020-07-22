/** ID SELECTION **/
const idSelection = document.getElementById('title');

// this will count as an attribute (so keep the hyrarchy in mind)
idSelection.style.color = 'pink';

/** CLASS SELECTOR **/
const classSelection = document.getElementsByClassName('listItem');
console.log(classSelection);

for (let i = 0; i < classSelection.length; i++){
  classSelection[i].style.backgroundColor = 'pink';
}

/** TAG SELECTOR **/
const tagSelector = document.getElementsByTagName('ul');
tagSelector[0].style.fontSize = '18px';

/** QUERY SELECTOR **/
// all CSS selectors u are comfortable with are usable.
const header = document.querySelector('h2');
header.style.color = '#222';

// this just selects the first one. U cannot select more then one element!
const li = document.querySelector('li');

const allLis = document.querySelectorAll('li');
allLis.forEach(function(item) {
  item.style.listStyle = 'none';
  item.style.color = 'gray';
});
