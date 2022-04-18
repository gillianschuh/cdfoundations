var cars = ["Fred", "Mary", "Joe"];

for ( var i = cars.length-1; i >= 0; i-- ) {
  // console.log(i);
  console.log(cars[i]);
  console.log(i);
  // Below I output the data to the webpage. I take the innterHTML of "j0utput"
  //      and add a space and then the value of cars [i] with every interation of
  //      the loop.
  document.getElementById("carsbackwards").innerHTML =
    document.getElementById("carsbackwards").innerHTML + " " + cars[i];
}
for ( var n = 0; n <= 20; n = n +1) {
  if ((n+1)%2==0){
    console.log(n + " is odd.");
  } else {
    console.log(n);
  }
};

var numset1 = [ 2, 6, 9, 8 ];
var numset2 = [ 11, 1236, 9000, 434 ];
var numset3 = [];
console.log(numset1[0]+numset[0]);
for ( y =0; y < numset1.length; y++) {
  console.log( numset1[y] + numset2 [y] );
  numset3[y] = numset1[y] + numset2[y];
}
