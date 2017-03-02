console.log('hello world!');

document.getElementById('changeColor').addEventListener('click', function() {
  var color = document.getElementById('backgroundColor').value;
  var body = document.getElementById('body');
  body.style.background = color;

  console.log('body', body);
  console.log('you clicked me!')

});


function validateForm() {
  var name = document.getElementById('nameInput').value;
  var species = document.getElementById('speciesInput').value;
  var age = document.getElementById('ageInput').value;

  if (!name.length || !species.length || !age.length) {
    alert('name field must not be empty');
    return false;
  }

  if (isNaN(parseInt(age)) || typeof parseInt(age) !== 'number') {
    alert('age must be a number');
    return false;

  }
console.log(name, species, age);
  return true;

}

document.getElementById('htmlHide').addEventListener('click', function () {
  body.style.display="none";
  return false;
});
