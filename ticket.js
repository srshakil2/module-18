const ticketPrice = 900;
const age = 14;
const students = true;

if (age < 15) {
  console.log("Ticket is free");
  if (students) {
    console.log("Your student of Dhaka univercity");
  }
} else {
  if (students === true) {
    const discount = (ticketPrice * 50) / 100;
    const prise = ticketPrice - discount;
    console.log(prise);
  } else {
    if (age >= 60) {
      const discount = (ticketPrice * 15) / 100;
      const prise = ticketPrice - discount;
      console.log(prise);
    } else {
      console.log(ticketPrice + 100);
    }
  }
}
