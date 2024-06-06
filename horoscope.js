let birthMonth = "January"
let fortuneId = Math.floor(Math.random()*11)+1;
let fortune = undefined;

if (fortuneId === 1) {
  fortune = "you will find love soon."
}
else if (fortuneId === 2) {
  fortune = "you will earn a lot of money soon."
}
else if (fortuneId === 3) {
  fortune = "you will get a promotion this month."
}
else if (fortuneId === 4) {
  fortune = "Bitcoin will hit 100k next week."
}
else if (fortuneId === 5) {
  fortune = "you will loose your job"
}
else if (fortuneId === 6) {
  fortune = "you will get a new car"
}
else if (fortuneId === 7) {
  fortune = "you will get married this year"
}
else if (fortuneId === 8) {
  fortune = "you will buy a house this year"
}
else if (fortuneId === 9) {
  fortune = "you will have a hair loss"
}
else if (fortuneId === 10) {
  fortune = "you will get have a baby this year"
}
else if (fortuneId === 11) {
  fortune = "you will win the lotery"
}
else if (fortuneId === 12) {
  fortune = "you will get a motorcycle soon"
}

if (birthMonth === "January") {
  console.log("Hey Capricorn " + fortune);
}
else if (birthMonth === "February") {
  console.log("Hey Aquarius " + fortune);
}
else if (birthMonth === "March") {
  console.log("Hey Pisces " + fortune);
}
else if (birthMonth === "April") {
  console.log("Hey Aries " + fortune);
}
else if (birthMonth === "May") {
  console.log("Hey Taurus " + fortune);
}
else if (birthMonth === "June") {
  console.log("Hey Gemini " + fortune);
}
else if (birthMonth === "July") {
  console.log("Hey Cancer " + fortune);
}
else if (birthMonth === "August") {
  console.log("Hey Leo " + fortune);
}
else if (birthMonth === "September") {
  console.log("Hey Virgo " + fortune);
}
else if (birthMonth === "October") {
  console.log("Hey Libra " + fortune);
}
else if (birthMonth === "November") {
  console.log("Hey Scorpio " + fortune);
}
else if (birthMonth === "December") {
  console.log("Hey Sagittarius " + fortune);
}
