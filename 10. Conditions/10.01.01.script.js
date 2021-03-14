// external js file
// Write all JavaScript code here

// if conditional statement

/*if(condition/expression) {
  // Code to be executed if condition/expression is true
}
*/

function age_check(age) {
 	return age%2 == 0 ? true: false
}

let user = 'Dinanath';

if (user == 'Dinanath') {
  console.log('Welcome Dinanath!');
  // window.alert('Welcome Dinanath!');
}

if (user == 'Dinanath') {
  console.log('Welcome Authorised User: ' + user + '!');
  // window.alert('Welcome Authorised User: ' + user + '!');
}

// ------------------------------

let age = 21;

if (age_check(age)) {
  console.log('MAJOR! Eligible for Voting');
  // window.alert('MAJOR! Eligible for Voting');
}else{
  console.log('MAJOR! Not Eligible for Voting');
}