console.log( document.getElementById("field01").value );
document.getElementById("myButton").onclick = function() {
  document.getElementById("word01").innerHTML = document.getElementById("field01").value;
  document.getElementById("word02").innerHTML = document.getElementById("field02").value;
  document.getElementById("word03").innerHTML = document.getElementById("field03").value;
  document.getElementById("word04").innerHTML = document.getElementById("field04").value;
  document.getElementById("word05").innerHTML = document.getElementById("field05").value;
  document.getElementById("word06").innerHTML = document.getElementById("field06").value;
  document.getElementById("word08").innerHTML = document.getElementById("field08").value;
  document.getElementById("word09").innerHTML = document.getElementById("field09").value;
  document.getElementById("word10").innerHTML = document.getElementById("field10").value;
  document.getElementById("word11").innerHTML = document.getElementById("field11").value;
  document.getElementById("word12").innerHTML = document.getElementById("field12").value;
  document.getElementById('myButton').style.color = "#6a0dad";
  document.getElementById("story").style.display = "block";
}
