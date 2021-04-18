function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  console.log('TODO - validate the longitude, latitude values before submitting');
  
const lat = document.querySelector(".lati").value;
const long = document.querySelector(".longi").value;
  
  var valid;
  var lati = document.querySelector(".lat > span");
  lati.innerText = "*";
  var longi = document.querySelector(".long > span");
  longi.innerText = "*";
if(lat < 91 && lat > -91 && long < 181 && long > -181 && !isNaN(long) && !isNaN(lat) ){
valid = true;
}else{
  
if((long < -180 || long > 180) || isNaN(long)){
  var span = document.querySelector(".long > span");
  span.innerText = "* must be a valid Longitude (-180 and 180)";
  
}

if((lat < -90 || lat > 90) || isNaN(lat)){
  var span = document.querySelector(".lat > span");
  span.innerText = "* must be a valid Latitude (-90 and 90)";
  
}

valid = false;
}

  return valid;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
