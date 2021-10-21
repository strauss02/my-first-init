const moment = require('moment');

function timeToNow(date) {
  const dateMoment = moment(date);
  return moment(dateMoment, 'YYYYMMDD').fromNow();
}

function timeFromAToB(date1, date2) {
  const date1Moment = moment(date1);
  const date2Moment = moment(date2);

  return date1Moment.diff(date2Moment, 'years');
}
