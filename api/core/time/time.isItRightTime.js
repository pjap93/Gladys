const moment = require('moment');
const Promise = require('bluebird');


module.exports = function isItRightTime(options){

    var now = new Date();

    var arrayOfSart = options.start.split(":");
    var arrayOfEnd = options.end.split(":");

    // default start time 00:00:00
    var date = new Date();
    date.setHours(arrayOfSart[0] || 0);
    date.setMinutes(arrayOfSart[1] || 0);
    date.setSeconds(arrayOfSart[2] || 0);

    
    // end time default is the end of the day
    var endDate = new Date();
    endDate.setHours(arrayOfEnd[0] || 23);
    endDate.setMinutes(arrayOfEnd[1] || 59);
    endDate.setSeconds(arrayOfEnd[2] || 59);

    // settings default options if not defined
    options = options || {};
    options.start = date;
    options.end = endDate;

    if(now >= date && now <= endDate) return true;
	return false;
};