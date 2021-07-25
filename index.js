let today = new Date().toISOString().slice(5, 10);

// month is
let month = today.split("").slice(0, 2).join("");
// console.log(+month, today)
let day = today.split("");
day = day[day.length - 2] + day[day.length - 1];
// console.log(+day)

//set date you would like to start e.g. you want to start
// on July 24, 2021. So-> (2021,6,24)
//*month should be minus 1, because of zero-indexing
var date = new Date(2021, month - 1, day - 1);
var arr = ["#### D" + 1 + ": " + date.toISOString().substring(5, 10)];
console.log("start date:", date);
for (i = 1; i < 111; i++) {
  date.setDate(date.getDate() + 1);
  arr.push("#### D" + i + ": " + date.toISOString().substring(5, 10));
  console.log(arr[i]);
}
