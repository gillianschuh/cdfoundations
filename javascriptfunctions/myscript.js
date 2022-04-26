document.getElementById("addButton").onclick = function() { 
  x = parseInt(document.getElementById("field01").value);
  y = parseInt(document.getElementById("field02").value);
  document.getElementById("my_div").innerHTML = addFunc(x,y);
}
