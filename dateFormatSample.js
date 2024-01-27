//dayjs rqeuired
const dayjs = require('dayjs');



var dateSample = "1996-08-29 10:00 AM"
//convert 29 Ağustos 1996 Perşembe 10:00


var date = dayjs(dateSample, 'YYYY-MM-DD HH:mm A')
console.log(date.format('DD MMMM YYYY dddd HH:mm')) //29 August 1996 Thursday 10:00