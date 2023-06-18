// let x = 25;
// alert(x);
//Marks Variable
// const markMass = 78;
// const markHeight = 1.69;

// //John Variable
// const johnMass = 92;
// const johnHieght = 1.95;

// //mark BMI
// const markBmi = 78 / 1.69 ** 2;
// console.log(markBmi);

//John BMI
// const johnBmi = 92 / 1.95 ** 2;
// console.log(johnBmi);
// //MarkHigherBMI
// const markHigherBmi = (markBmi, johnBmi);
// console.log(markBmi > johnBmi);

//Challange 2
// const BMIMark = 21.3;
// const BMIJohn = 28.2;

// if (BMIMark >= BMIJohn) {
//   console.log(`Marks BMI (${BMIMark}) is higher than John BMI (${BMIJohn})`);
// }

// const BMIMark = 21.3;
// const BMIJohn = 28.2;

// if (BMIMark > BMIJohn) {
//   console.log("Marks BMI is higher than John BmI");
// } else {
//   console.log(`Johns BMI (${BMIMJohn}) is higher than Marks BmI (${BMIMark})`);
// }

// Template Literal
// const firstName = "Lawrence";
// const job = "Pharmacist";
// const birthYear = 1998;
// const year = 2023;

// const newName = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
// console.log(newName);
// // Template Literal With Multiple Lines
// console.log(`strings \n\
// with \n\
// multiple \n\
// is been \n\
// in \n\
// use`);

//IF ELSE STATEMENT
// let age = 18;
// if (age <= 17) {
//   console.log(`Sarah can vote`);
// } else {
//   const yearLeft = age - 17;
//   console.log(`Sarah is too young. wait another ${yearLeft} year.`);
// }

// let tinubu = `president`;
// if (tinubu !== `president`) {
//   console.log(`Yoruba Ronu`);
// } else {
//   alert(`Nigerians voted for Peter Obi`);
// }

// const birthYear = 2023;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 22;
// }
// console.log(century);

//Challenge 3a
// const dolphinScore = (96, 108, 89);
// const koalaScore = (88, 91, 110);

// //Average Score for each
// const dolphinAverageScore = (96 + 108 + 89) / 3;
// const koalaAverageScore = (88 + 91 + 110) / 3;
// // console.log(dolphinAverageScore);
// // console.log(koalaAverageScore);

// if (dolphinAverageScore > koalaAverageScore) {
//   console.log(" I i'm the winner");
// } else {
//   console.log("koala is the winner");
// }

// // If they have the same score
// if (dolphinAverageScore === koalaAverageScore) {
//   console.log("Dolphin has the highest score");
// } else {
//   console.log("I Koala has the highest score");
// }

//Challenge 3b
// let miniumumScore = 100;
// const dolphinScore = (97, 112, 101);
// const koalasScore = (109, 95, 123);

// //Average score
// const dolphinAverageScore = (97 + 112 + 101) / 3;
// const koalaAverageScore = (109 + 95 + 123) / 3;

// console.log(dolphinAverageScore);
// console.log(koalaAverageScore);

// if (dolphinAverageScore > koalaAverageScore && dolphinAverageScore >= 100) {
//   console.log("Dolphin win the trophy");
// } else if (
//   koalaAverageScore > dolphinAverageScore &&
//   koalaAverageScore >= 100
// ) {
//   console.log("Koalas wins the trophy");
// } else if (dolphinAverageScore === koalaAverageScore) {
//   console.log("Both wins the trophy");
// }

// Challenge 3c
// let miniumumScore = 100;
// const dolphinScore = (97, 112, 101);
// const koalasScore = (109, 95, 123);

//Average score
// const dolphinAverageScore = (97 + 112 + 80) / 3;
// const koalaAverageScore = (109 + 95 + 50) / 3;

// console.log(dolphinAverageScore);
// console.log(koalaAverageScore);

// if (dolphinAverageScore > koalaAverageScore && dolphinAverageScore >= 100) {
//   console.log("Dolphin win the trophy");
// } else if (
//   koalaAverageScore > dolphinAverageScore &&
//   koalaAverageScore >= 100
// ) {
//   console.log("Koalas wins the trophy");
// } else if (
//   dolphinAverageScore === koalaAverageScore &&
//   dolphinAverageScore >= 100 &&
//   koalaAverageScore >= 100
// ) {
//   console.log("Both wins the trophy");
// } else {
//   console.log("No one wins the trophy");
// }

// const weekDay = "Saturday";
// if (weekDay === "Monday") {
//   console.log("Plan course structuer");
//   console.log("Go to coding meetup");
// } else if (weekDay === "Tuesday") {
//   console.log("Prepare theory videos");
// } else if (weekDay === "Wednesday" || weekDay === "Thursday") {
//   console.log("Write code exemple");
// } else if (weekDay === "Friday") {
//   console.log("Record vidoes");
// } else if (weekDay === "Saturday" || weekDay === "Sunday") {
//   console.log("Enjoy the weekend");
// } else {
//   console.log("Not a valid day!");
// }

//Switch statement
const day = "Friday";

switch (day) {
  case "monday":
    console.log("Plan course struture");
    console.log("Go to coding meetup");
    break;

  case "Tuesday":
    console.log("Prepare theory videos");
    break;

  case "Wednesday":
  case "Thurday":
    console.log("Write code exemple");
    break;

  case "Friday":
    console.log("Record vidoes");
    break;

  case "Saturday":
  case "Sunday":
    console.log("Enjoy the weekend");
    break;
  case "default":
    console.log("Not a valid day!");
}
