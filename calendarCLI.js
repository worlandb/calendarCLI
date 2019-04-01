//variables and constants
const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);
const _ = require('lodash');
var printWeek = '';

moment().format();
var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


//Initial test using January
var mRange = moment.range('2019-01-01 00:00', '2019-01-31 12:00');
let January = Array.from(mRange.by('day', { step: 1 }));
January.map(m => m.format('DD'))

for (i = 0; i < week.length; i++)
{
    printWeek += week[i] + "   ";
};
console.log(printWeek);
console.log(January);


//Calendar
function Calendar(mon, r)
{
    for (i = 0; i < week.length; i++)
    {
        printWeek += week[i] + "   ";
    };
    
    //Week format
    let mon = Array.from(r.by('day', { step: 1 }));
    mon.map(m => m.format('DD'))
    _.chunk(mon, [size=7])
    _.join(mon, '     ');

    for (i = 0; i < mon.length; i++)
    {
        console.log(mon[i] + '\n');
    };

    if (mon == 'January' || mon == 'October')
    {
        
    }
}

Calendar("January", "'2019-01-01 00:00', '2019-01-31 23:59'")
Calendar("February", "'2019-02-01 00:00', '2019-02-28 23:59'")
Calendar("March", "'2019-03-01 00:00', '2019-03-3123:59'")
Calendar("April", "'2019-04-01 00:00', '2019-04-30 23:59'")
Calendar("May", "'2019-05-01 00:00', '2019-05-31 23:59'")
Calendar("June", "'2019-06-01 00:00', '2019-06-30 23:59'")
Calendar("July", "'2019-07-01 00:00', '2019-07-31 23:59'")
Calendar("August", "'2019-08-01 00:00', '2019-08-31 23:59'")
Calendar("September", "'2019-09-01 00:00', '2019-09-30 23:59'")
Calendar("October", "'2019-10-01 00:00', '2019-10-31 23:59'")
Calendar("Novemember", "'2019-11-01 00:00', '2019-11-30 23:59'")
Calendar("Decemeber", "'2019-12-01 00:00', '2019-12-31 23:59'")