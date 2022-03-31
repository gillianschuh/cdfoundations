console.log(document.getElementById("field01").value);
document.getElementById("myButton").onclick = function () {
  document.getElementById("word01").innerHTML = document.getElementById("field01").value;
  document.getElementById("story").style.display = "block";
}
console.log("hello world")
