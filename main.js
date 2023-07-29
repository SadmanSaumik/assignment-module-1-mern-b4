// =========Task-1-Online Store Discount Calculator==========
document.getElementById("calculateDiscount").addEventListener("click", (e) => {
  const purchaseAmount = document.getElementById("totalAmount").value;
  if (purchaseAmount >= 50 && purchaseAmount <= 100) {
    discountCalculate(purchaseAmount, 5);
  } else if (purchaseAmount > 100 && purchaseAmount < 200) {
    discountCalculate(purchaseAmount, 10);
  } else if (purchaseAmount >= 200) {
    discountCalculate(purchaseAmount, 15);
  } else {
    discountCalculate(purchaseAmount, 0);
  }
  e.preventDefault();
});

function discountCalculate(purchaseAmount, discountPercent) {
  const discount = purchaseAmount * (discountPercent / 100);
  const discountedPrice = purchaseAmount - discount;
  document.getElementById("displayTotalAmount").innerHTML = purchaseAmount;
  document.getElementById("displayDiscountedPrice").innerHTML = discountedPrice;
  document.getElementById("displayDiscountedAmount").innerHTML = discount;
}

// =========Task-2-Filter Even Numbers==========

const originalArray = [12, 34, 45, 23, 6, 78, 54, 90];

const filteredEvenNumber = originalArray.filter((num) => {
  return num % 2 === 0;
});

document.getElementById(
  "filteredArray"
).innerHTML = `Even Filtered Array: [${filteredEvenNumber}]`;

console.log(filteredEvenNumber);

// =========Task-3-Multiplication Table Generator==========

document
  .getElementById("generateMultiplicationbtn")
  .addEventListener("click", (e) => {
    const inputNumber = document.getElementById(
      "multiplicationNumberInput"
    ).value;
    multiplicationTableGenerator(inputNumber);
    e.preventDefault();
  });

function multiplicationTableGenerator(number) {
  document.getElementById("multiplicationTable").innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${number} = ${i * number}`);
    document.getElementById(
      "multiplicationTable"
    ).innerHTML += `${i} x ${number} = ${i * number} <br>`;
  }
}

//multiplicationTableGenerator(8);

// =========Task-4-Grade Calculator==========

document.getElementById("calculateGradeBtn").addEventListener("click", (e) => {
  const marks = document.getElementById("marks").value;
  calculateGrade(marks);
  e.preventDefault();
});

function calculateGrade(number) {
  switch (true) {
    case number >= 90:
      console.log("Your Grade Is: A");
      document.getElementById("yourGrade").innerHTML = "Your Grade Is: A";
      break;
    case number >= 80:
      console.log("Your Grade Is: B");
      document.getElementById("yourGrade").innerHTML = "Your Grade Is: B";
      break;
    case number >= 70:
      console.log("Your Grade Is: C");
      document.getElementById("yourGrade").innerHTML = "Your Grade Is: C";
      break;
    case number >= 60:
      console.log("Your Grade Is: D");
      document.getElementById("yourGrade").innerHTML = "Your Grade Is: D";
      break;
    default:
      console.log("Your Grade Is: F");
      document.getElementById("yourGrade").innerHTML = "Your Grade Is: F";
  }
}

//calculateGrade(57);
