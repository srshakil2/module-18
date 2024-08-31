const marks = 94;

if (marks <= 0 && marks >= 60) {
  console.log("grrat = fail");
} else if (marks >= 61 && marks <= 70) {
  console.log("You won by D");
} else if (marks >= 71 && marks <= 80) {
  console.log("You won by C");
} else if (marks >= 81 && marks <= 90) {
  console.log("You won by B");
} else if (marks >= 91 && marks <= 95) {
  console.log("You won by A");
} else {
  console.log("Great you won by goolden+");
}
