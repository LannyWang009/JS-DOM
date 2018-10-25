// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

var button = document.getElementById("myButton");
var allBoxes = document.getElementsByClassName("box");

button.addEventListener('click', function() {
    allBoxes[0].style.backgroundColor = 'blue';
    allBoxes[1].style.backgroundColor = 'blue';
    allBoxes[2].style.backgroundColor = 'blue';
})