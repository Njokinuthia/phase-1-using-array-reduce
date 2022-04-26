const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution herey aybatch in the arr
// holds sum of batter
const totalBatteries = batteryBatches.reduce(function(acc ,element){
  return acc += element
} , 0)
console.log(totalBatteries)


