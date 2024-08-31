const weight = 56;
const height = 6;

if (weight <= 30) {
  console.log("You are underweight");
} else {
  if (weight >= 60) {
    console.log("You are normal");
  } else {
    if (height > 6 && weight < 56) {
      console.log("you are overweight");
    } else {
      const bmi = weight + 4;
      console.log(bmi + " you are obese");
    }
  }
}
