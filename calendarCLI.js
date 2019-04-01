const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);
const _ = require('lodash');
var printWeek = '';
var printMonth = '';

moment().format();
//January
var months = ['January', 'February', 'March', 'April' , 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var mRange = moment.range('2019-01-01 00:00', '2019-01-31 12:00');
let January = Array.from(mRange.by('day', { step: 1 }));
January.map(m => m.format('DD'))


//February

//Calendar


//Print
//console.log(months[0]);
for (i = 0; i < week.length; i++)
{
    printWeek += week[i] + "   ";
};

console.log(printWeek);
console.log(January);
