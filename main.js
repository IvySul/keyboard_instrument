var font_size = 10;
var text_color = "black";

document.body.onkeydown = function(keypress_event){

  var key = keypress_event.key;

  var new_element = document.createElement("p");
  new_element.innerHTML = key;

  font_size = font_size + 5;
  new_element.style.fontSize = font_size + "px";

  new_element.style.color = text_color;

  document.body.appendChild(new_element);

  document.getElementById("key_display").innerHTML = key;

  if (key == "p") {
    document.body.style.backgroundColor = "pink";
  } else if (key == "o") {
    document.body.style.backgroundColor = "orange";
  } else if (key == "g") {
    document.body.style.backgroundColor = "green";
  } else if (key == "r") {
    document.body.style.backgroundColor = "red";
  } else if (key == "y") {
    document.body.style.backgroundColor = "yellow";
  } else if (key == "b") {
    document.body.style.backgroundColor = "blue";
  } else {
    document.body.style.backgroundColor = "white";
  }

  if (key == "1") {
    text_color = "red";
  } else if (key == "2") {
    document.body.style.backgroundColor = "orange";
  } else if (key == "3") {
    document.body.style.backgroundColor = "yellow";
  } else if (key == "4") {
    document.body.style.backgroundColor = "green";
  } else if (key == "5") {
    document.body.style.backgroundColor = "blue";
  } else if (key == "6") {
    document.body.style.backgroundColor = "purple";
  } else {
    text_color = "black";
  }
};

