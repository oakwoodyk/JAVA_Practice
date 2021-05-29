//課題①
const array = [2, 4, 7, 5, 4, 3, 8];
const F = array.filter(function (x, i, self) {
  return self.indexOf(x) === i;
});
console.log(F);


//課題②
function LeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
    } {
    return false;
  }
};
const setYear = [2020, 2021];
for (let i = 0; i < setYear.length; i++) {
  if (LeapYear(setYear[i])) {
    console.log(setYear[i] + 'はうるう年である');
  } else{
    console.log(setYear[i]+ 'はうるう年ではない');
  }
}