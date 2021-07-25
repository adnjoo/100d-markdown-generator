var date = new Date(2021,6,02);
var arr = ['#### D'+ 1 +': ' +date.toISOString().substring(5,10)]
console.log(date)
for(i=1;i<111;i++){
  date.setDate(date.getDate() + 1);
  arr.push('#### D'+ i +': ' +date.toISOString().substring(5,10))
  console.log(arr[i])
}

for(i=0;i<arr.length;i++){
}
console.log(arr)

let today = new Date().toISOString().slice(5, 10)

console.log(today)