//use the forEach() method instead of a for loop.


function findWaldo(arr, found) {
  arr.forEach(function(element, index) {
   if (element === "Waldo"){
    found(index);
   }
  })

}

// added argument of function actionWhenFound - index,
// reffered from i, so can pass value over

function actionWhenFound(index) {


  console.log('Found Waldo at index '  + index + ' !');
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);




