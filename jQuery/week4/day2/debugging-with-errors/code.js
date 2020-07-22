// For this exercise you must debug this project
// PS: there are errors in the HTML too

console.info('connected');

/**
 * This is a function that should run whenever one of the article boxes is clicked
 * This function will toggle a class in the CSS called 'active'
*/
// This part uses vanilla JS
// console.log('loaded')

const boxes = document.querySelectorAll('.examples article');

// Loop through the boxes and add an event listener to each of them
boxes.forEach(box => {
  box.addEventListener('click', function(){
    // Toggle the class of the clicked element
    this.classList.toggle('active');
  })
});

/**
 * Show and hide the dropdown navigation every time nav is clicked
 */

 // Now we can use jQuery
 
$('nav').click(function(){
  // Toggle (hide/show) of the navbox
  $('.navBox').toggle( 800);
});


/**
 * The comments of this page are stored in a JSON file which can be accessed over at 
 * https://jsonplaceholder.typicode.com/comments
 * Lets get the file and insert the first 10 comments into the page
 */

$.ajax({
  url : 'https://jsonplaceholder.typicode.com/comments'
}).done(function(data){
  // console.log(data);
  // Iterate 10 times to show only the first 10 comments
  for(let i = 0; i < 10; i++){
    // console.log(data[i]);
    // Create a template which will be appended to the .comments element for each of the 10 comments 
    const template = `
    <div class="comment">
      <div class="user">${data[i].email}</div>
      <div class="title">${data[i].name}</div>
      <div class="message">${data[i].body}</div>
      <div class="commentID">#${data[i].id}</div>
    </div>
    `;

    // add the template to the .comments element
    $('.comments').append(template);
  }
});


/**
 * Change the display of the different projects using arrows
 */


 // This is the go right function
 // When we click the right button it should change some classes around
$('.goright').click(function(){
  //console.log('in click of right');
  // see if the last .example in .row has the class showing
  if($('.row .examples:last-of-type').hasClass('showing')){
    // remove the class showing of all .examples
    $('.row .examples').removeClass('showing');
    // add the class showing to the first .example in .row
    $('.row .examples:first-of-type').addClass('showing')
  }else{
    // add class showing to the next element currently with the class showing
    $('.showing').next().addClass('showing');
     // remove the class showing from the first element with the class showing
    $('.showing').first().removeClass('showing')

  }
});

// This is the go left function
 // When we click the right button it should change some classes around
$('.goleft').click(function(){
  //console.log('in click of left');
  // see if the first .example in .row has the class showing
  if($('.row .examples:first-of-type').hasClass('showing')){
    // remove the class showing of all .examples
    $('.row .examples').removeClass('showing');
    // add the class showing to the last .example in .row
    $('.row .examples:last-of-type').addClass('showing')
  }else{
    // add class showing to the previous element currently with the class showing
    $('.showing').prev().addClass('showing');
    // remove the class showing from the last element with the class showing
    $('.showing').last().removeClass('showing')
  }
});