var cars = ["Fred", "Mary","Joe"];
console.log(cars.length);
for ( var i = 0; i < cars.length ; i++ ) {
//	console.log(i);
	console.log(cars[i]);
  console.log(i);
  // Below I ouput the data to the webpage. I take the innerHTML of "jOutput" and add a space and then the value of cars[i] with every iteration of the loop.
document.getElementById("jOutput").innerHTML = document.getElementById("jOutput").innerHTML + " " + cars[i];
}


for ( var n = 0; n <= 20; n = n + 1 ) {
	if ((n+1)%2==0){
		document.getElementById('evenodd').innerHTML = document.getElementById('evenodd').innerHTML + (n+1) + " is even. </br>" ;
	}
	else {
		document.getElementById('evenodd').innerHTML = document.getElementById('evenodd').innerHTML + (n+1) + " is odd.</br>";
	}
};

var numset1 = [ 2, 6, 9, 8 ];
var numset2 = [ 11, 1236, 9000, 434 ];
var numset3 = [];
console.log( numset1[0] + numset2[0] );
for ( y =0; y < numset1.length; y++) {
  console.log( numset1[y] + numset2[y] );
	document.getElementById("addingup").innerHTML = document.getElementById("addingup").innerHTML +
		(numset1[y]+numset2[y]) + ", ";
  numset3[y] = numset1[y] + numset2[y];
}
console.log(numset3);

let str1 = "javascript";
var str2 = "";
console.log(str1);
console.log(str1.length);
for (p = 0; p < str1.length; p++){
	if (n%2==0){
		strl2+="Z";
	} else {
		str2 += str1[p];
	}
}
	console.log(str2);
