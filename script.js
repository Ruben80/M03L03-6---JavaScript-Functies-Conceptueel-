// Part A

/* MakeChickenSandwich
    Get one slice of bread
    Add chicken
    Put a slice of bread on top */

// const MakeChickenSandwich = function () {
//   console.log("Get one slice of bread");
//   console.log("Add chicken");
//   console.log("Put a slice of bread on top");
// };

// MakeChickenSandwich();

// Part B
/* const MakeSandwich = function (topping) { // function declation
  console.log("Get one slice of bread");
  console.log("Add" + " " + topping + " " + "to the bread");
  console.log("Put a slice of bread on top");
  console.log("There you go, a sandwich with..." + topping);
};

MakeSandwich("ham"); // call function
MakeSandwich("cheese"); // call function
*/

// Part C


/*const calculateDiscountedPrice = function(totalAmount, discount) {
  return Math.round(totalAmount - discount);
};
calculateDiscountedPrice(25, 10);
*/

// Part D 

const calculateDiscountedPrice = function(totalAmount, discount) {
    console.log(Math.round(totalAmount - discount));
  };
  const calculateDiscountedPriceClone = function(totalAmount, discount) {
    if (totalAmount > 25) {
      console.log(Math.round(totalAmount - discount));
    } else {
      console.log(totalAmount);
    }
  };
  calculateDiscountedPriceClone(25, 10);
  calculateDiscountedPriceClone(30, 10);