/** Switch case **/
/*
   switch is another way to writing conditionals
   the basic syntax:

   switch (expression)
      case choice1:
         run this code
         break;

       case choice2:
         run this code
         break;

       // include as many case as you need

       default:
          actually, just run this code
*/

/*
   let us ask a user how he is feeling
*/

const choice = 'happy';
let message;
// in the switch brackets we need to put our statement, the condition in which to give the case scenario
switch (choice) {
  // in the different cases we check if something is the same as the value we put in the switch statement
    case "happy":
       /*
          if the case is true (in this case 'choice' need to be 'happy' which happens to be true)
          the code the 'case:' is precessed
          in this case, we just assign the a string to the variable 'message'
       */
       message = 'How could you not be happy? We are coding!';
       break;

  case 'scared':
    message = 'Come on, cheer up, this is only the beginning!';
    break;

  case 'surprised':
    message = 'Yes I know, this is amazing';
    break;

  default:
    // default is basically the case that will run if, and only if NONE of the other cases were true
    message = 'You did not chose a correct term!';
}