// Decimal Time Conversion (7kyu) - February 18th

function toIndustrial(time){
  
  if (typeof time === 'number'){
    return Number((time / 60).toFixed(2))
  } else {
    let totalMins = 0
  
  const newArr = time.split(':').map(num => Number(num))
  
  console.log(newArr)
  return newArr[0] + (newArr[1] / 60).toFixed(2).slice(1)

  }
}

function toNormal(time) {
  if (typeof time === 'number') {

      let hours = Math.floor(time);
      let minutes = Math.round((time % 1) * 60);
      if (minutes === 60) {
          hours++;
          minutes = 0;
      }
      return `${hours}:${minutes.toString().padStart(2, '0')}`;
  } else {
      return NaN;
  }
}


toNormal(0.33) //("0:20");

toNormal(1.50) //("1:30");

toNormal(69.99373876) //("70:00");



toIndustrial(1) //(0.02);
toIndustrial(2) //(0.03);
toIndustrial(105) //(1.75);


toIndustrial("0:03") //(0.05);
toIndustrial("0:04") //(0.07);
toIndustrial("1:45") //(1.75);




